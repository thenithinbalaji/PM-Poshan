from urllib import response
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello World"

@app.route('/school_dash')
def school_dash():
    return render_template('school_dash.html')


@app.route('/upload_menu', methods = ['POST', 'GET'])
def upload_menu():
    if request.method == 'POST':
        print(request.form)
        return render_template('upload_menu_success.html')
    else:
        return render_template('upload_menu.html')

@app.route('/reg_student', methods = ['POST', 'GET'])
def reg_student():
    if request.method == 'POST':
        print(request.form)
        return render_template('reg_student_success.html')
    else:
        return render_template('reg_student.html')

@app.route('/upload_hdata', methods = ['POST', 'GET'])
def upload_data():
    if request.method == 'POST':
        print(request.form)
        return render_template('upload_menu_success.html')
    else:
        return render_template('upload_hdata.html')

if __name__ == "__main__":
    app.run(debug = True)