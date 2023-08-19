from flask import Flask, render_template, redirect, request
from flask_app import app
from flask_app.models.skaters import Dojo
from flask_app.models.tricks import Ninja

@app.route('/dojos')
def dojos():
    dojos = Dojo.get_all()
    return render_template('dojos_main.html', dojos=dojos)

@app.route('/add/dojo', methods=['POST'])
def add_dojo():
    Dojo.save(request.form)
    return redirect('/')