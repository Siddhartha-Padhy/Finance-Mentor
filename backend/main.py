from flask import Flask, url_for, request, jsonify
from utils import *

app = Flask(__name__)
app.config['SECRET_KEY'] = str(getSecretKey())

@app.route('/', methods =["GET", "POST"])
def index_page():
    return jsonify({'date':'17/04/2022','name':'James'})

if __name__ == '__main__':
    app.run(debug=True)