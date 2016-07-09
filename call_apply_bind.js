var obj = {
    num: 10
}

function add(a, b, c) {
    return this.num + a + b + c;
    // this.num is added here
    // but there is no such property
    // this is where call, apply & bind are useful
    // we can attach a function to an object and use its properties
}

module.exports.callExample = function(a, b, c) {
    console.log(add.call(obj, a, b, c))
}

module.exports.applyExample = function(a, b, c) {
    var arr = []
    arr.push(a, b, c)
    console.log(add.apply(obj, arr))
}

module.exports.bindExample = function(a, b, c) {
    return add.bind(obj)
}




