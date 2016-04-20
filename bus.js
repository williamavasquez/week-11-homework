var prompt = require('prompt');
var Student = require('./student.js');

function Bus(driverName,color,gas){
  this.studentsOnTheBus =[];
  this.driverName = driverName;
  this.color = color;
  this.gas = gas;
  this.studentEntersBus = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
// -----normal- later we will use for looping option--------
  this.studentsOnTheBus.push(new Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase))
    // -------option with prompt--------
    // var addingStudent = new Student();
    // this.studentsOnTheBus.push(addingStudent.promptStudent());
  };
  this.busChatter = function(){
    for (var i = 0; i < this.studentsOnTheBus.length; i++) {
      if (this.studentsOnTheBus[i].canStudentHaveFun() == true) {
        console.log(this.studentsOnTheBus[i].catchPhrase);
      }
    }
  };
  // this.removeStudent = function(){
  //   prompt.start()
  //   prompt.get(['name'], function (err, result) {
  //     if (this.studentsOnTheBus.indexOf(this.Student.name)>0) {
  //
  //     }
  // }
};

module.exports = Bus;
