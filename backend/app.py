from datetime import datetime
from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import bcrypt

app = Flask("__main__")
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:UWP12345!@35.246.149.161:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


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

        return jsonify({"stations": stations})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/trains', methods=['POST'])
def get_trains():
    data = request.json
    from_station = data.get('from_station', '').strip()
    to_station = data.get('to_station', '').strip()
    travel_date = data.get('travel_date')
    travel_time = data.get('travel_time')  # Yeni: Saat ve dakika

    print(f"Alınan veri: from={from_station}, to={to_station}, date={travel_date}, time={travel_time}")  # Debug

    if not from_station or not to_station or not travel_date:
        return jsonify({"error": "Missing required fields."}), 400

    try:
        travel_date_obj = datetime.strptime(travel_date, "%Y-%m-%d").date()
        print(f"Parsed date: {travel_date_obj}")  # Debug

        query = db.session.query(Streckentabelle).filter(
            Streckentabelle.station_name_from == from_station,
            Streckentabelle.station_name_to == to_station,
            Streckentabelle.planned_arrival_date_from == travel_date_obj
        )

        # Eğer saat bilgisi gönderilmişse, saate göre filtrele
        if travel_time:
            travel_time_obj = datetime.strptime(travel_time, "%H:%M").time()
            print(f"Parsed time: {travel_time_obj}")  # Debug
            query = query.filter(Streckentabelle.planned_departure_from >= travel_time_obj)

        trains = query.all()

        print(f"Bulunan trenler: {len(trains)}")  # Debug

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
        print(f"Hata: {str(e)}")  # Debug
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)