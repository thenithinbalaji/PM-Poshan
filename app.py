from flask import Flask, render_template, send_file
app = Flask(__name__)
@app.route('/')
def home():
    return render_template("school/home.html")

@app.route('/get_graph_data')
def get_graph_data():
    return send_file('static/data.csv')

@app.route('/school_dash')
def school_dash():
    return render_template('school/school_dash.html')

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
