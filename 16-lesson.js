/*Invoke the anonymous function that is a parameter of the nameFilter function
Expected output:

        This ran
        This ran
        ['My name is John', 'My name is Roger']
*/
var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]


var nameFilter = function(filteredName, anonymousFunction) {
    var results = []
    for (var i = 0; i < people.length; i++) {
        let currentName = people[i].name
        if (currentName != filteredName) {
            results.push("My name is " + currentName)
        }
    }
    return results
}

//only edit the nameFilter function above
var filteredNames = nameFilter("Betty", function(name) {
    return "This ran"
})

//do not edit
module.exports = filteredNames;
module.exports = nameFilter; 
