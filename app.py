from urllib import response
from flask import Flask, render_template, request

app = Flask(__name__)



####################################
########### School Side ############
####################################

@app.route('/')
def home():
    return "Hello World"

@app.route('/school_dash')
def school_dash():
    return render_template('school/school_dash.html')


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
        return render_template('school/upload_menu_success.html')
    else:
        return render_template('school/upload_hdata.html')




####################################
########### Officer Side ###########
####################################


@app.route('/officer')
def officer_home():
    return render_template('officer/index.html', title='Home')


@app.route('/get_graph_data')
def get_graph_data():
    return send_file(r'D:\SIH\HealthOfficerUI\application\static\data.csv')

@app.route('/performance')
def performance():
    return render_template(
        'officer/performance.html', 
        title='performance', 
        data=data,
        list=list
    )

@app.route('/performance/get_graph')
def graph_test():
    return render_template('officer/graph.html')

@app.route('/performance/get_report')
def report():
    return {
        "girls": data['girls'],
        "boys": data['boys']
    }


@app.route('/performance/<state>')
def state_wise(state):
    return render_template(
        'officer/state_wise.html', 
        data=data[state], 
        state=state
    )

@app.route('/performance/<state>/get_report')
def state_wise_report(state):
    state = data[state]
    return {
        "girls": state['girls'],
        "boys": state['boys']
    }


@app.route('/performance/<state>/<school>')
def school_wise(state, school):
    return render_template(
        'officer/school_wise.html', 
        data=data[state]['schools'][school],
        state=state,
        school=school
    )

@app.route('/performance/<state>/<school>/get_report')
def school_wise_report(state, school):
    school = data[state]['schools'][school]
    return {
        "girls": school['girls'],
        "boys": school['boys']
    }


@app.route('/performance/<state>/<school>/<student>')
def student_wise(state, school, student):
    return render_template(
        'officer/student_wise.html', 
        data=data[state]['schools'][school]['students'][student],
        msize = len(data[state]['schools'][school]['students'][student]['weights']),
        state=state,
        school=school,
        student=student,
        range=range,
        zip=zip
    )

@app.route('/performance/<state>/<school>/<student>/get_report')
def student_wise_report(state, school, student):
    student = data[state]['schools'][school]['students'][student]
    return student

if __name__ == "__main__":
    app.run(debug = True)