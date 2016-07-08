const objectPattern = require('./object_creation_patterns');

console.log('******** Factory Pattern **********')
const factoryPatternCar1 = objectPattern.factoryPattern('Honda', 'City', 'Black');
const factoryPatternCar2 = objectPattern.factoryPattern('Nissan', 'Patrol', 'White');

factoryPatternCar1.details();
factoryPatternCar2.details();
console.log('Is details an own property? :', factoryPatternCar2.hasOwnProperty('details'))


console.log('******** Constructor Pattern **********')
const constructorPatternCar1 = new objectPattern.constructorPattern('Honda', 'City', 'Black');
const constructorPatternCar2 = new objectPattern.constructorPattern('Nissan', 'Patrol', 'White');

constructorPatternCar1.details();
constructorPatternCar2.details();
console.log('Is details an own property? :', constructorPatternCar2.hasOwnProperty('details'))

console.log('******** Dynamic prototype Pattern **********')
const dynamicPrototypePatternCar1 = new objectPattern.dynamicPrototypePattern('Honda', 'City', 'Black');
const dynamicPrototypePatternCar2 = new objectPattern.dynamicPrototypePattern('Nissan', 'Patrol', 'White');

dynamicPrototypePatternCar1.details();
dynamicPrototypePatternCar2.details();
console.log('Is details an own property? :', dynamicPrototypePatternCar2.hasOwnProperty('details'))

