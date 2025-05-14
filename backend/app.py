from datetime import datetime, timedelta
from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import bcrypt
import requests
import json
import math

app = Flask("__main__")
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:UWP12345!@35.246.149.161:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Mevcut modeller (User, Streckentabelle, Stations, Sollstrecken, SollfahrplanReihenfolge)
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    vorname = db.Column(db.String(80), nullable=False)
    nachname = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    passwort = db.Column(db.String(120), nullable=False)
    tel_nummer = db.Column(db.String(20), nullable=False)

class SollfahrplanReihenfolge(db.Model):
    __tablename__ = 'sollfahrplan_reihenfolge'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    zugtyp = db.Column(db.String(50))
    zug = db.Column(db.Integer)
    halt = db.Column(db.String(100), nullable=False)
    ankunft_geplant = db.Column(db.Time)
    abfahrt_geplant = db.Column(db.Time)
    gleis = db.Column(db.String(10))
    halt_nummer = db.Column(db.Integer)
    train_avg_30 = db.Column(db.Float)
    station_avg_30 = db.Column(db.Float)

class Streckentabelle(db.Model):
    __tablename__ = 'streckentabelle'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    train_reihenfolge_from = db.Column(db.String(50))
    station_name_from = db.Column(db.String(100), nullable=False)
    planned_arrival_date_from = db.Column(db.Date)
    planned_arrival_from = db.Column(db.Time)
    planned_departure_from = db.Column(db.Time)
    arrival_delay_from = db.Column(db.Integer)
    train_reihenfolge_to = db.Column(db.String(50))
    station_name_to = db.Column(db.String(100), nullable=False)
    planned_arrival_to = db.Column(db.Time)
    planned_departure_to = db.Column(db.Time)
    arrival_delay_to = db.Column(db.Integer)
    train_classification = db.Column(db.String(50))

class Stations(db.Model):
    __tablename__ = 'stations'
    id = db.Column(db.Integer, primary_key=True)
    station_name = db.Column(db.String(100), nullable=False)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)

class Sollstrecken(db.Model):
    __tablename__ = 'sollstrecken'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    train_classification = db.Column(db.String(50))
    train_number_from = db.Column(db.String(50))
    order_from = db.Column(db.Integer)
    station_name_from = db.Column(db.String(100), nullable=False)
    train_number_to = db.Column(db.String(50))
    order_to = db.Column(db.Integer)
    station_name_to = db.Column(db.String(100), nullable=False)

# JSON NaN düzeltmesi
def sanitize_json(data):
    if isinstance(data, dict):
        return {k: sanitize_json(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [sanitize_json(item) for item in data]
    elif isinstance(data, float) and (math.isnan(data) or math.isinf(data)):
        return 0
    return data

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    hashed_password = bcrypt.hashpw(data['passwort'].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    new_user = User(
        vorname=data['vorname'],
        nachname=data['nachname'],
        email=data['email'],
        passwort=hashed_password,
        tel_nummer=data['tel_nummer']
    )
    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "Kullanıcı başarıyla kaydedildi!"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    user = User.query.filter_by(email=email).first()
    if user and bcrypt.checkpw(password.encode('utf-8'), user.passwort.encode('utf-8')):
        return jsonify({"message": "✅ Login erfolgreich!",
                        "user": {"id": user.id, "vorname": user.vorname, "nachname": user.nachname,
                                 "email": user.email}})
    return jsonify({"message": "❌ Falsche E-Mail oder Passwort!"}), 401

@app.route('/api/admin/login', methods=['POST'])
def admin_login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    user = User.query.filter_by(email=email).first()
    if user and bcrypt.checkpw(password.encode('utf-8'), user.passwort.encode('utf-8')):
        if user.id == 1:
            return jsonify({
                "message": "✅ Admin login erfolgreich!",
                "user": {
                    "id": user.id,
                    "vorname": user.vorname,
                    "nachname": user.nachname,
                    "email": user.email
                }
            })
        else:
            return jsonify({"message": "❌ Unauthorized: Only admins can log in!"}), 403
    return jsonify({"message": "❌ Invalid email or password!"}), 401

@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    user_list = [
        {"id": user.id, "vorname": user.vorname, "nachname": user.nachname, "email": user.email}
        for user in users
    ]
    return jsonify(user_list)

@app.route('/api/delete_user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    if user_id == 1:
        return jsonify({"message": "❌ Admin kann nicht gelöscht werden"}), 403
    user = User.query.get(user_id)
    if not user:
        return jsonify({"message": "⚠️ Benutzer nicht gefunden!"}), 404
    try:
        db.session.delete(user)
        db.session.commit()
        users = User.query.order_by(User.id).all()
        new_id = 1
        for user in users:
            user.id = new_id
            new_id += 1
        db.session.commit()
        return jsonify({"message": "✅ User wurde erfolgreich gelöscht."})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@app.route('/api/stations', methods=['GET'])
def get_stations():
    try:
        stations = db.session.query(SollfahrplanReihenfolge.halt).distinct().all()
        station_list = sorted(set(station[0] for station in stations if station[0] is not None))
        print(f"Returning {len(station_list)} stations from /api/stations")
        return jsonify({"stations": station_list})
    except Exception as e:
        print(f"Error in get_stations: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/station_coordinates', methods=['GET'])
def get_station_coordinates():
    try:
        stations = db.session.query(Stations).all()
        station_list = [
            {
                "id": station.id,
                "station_name": station.station_name,
                "latitude": station.latitude,
                "longitude": station.longitude
            }
            for station in stations
        ]
        print(f"Returning {len(station_list)} stations from /api/station_coordinates: {station_list[:5]}")
        return jsonify({"stations": station_list})
    except Exception as e:
        print(f"Error in get_station_coordinates: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/sollstrecken_stations', methods=['GET'])
def get_sollstrecken_stations():
    try:
        from_stations = db.session.query(Sollstrecken.station_name_from).distinct().all()
        to_stations = db.session.query(Sollstrecken.station_name_to).distinct().all()
        stations = set([station[0] for station in from_stations] + [station[0] for station in to_stations])
        stations = sorted(list(stations))
        print(f"Returning {len(stations)} stations from /api/sollstrecken_stations")
        return jsonify({"stations": stations})
    except Exception as e:
        print(f"Error in get_sollstrecken_stations: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/drawroute', methods=['POST'])
def draw_route():
    data = request.json
    from_station = data.get('from_station', '').strip()
    to_station = data.get('to_station', '').strip()
    if not from_station or not to_station:
        return jsonify({"error": "Missing required fields: from_station and to_station."}), 400
    try:
        routes = db.session.query(Sollstrecken).filter(
            Sollstrecken.station_name_from == from_station,
            Sollstrecken.station_name_to == to_station,
            Sollstrecken.train_number_from == Sollstrecken.train_number_to
        ).all()
        if not routes:
            from_trains = db.session.query(Sollstrecken.train_number_from).filter(
                Sollstrecken.station_name_from == from_station
            ).distinct().all()
            to_trains = db.session.query(Sollstrecken.train_number_to).filter(
                Sollstrecken.station_name_to == to_station
            ).distinct().all()
            common_trains = set([t[0] for t in from_trains]) & set([t[0] for t in to_trains])
            if not common_trains:
                return jsonify({"error": "No route found between the stations."}), 404
            train_number = list(common_trains)[0]
            print(f"Selected train number: {train_number}")
            stops = db.session.query(Sollstrecken).filter(
                Sollstrecken.train_number_from == train_number,
                Sollstrecken.train_number_to == train_number
            ).order_by(Sollstrecken.order_from).all()
            start_order = None
            end_order = None
            for stop in stops:
                if stop.station_name_from == from_station:
                    start_order = stop.order_from
                if stop.station_name_to == to_station:
                    end_order = stop.order_to
            if start_order is None or end_order is None or start_order >= end_order:
                return jsonify({"error": "Invalid route: stations not in correct order."}), 404
            route_stops = []
            for stop in stops:
                if stop.order_from >= start_order and stop.order_to <= end_order:
                    route_stops.append({
                        "station_name": stop.station_name_from,
                        "order": stop.order_from
                    })
                    if stop.order_to == end_order:
                        route_stops.append({
                            "station_name": stop.station_name_to,
                            "order": stop.order_to
                        })
            route_stops = sorted(route_stops, key=lambda x: x["order"])
            unique_stations = []
            seen_stations = set()
            for stop in route_stops:
                if stop["station_name"] not in seen_stations:
                    unique_stations.append(stop["station_name"])
                    seen_stations.add(stop["station_name"])
        else:
            unique_stations = [from_station, to_station]
        station_coords = {station.station_name: {"latitude": station.latitude, "longitude": station.longitude}
                         for station in db.session.query(Stations).all()}
        coordinates = []
        for station_name in unique_stations:
            if station_name in station_coords:
                coordinates.append({
                    "station_name": station_name,
                    "latitude": station_coords[station_name]["latitude"],
                    "longitude": station_coords[station_name]["longitude"]
                })
            else:
                print(f"Warning: Coordinates not found for station {station_name}")
        if not coordinates:
            return jsonify({"error": "No coordinates found for the route."}), 404
        route = {
            "train_number": train_number if 'train_number' in locals() else routes[0].train_number_from if routes else "Unknown",
            "stops": [
                {
                    "station_name": coord["station_name"],
                    "planned_arrival": None,
                    "planned_departure": None,
                    "delay": None
                } for coord in coordinates
            ]
        }
        print(f"Returning route with {len(coordinates)} stops")
        return jsonify({
            "route": route,
            "coordinates": coordinates
        })
    except Exception as e:
        print(f"Error in draw_route: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/route_plan', methods=['POST'])
def route_plan():
    data = request.json
    from_station = data.get('from_station', '').strip()
    to_station = data.get('to_station', '').strip()
    travel_date = data.get('travel_date')
    travel_time = data.get('travel_time')
    print(f"Alınan veri: from={from_station}, to={to_station}, date={travel_date}, time={travel_time}")
    if not from_station or not to_station or not travel_date or not travel_time:
        return jsonify({"error": "Missing required fields."}), 400
    try:
        response = requests.get(
            "http://127.0.0.1:5001/route",
            params={
                "source": from_station,
                "target": to_station,
                "date": travel_date,
                "time": travel_time
            },
            timeout=20
        )
        print(f"flaskapp /route response: {response.text}")
        print(f"Raw response from flaskapp /route: {response.text}")
        if response.status_code != 200:
            print(f"flaskapp /route response: {response.text}")
            return jsonify({"error": "Error in route planning service."}), 500
        print(f"Raw response from flaskapp /route: {response.text}")
        try:
            routes = response.json()
        except ValueError as e:
            print(f"JSON decode error: {str(e)}")
            return jsonify({"error": "Invalid JSON from route planning service."}), 500
        print(f"Parsed routes: {json.dumps(routes, indent=2, default=str)}")
        if not routes:
            return jsonify({"error": "No routes found."}), 404
        if not isinstance(routes, list):
            print(f"Invalid routes type: {type(routes)}")
            return jsonify({"error": f"Expected list for routes, got {type(routes)}"}), 400

        formatted_routes = []
        for route in routes:
            if not isinstance(route, list):
                print(f"Invalid route format: {route}")
                return jsonify({"error": f"Expected list for route, got {type(route)}"}), 400
            formatted_route = []
            for item in route:
                if not isinstance(item, dict):
                    print(f"Invalid item format: {item}")
                    return jsonify({"error": f"Expected dict for item, got {type(item)}"}), 400
                required_fields = [
                    'station_name_from', 'station_name_to', 'train_number',
                    'planned_arrival_date_from', 'planned_departure_from', 'planned_arrival_to',
                    'halt_nummer', 'station_avg_30', 'train_avg_30'
                ]
                for field in required_fields:
                    if field not in item:
                        print(f"Missing field {field} in item: {item}")
                        return jsonify({"error": f"Missing required field: {field}"}), 400
                try:
                    arrival_date_str = item['planned_arrival_date_from']
                    departure_time_str = item['planned_departure_from']
                    arrival_time_str = item['planned_arrival_to']
                    try:
                        arrival_date_dt = datetime.strptime(arrival_date_str, "%a, %d %b %Y %H:%M:%S GMT")
                        departure_time_dt = datetime.strptime(departure_time_str, "%a, %d %b %Y %H:%M:%S GMT")
                        arrival_time_dt = datetime.strptime(arrival_time_str, "%a, %d %b %Y %H:%M:%S GMT")
                    except ValueError as e:
                        print(f"Error parsing datetime: {str(e)}")
                        return jsonify({"error": f"Invalid datetime format: {str(e)}"}), 400
                    formatted_arrival_date = arrival_date_dt.strftime("%Y-%m-%d")
                    formatted_departure_time = departure_time_dt.strftime("%H:%M:%S")
                    formatted_arrival_time = arrival_time_dt.strftime("%H:%M:%S")
                    station_avg = 0 if not isinstance(item['station_avg_30'], (int, float)) or math.isnan(item['station_avg_30']) else item['station_avg_30']
                    train_avg = 0 if not isinstance(item['train_avg_30'], (int, float)) or math.isnan(item['train_avg_30']) else item['train_avg_30']
                    formatted_item = {
                        "station_name_from": item['station_name_from'].encode('utf-8').decode('utf-8'),
                        "station_name_to": item['station_name_to'].encode('utf-8').decode('utf-8'),
                        "planned_arrival_date_from": formatted_arrival_date,
                        "planned_departure_from": formatted_departure_time,
                        "planned_arrival_to": formatted_arrival_time,
                        "train_number": str(int(item['train_number'])),
                        "reihenfolge_from": item['halt_nummer'],
                        "station_avg_delay_7_30": station_avg,
                        "train_avg_delay_7_30": train_avg
                    }
                    formatted_route.append(formatted_item)
                except Exception as e:
                    print(f"Error processing item: {str(e)}")
                    return jsonify({"error": f"Error processing route item: {str(e)}"}), 500
            formatted_routes.append(formatted_route)
        print("Formatted Routes for Emre:", json.dumps(formatted_routes, indent=2))

        emre_response = requests.post(
            "http://127.0.0.1:5002/predict",
            json=formatted_routes,
            timeout=45
        )
        print(f"First Predict API response: {emre_response.text}")
        if emre_response.status_code != 200:
            return jsonify({"error": "Error in prediction service.", "details": emre_response.text}), 500
        first_predictions = emre_response.json()

        routes_with_predictions = []
        prediction_index = 0
        prev_arrival_time = None
        prev_train_number = None
        for route in routes:
            route_with_predictions = []
            for i, item in enumerate(route):
                if prediction_index >= len(first_predictions):
                    print(f"Prediction index out of range: {prediction_index}")
                    return jsonify({"error": "Mismatch in predictions and route items."}), 500
                pred = first_predictions[prediction_index]
                prediction_index += 1
                arrival_date_str = item['planned_arrival_date_from']
                departure_time_str = item['planned_departure_from']
                arrival_time_str = item['planned_arrival_to']
                try:
                    arrival_date_dt = datetime.strptime(arrival_date_str, "%a, %d %b %Y %H:%M:%S GMT")
                    departure_time_dt = datetime.strptime(departure_time_str, "%a, %d %b %Y %H:%M:%S GMT")
                    arrival_time_dt = datetime.strptime(arrival_time_str, "%a, %d %b %Y %H:%M:%S GMT")
                except ValueError as e:
                    print(f"Error parsing datetime: {str(e)}")
                    return jsonify({"error": f"Invalid datetime format: {str(e)}"}), 400
                arrival_date = arrival_date_dt.strftime("%Y-%m-%d")
                departure_time = departure_time_dt.strftime("%H:%M:%S")
                arrival_time = arrival_time_dt.strftime("%H:%M:%S")
                departure_dt = datetime.strptime(f"{arrival_date} {departure_time}", "%Y-%m-%d %H:%M:%S")
                arrival_dt = datetime.strptime(f"{arrival_date} {arrival_time}", "%Y-%m-%d %H:%M:%S")
                if arrival_dt < departure_dt:
                    arrival_dt += timedelta(days=1)
                umsteigeort = None
                umsteigezeit_minuten = None
                if i + 1 < len(route) and str(int(item['train_number'])) != str(int(route[i + 1]['train_number'])):
                    umsteigeort = item['station_name_to']
                    next_departure_str = route[i + 1]['planned_departure_from']
                    next_departure_dt = datetime.strptime(next_departure_str, "%a, %d %b %Y %H:%M:%S GMT")
                    umsteigezeit_minuten = (next_departure_dt - arrival_dt).total_seconds() / 60
                station_avg = 0 if not isinstance(item['station_avg_30'], (int, float)) or math.isnan(item['station_avg_30']) else item['station_avg_30']
                train_avg = 0 if not isinstance(item['train_avg_30'], (int, float)) or math.isnan(item['train_avg_30']) else item['train_avg_30']
                route_item = {
                    "station_name_from": item['station_name_from'].encode('utf-8').decode('utf-8'),
                    "station_name_to": item['station_name_to'].encode('utf-8').decode('utf-8'),
                    "planned_departure_from": departure_dt.isoformat(),
                    "planned_arrival_to": arrival_dt.isoformat(),
                    "train_number": str(int(item['train_number'])),
                    "departure_date": arrival_date,
                    "zugtyp": item['zugtyp'] if 'zugtyp' in item else '',
                    "halt_nummer": item['halt_nummer'],
                    "train_avg_30": train_avg,
                    "station_avg_30": station_avg,
                    "umsteigeort": umsteigeort,
                    "umsteigezeit_minuten": umsteigezeit_minuten,
                    "predicted_delay": pred['predicted_delay'],
                    "category_probabilities": pred['category_probabilities']
                }
                route_with_predictions.append(route_item)
                prev_arrival_time = arrival_dt
            routes_with_predictions.append(route_with_predictions)
        print("Routes with Predictions for Jule:", json.dumps(routes_with_predictions, indent=2))

        replan_response = requests.post(
            "http://127.0.0.1:5001/api/analyse_and_replan",
            json={"detailed_routes": routes_with_predictions},
            timeout=60
        )
        print(f"Replan API response: {replan_response.text}")

        if replan_response.status_code != 200:
            return jsonify({"error": "Error in replan service.", "details": replan_response.text}), 500
        replan_data = replan_response.json()
        if replan_data.get("status") != "success":
            return jsonify({"error": "Replan service returned an error.", "details": replan_data.get("message")}), 500
        analysed_routes = replan_data.get("analysed_routes", [])
        if not analysed_routes:
            return jsonify({"error": "No analysed routes returned from replan service."}), 404

        final_routes = []
        for route in analysed_routes:
            if not isinstance(route, dict):
                print(f"Invalid route format: {route}")
                return jsonify({"error": f"Expected dict for route, got {type(route)}"}), 400
            urspruengliche_route = route.get('urspruengliche_route', [])
            alternative_routeninfos = route.get('alternative_routeninfos', [])
            erwartete_gesamtverspaetung = route.get('erwartete_gesamtverspaetung_minuten', 0)
            gesamtverspaetungswahrscheinlichkeit = route.get('gesamtverspaetungswahrscheinlichkeit', 0)
            formatted_route = []
            for item in urspruengliche_route:
                if not isinstance(item, dict):
                    print(f"Invalid item format: {item}")
                    return jsonify({"error": f"Expected dict for item, got {type(item)}"}), 400
                required_fields = [
                    'station_name_from', 'station_name_to', 'train_number',
                    'planned_departure_from', 'planned_arrival_to',
                    'halt_nummer', 'station_avg_30', 'train_avg_30'
                ]
                for field in required_fields:
                    if field not in item:
                        print(f"Missing field {field} in item: {item}")
                        return jsonify({"error": f"Missing required field: {field}"}), 400
                try:
                    arrival_date_str = item.get('departure_date', '')
                    if not arrival_date_str:
                        print(f"Missing departure_date in item: {item}")
                        return jsonify({"error": "Missing departure_date field"}), 400
                    departure_time_str = item['planned_departure_from']
                    arrival_time_str = item['planned_arrival_to']
                    if 'GMT' in arrival_date_str:
                        arrival_date_dt = datetime.strptime(arrival_date_str, "%a, %d %b %Y %H:%M:%S GMT")
                    else:
                        arrival_date_dt = datetime.strptime(arrival_date_str, "%Y-%m-%d")
                    try:
                        departure_time_dt = datetime.strptime(departure_time_str, "%Y-%m-%dT%H:%M:%S")
                    except ValueError:
                        departure_time_dt = datetime.strptime(departure_time_str, "%a, %d %b %Y %H:%M:%S GMT")
                    try:
                        arrival_time_dt = datetime.strptime(arrival_time_str, "%Y-%m-%dT%H:%M:%S")
                    except ValueError:
                        arrival_time_dt = datetime.strptime(arrival_time_str, "%a, %d %b %Y %H:%M:%S GMT")
                    formatted_arrival_date = arrival_date_dt.strftime("%Y-%m-%d")
                    formatted_departure_time = departure_time_dt.strftime("%H:%M:%S")
                    formatted_arrival_time = arrival_time_dt.strftime("%H:%M:%S")
                    station_avg = 0 if not isinstance(item['station_avg_30'], (int, float)) or math.isnan(item['station_avg_30']) else item['station_avg_30']
                    train_avg = 0 if not isinstance(item['train_avg_30'], (int, float)) or math.isnan(item['train_avg_30']) else item['train_avg_30']
                    formatted_item = {
                        "station_name_from": item['station_name_from'].encode('utf-8').decode('utf-8'),
                        "station_name_to": item['station_name_to'].encode('utf-8').decode('utf-8'),
                        "planned_arrival_date_from": formatted_arrival_date,
                        "planned_departure_from": formatted_departure_time,
                        "planned_arrival_to": formatted_arrival_time,
                        "train_number": item['train_number'],
                        "reihenfolge_from": item['halt_nummer'],
                        "station_avg_delay_7_30": station_avg,
                        "train_avg_delay_7_30": train_avg,
                        "zugtyp": item['zugtyp'] if 'zugtyp' in item else '',
                        "predicted_delay": item.get('predicted_delay', 0),
                        "category_probabilities": item.get('category_probabilities', {})
                    }
                    formatted_route.append(formatted_item)
                except Exception as e:
                    print(f"Error processing item: {str(e)}")
                    return jsonify({"error": f"Error processing route item: {str(e)}"}), 500
            final_route = {
                "route": formatted_route,
                "alternative_routeninfos": alternative_routeninfos,
                "erwartete_gesamtverspaetung_minuten": erwartete_gesamtverspaetung,
                "gesamtverspaetungswahrscheinlichkeit": gesamtverspaetungswahrscheinlichkeit
            }
            final_routes.append(final_route)
        final_routes = sanitize_json(final_routes)
        first_predictions = sanitize_json(first_predictions)
        return jsonify({
            "routes": final_routes,
            "predictions": first_predictions
        }), 200
    except Exception as e:
        print(f"Error in route planning: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)