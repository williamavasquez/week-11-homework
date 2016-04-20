var bus = require('./bus.js');

var magicBus = new bus('turtle man','green',300);

magicBus.studentEntersBus('william','M','A',4,1, "False" ,'I think we need a turtle to solve this');
magicBus.studentEntersBus('Nate','M','A',4,3, "False" ,'I am lazy');
magicBus.studentEntersBus('william','M','A',4,1, "False" ,'I think we need a turtle to solve this');
magicBus.studentEntersBus('william','M','A',4,1, "False" ,'I think we need a turtle to solve this');

magicBus.busChatter();
// magicBus.studentEntersBus();
// console.log(magicBus.color);
