from flask import Flask, render_template, send_file, request
from data import data
from stu_data import stu_data
from classdata import classdata

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/student_dash')
def student_dash():
    return render_template('student/student.html')

@app.route('/get_graph_data')
def get_graph_data():
    return send_file('static/data.csv')

@app.route('/get_class_data')
def get_class_data():
    return classdata

@app.route('/performance/detailed')
def detailed_graphs():
    return render_template('officer/detailed.html')

@app.route('/performance/get_stu_data')
def get_stu_data():
    return stu_data

@app.route('/performance/<school>')
def school_wise(school):
    return render_template('officer/school.html', school=school)

@app.route('/performance/<school>/get_school_graph_data')
def school_wise_graph(school):
    data = stu_data[school]
    return {
        "girls": {
            "height": data[0],
            "weight": data[1],
        },
        "boys": {
            "height": data[2],
            "weight": data[3]
        }
    }




@app.route('/school_dash')
def school_dash():
    return render_template('school/school_dash.html')

@app.route('/public')
def public():
    return render_template('officer/detailed.html')

@app.route('/performance')
def performance():
    return render_template('officer/performance.html')

@app.route('/upload_menu', methods = ['POST', 'GET'])
def upload_menu():
    if request.method == 'POST':
        print(request.form)
        return render_template('school/upload_menu_success.html')
    else:
        return render_template('school/upload_menu.html')

@app.route('/reg_student', methods = ['POST', 'GET'])
def reg_student():
    if request.method == 'POST':
        print(request.form)
        return render_template('school/reg_student_success.html')
    else:
        return render_template('school/reg_student.html')

@app.route('/upload_hdata', methods = ['POST', 'GET'])
def upload_data():
    if request.method == 'POST':
        print(request.form)
        return render_template('school/upload_hdata_success.html')
    else:
        return render_template('school/upload_hdata.html')

@app.route('/upload_attendance', methods = ['POST', 'GET'])
def upload_attendance():
    if request.method == 'POST':
        print(request.form)
        return render_template('school/upload_attendance_success.html')
    else:
        return render_template('school/upload_attendance.html')

if __name__ == "__main__":
    app.run(debug = True)
