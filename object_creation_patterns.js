// Object creation patterns

// Factory Pattern

module.exports.factoryPattern =  function(name, model, color) {
    const temp = {}
    temp.name = name;
    temp.model = model;
    temp.color = color;

    temp.details = function() {
        console.log(`Car name: ${this.name} Model: ${this.model} Color: ${this.color}`)
    }
    return temp;
}


// Constructor Pattern

module.exports.constructorPattern = function(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;

    this.details = function () {
        console.log(`Car name: ${this.name} Model: ${this.model} Color: ${this.color}`)
    }
}

// Dynamic prototype Pattern

const dynamicPrototypePattern = function(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;

    if(typeof this.details !== 'function') {
        dynamicPrototypePattern.prototype.details = function() {
            console.log(`Car name: ${this.name} Model: ${this.model} Color: ${this.color}`)
        }
    }
}
 module.exports.dynamicPrototypePattern = dynamicPrototypePattern;
