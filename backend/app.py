from datetime import datetime
from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import bcrypt
import requests
import json

app = Flask("__main__")
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:UWP12345!@35.246.149.161:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Mevcut modeller (User, Streckentabelle, Stations, Sollstrecken) aynı kalıyor
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    vorname = db.Column(db.String(80), nullable=False)
    nachname = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    passwort = db.Column(db.String(120), nullable=False)
    tel_nummer = db.Column(db.String(20), nullable=False)

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

# Mevcut endpoint'ler (/api/register, /api/login, vb.) aynı kalıyor
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
        from_stations = db.session.query(Streckentabelle.station_name_from).distinct().all()
        to_stations = db.session.query(Streckentabelle.station_name_to).distinct().all()
        stations = set([station[0] for station in from_stations] + [station[0] for station in to_stations])
        stations = sorted(list(stations))
        print(f"Returning {len(stations)} stations from /api/stations")
        return jsonify({"stations": stations})
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

@app.route('/api/trains', methods=['POST'])
def get_trains():
    data = request.json
    from_station = data.get('from_station', '').strip()
    to_station = data.get('to_station', '').strip()
    travel_date = data.get('travel_date')
    travel_time = data.get('travel_time')
    print(f"Alınan veri: from={from_station}, to={to_station}, date={travel_date}, time={travel_time}")
    if not from_station or not to_station or not travel_date:
        return jsonify({"error": "Missing required fields."}), 400
    try:
        travel_date_obj = datetime.strptime(travel_date, "%Y-%m-%d").date()
        print(f"Parsed date: {travel_date_obj}")
        query = db.session.query(Streckentabelle).filter(
            Streckentabelle.station_name_from == from_station,
            Streckentabelle.station_name_to == to_station,
            Streckentabelle.planned_arrival_date_from == travel_date_obj
        )
        if travel_time:
            travel_time_obj = datetime.strptime(travel_time, "%H:%M").time()
            print(f"Parsed time: {travel_time_obj}")
            query = query.filter(Streckentabelle.planned_departure_from >= travel_time_obj)
        trains = query.all()
        print(f"Bulunan trenler: {len(trains)}")
        train_list = [
            {
                "id": train.id,
                "train_reihenfolge_from": train.train_reihenfolge_from,
                "train_classification": train.train_classification,
                "from_station": train.station_name_from,
                "to_station": train.station_name_to,
                "planned_departure_from": f"{train.planned_departure_from.strftime('%H:%M:%S')}" if train.planned_departure_from else None,
                "planned_arrival_to": f"{train.planned_arrival_to.strftime('%H:%M:%S')}" if train.planned_arrival_to else None,
                "arrival_delay_from": train.arrival_delay_from,
                "arrival_delay_to": train.arrival_delay_to
            }
            for train in trains
        ]
        return jsonify({"trains": train_list})
    except Exception as e:
        print(f"Hata: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/route_plan', methods=['POST'])
def route_plan():
    data = request.json
    from_station = data.get('from_station', '').strip()
    to_station = data.get('to_station', '').strip()
    travel_date = data.get('travel_date')
    travel_time = data.get('travel_time')
    if not from_station or not to_station or not travel_date or not travel_time:
        return jsonify({"error": "Missing required fields."}), 400
    try:
        # Jule'nin API'sine istek
        response = requests.get(
            "http://127.0.0.1:5001/route",
            params={
                "source": from_station,
                "target": to_station,
                "date": travel_date,
                "time": travel_time
            },
            timeout=10
        )
        if response.status_code != 200:
            print(f"flask_app.py response: {response.text}")
            return jsonify({"error": "Error in route planning service."}), 500
        # Ham yanıtı logla
        print(f"Raw response from flask_app: {response.text}")
        try:
            routes = response.json()
        except ValueError as e:
            print(f"JSON decode error: {str(e)}")
            try:
                routes = json.loads(response.text)
            except json.JSONDecodeError:
                return jsonify({"error": "Invalid JSON from route planning service."}), 500
        print(f"Parsed routes: {routes}")
        if not routes:
            return jsonify({"error": "No routes found."}), 404
        # routes'un bir liste olduğundan emin ol
        if not isinstance(routes, list):
            print(f"Invalid routes type: {type(routes)}")
            return jsonify({"error": f"Expected list for routes, got {type(routes)}"}), 400
        # Veriyi predict_app.py'nin beklediği formata dönüştür
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
                try:
                    arrival_date = datetime.strptime(
                        item['planned_arrival_date_from'], "%a, %d %b %Y %H:%M:%S %Z"
                    )
                    departure_time = datetime.strptime(
                        item['planned_departure_from'], "%a, %d %b %Y %H:%M:%S %Z"
                    )
                    arrival_time = datetime.strptime(
                        item['planned_arrival_to'], "%a, %d %b %Y %H:%M:%S %Z"
                    )
                    formatted_item = {
                        "station_name_from": item['station_name_from'].encode('utf-8').decode('utf-8'),
                        "station_name_to": item['station_name_to'].encode('utf-8').decode('utf-8'),
                        "planned_arrival_date_from": arrival_date.strftime("%Y-%m-%d"),
                        "planned_departure_from": departure_time.strftime("%H:%M:%S"),
                        "planned_arrival_to": arrival_time.strftime("%H:%M:%S"),
                        "train_number": str(int(item['train_number']))
                    }
                    formatted_route.append(formatted_item)
                except ValueError as e:
                    print(f"Error parsing datetime: {str(e)}")
                    return jsonify({"error": "Invalid datetime format in routes."}), 500
            formatted_routes.append(formatted_route)
        print("Formatted Routes:", json.dumps(formatted_routes, indent=2))
        # Emre'nin API'sine istek
        emre_response = requests.post(
            "http://127.0.0.1:5002/predict",
            json=formatted_routes,
            timeout=10
        )
        print(f"Predict API response: {emre_response.text}")
        if emre_response.status_code != 200:
            return jsonify({"error": "Error in prediction service.", "details": emre_response.text}), 500
        predictions = emre_response.json()
        # Tahminleri ve rotaları standardize et
        standardized_predictions = [
            {
                "station_name_from": p['station_name_from'].encode('utf-8').decode('utf-8'),
                "station_name_to": p['station_name_to'].encode('utf-8').decode('utf-8'),
                "train_number": p['train_number'],
                "planned_arrival_date_from": p['planned_arrival_date_from'],
                "planned_departure_from": p['planned_departure_from'],
                "planned_arrival_to": p['planned_arrival_to'],
                "predicted_delay": p['predicted_delay'],
                "category_probabilities": p['category_probabilities']
            }
            for p in predictions
        ]
        standardized_routes = []
        for route in routes:
            standardized_route = []
            for item in route:
                standardized_route.append({
                    "station_name_from": item['station_name_from'].encode('utf-8').decode('utf-8'),
                    "station_name_to": item['station_name_to'].encode('utf-8').decode('utf-8'),
                    "train_number": str(int(item['train_number'])),
                    "planned_arrival_date_from": item['planned_arrival_date_from'],
                    "planned_departure_from": item['planned_departure_from'],
                    "planned_arrival_to": item['planned_arrival_to']
                })
            standardized_routes.append(standardized_route)
        return jsonify({
            "routes": standardized_routes,
            "predictions": standardized_predictions
        })
    except requests.exceptions.RequestException as e:
        print(f"Error in API communication: {str(e)}")
        return jsonify({"error": "Failed to communicate with services."}), 500
    except Exception as e:
        print(f"Error in route planning: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)