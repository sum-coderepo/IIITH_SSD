from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy.sql import func
from flask import Flask, render_template, redirect, request, session
from flask_session import Session

import os

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = \
    'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

Session(app)

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)

    def __init__(self, name, password, email):

        self.name = name
        self.password = password
        self.email = email

    def __repr__(self):
        return f'<Student {self.name}>'


class User(db.Model):
    __tablename__ = 'user'

    name = db.Column(db.String, primary_key=True)
    password = db.Column(db.String)
    authenticated = db.Column(db.Boolean, default=False)

    def is_active(self):
        return True

    def get_id(self):
        return self.name

    def is_authenticated(self):
        return self.authenticated

    def is_anonymous(self):
        return False


@app.route('/login', methods=['GET', 'POST'])
def signin():
    note=None
    if request.method == 'POST':
        tag = request.json['name']
        user = User.query.filter_by(username=tag).first()
        if user != None:
            password = user.passwordL
            if password == request.json['password']:
                session['logged_in'] = True
            else:
                note='wrong password'
        else:
            note="this username does not seem to exist."
    return note

@app.route('/signup', methods=['GET', 'POST'])
def signup():

    if request.method == 'POST':
        name = request.json['name']
        password = request.json['password']
        email = request.json['email']

        StudentObj = Student(name,password, email)

        db.session.add(StudentObj)
        db.session.commit()
    return "Successful"

@app.route("/logout")
def logout():
    session["name"] = None

if __name__ == '__main__':
    app.run()
