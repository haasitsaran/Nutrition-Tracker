from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# Create database
def init_db():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS users (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL,
                        age INTEGER NOT NULL,
                        email TEXT UNIQUE NOT NULL,
                        password TEXT NOT NULL)''')
    conn.commit()
    conn.close()

# Signup route
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    age = data.get('age')
    email = data.get('email')
    password = data.get('password')

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    try:
        cursor.execute("INSERT INTO users (name, age, email, password) VALUES (?, ?, ?, ?)",
                       (name, age, email, password))
        conn.commit()
        return jsonify({"message": "Signup successful"}), 201
    except sqlite3.IntegrityError:
        return jsonify({"message": "Email already exists"}), 400
    finally:
        conn.close()

# Login route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email = ? AND password = ?", (email, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        return jsonify({"message": f"Welcome back, {user[1]}!"}), 200
    else:
        return jsonify({"message": "Invalid email or password"}), 401

if __name__ == "__main__":
    init_db()
    app.run(debug=True)
