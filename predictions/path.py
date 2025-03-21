from flask_cors import CORS
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token

"""""
app = Flask(__name__)
CORS(app)

# PostgreSQL Veritabanı Ayarları
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Kullanıcı Modeli
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

# Yeni bir kullanıcı kaydetme
@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(username=data['username'], password=hashed_password)

    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User registered successfully!"}), 201
    except:
        return jsonify({"error": "Username already exists"}), 400

# Kullanıcı giriş yapma
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()

    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity=user.username)
        return jsonify({"access_token": access_token}), 200

    return jsonify({"error": "Invalid credentials"}), 401
class User(db.Model):
    __tablename__ = 'users'  # DataGrip'teki tablo adını belirtin
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)

@app.route('/api/shortest_path', methods=['POST'])
def api_shortest_path():
    data = request.get_json()
    from_node = data.get('from_node')
    to_node = data.get('to_node')
    travel_datetime = data.get('travel_datetime')
    from predictions.path import shortest_path
    result = shortest_path(from_node, to_node, travel_datetime)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)

"""""


