 function Bus(driverName,color,gas){
  this.studentsOnTheBus =[];
  this.driverName = driverName;
  this.color = color;
  this.gas = gas;
  this.studentEntersBus = function(){
    studentsOnTheBus.push(student);
  };
  this.busChatter = function(){
    console.log('catch phrases if they can have fun one by one');
  };
};

module.exports = Bus;
