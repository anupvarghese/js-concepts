module.exports.myName = function(firstName) {
    var name = function(lastName) {
        // firstName is available here because of function scoped vars
        // at the sametime lastName is supplied only after sometime
        // but it preserves the firstName as it is.
        return firstName + " " + lastName;
    }
    return name;
}

