import pandas as pd
import networkx as nx
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
    __tablename__ = 'users'  # PostgreSQL'deki tablonun adı
    id = db.Column(db.Integer, primary_key=True)
    vorname = db.Column(db.String(80), nullable=False)
    nachname = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    passwort = db.Column(db.String(120), nullable=False)
    tel_nummer = db.Column(db.String(20), nullable=False)


@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    hashed_password = bcrypt.hashpw(data['passwort'].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    new_user = User(
        vorname=data['vorname'],
        nachname=data['nachname'],
        email=data['email'],
        passwort=hashed_password,  # Şifre güvenli şekilde saklanıyor
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
        return jsonify({"message": "❌ Admin kann nicht gelösccht werden"}), 403  # Admin koruma

    user = User.query.get(user_id)
    if not user:
        return jsonify({"message": "⚠️ Benutzer nicht gefunden!"}), 404

    try:
        db.session.delete(user)
        db.session.commit()
        # ID'leri yeniden sıralama
        users = User.query.order_by(User.id).all()
        new_id = 1
        for user in users:
            user.id = new_id
            new_id += 1
        db.session.commit()
        return jsonify({"message": "✅ User wurde erfolgreich gelöscht.!"})
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
if __name__ == "__main__":
    app.run(debug=True)

#file_path = r'C:\Users\Berk\PycharmProjects\travelApp\predictions\Data_Regression_Test.xlsx'
"""""
xls = pd.ExcelFile(file_path)

df = pd.read_excel(xls, sheet_name='Sheet1')


def shortest_path(from_node: str, to_node: str, travel_date: str, travel_time: str):
    from_node = from_node.strip().upper()
    to_node = to_node.strip().upper()

    travel_datetime = f"{travel_date} {travel_time}"
    travel_time_obj = datetime.strptime(travel_datetime, "%d.%m.%Y %H:%M")

    if 6 <= travel_time_obj.hour < 10:
        category = 1
    elif 10 <= travel_time_obj.hour < 14:
        category = 2
    elif 14 <= travel_time_obj.hour < 18:
        category = 3
    else:
        category = 4

    df_filtered = df[df["Category"] == category]

    G = nx.DiGraph()
    for _, row in df_filtered.iterrows():
        G.add_edge(row["From"], row["To"], weight=row["Planned Travel Time"], delay=row["Predicted Delay"])

    if from_node not in G.nodes or to_node not in G.nodes:
        return f"Error: {from_node} or {to_node} not found in the graph!"

    try:
        path = nx.shortest_path(G, source=from_node, target=to_node, weight="weight")
        total_time = nx.shortest_path_length(G, source=from_node, target=to_node, weight="weight")

        delays = []
        for i in range(len(path) - 1):
            edge = (path[i], path[i + 1])
            if 'delay' in G.edges[edge]:
                delays.append(G.edges[edge]['delay'])
            else:
                print(f"Missing delay information: {edge}")
                delays.append(0)

        total_delay = sum(delays)
        path_info = " -> ".join([f"{path[i]} (Delay: {delays[i]:.2f} min)" for i in range(len(delays))]) + f" -> {path[-1]}"

        return (f"Shortest path for {travel_datetime}: {path_info}\n"
                f"Total planned travel time: {total_time:.2f} minutes \n"
                f"Total predicted delay: {total_delay:.2f} minutes")
    except nx.NetworkXNoPath:
        return f"No path found between {from_node} and {to_node}!"


@app.route('/api/shortest_path', methods=['POST'])
def shortest_path_api():
  data = request.get_json()
  print(f"Received data: {data}")  # Gelen veriyi kontrol et

  travel_date = data.get("travel_date")
  travel_time = data.get("travel_time")

  if not travel_date or not travel_time:
    return jsonify({"error": "Missing travel_date or travel_time field."}), 400

  travel_datetime = f"{travel_date} {travel_time}"  # 'DD.MM.YYYY HH:MM' formatı olacak
  print(f"Combined travel datetime: {travel_datetime}")  # Kontrol için konsola yazdır

  try:
    # Travel datetime'ı doğru formatta ayarlayın
    travel_time_obj = datetime.strptime(travel_datetime, "%d.%m.%Y %H:%M")
  except ValueError as e:
    print(f"Date parsing error: {e}")  # Hata mesajını kontrol et
    return jsonify({"error": "Invalid date format. Please use 'dd.mm.yyyy hh:mm'."}), 400

  # Bu kısımda, artık travel_date ve travel_time parametrelerini fonksiyona gönderiyoruz
  result = shortest_path(data.get("from_node"), data.get("to_node"), travel_date, travel_time)

  return jsonify({"result": result})  # Sonucu JSON formatında döndürüyoruz
"""""
