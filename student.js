var prompt = require('prompt');

function Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
  this.name = name;
  this.gender = gender;
  this.grade = grade;
  this.GPA = GPA;
  this.detentions = detentions;
  this.sleepingInClass = sleepingInClass;
  this.catchPhrase = catchPhrase;
  this.canStudentHaveFun = function(){
     if ((this.detentions<10) && (this.GPA>2)) {
       console.log("you can have fun");
     }
   };
   this.promptStudent = function(){
     prompt.start();
     prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function (err, result) {
       studentObject = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase)
       return studentObject;
       studentObject.canStudentHaveFun();
     });

   }
}
module.exports = Student;
