// Lodash
const _ = require("lodash");

// Only change code below this line
// Users nested array with four objects starts here
const users = [
    {firstName: "John", lastName: "Doe", age: 24, gender: "male"},
    {firstName: "Jane", lastName: "Doe", age: 25, gender: "female"},
    {firstName: "Jim", lastName: "Carrey", age: 54, gender: "male"},
    {firstName: "Kate", lastName: "Winslet", age: 40, gender: "female"},
]
    // Users nested array with four objects ends here

// getUser function - list of users start here
function getUsers (string) {
    var output = firstName+" "+lastName+" is "+age+", "+gender;
    return output;
}
// getUser function - list of users ends here

// // findUser(lastName, gender) function starts here
function findUser(lastName, gender) {
    try{
        let user = _.find(users, {firstName: 'Jim'});
console.log(user);// add apropriate code here
    }catch (error) {
        return "Error" // Change this line
        console.log(user) // Change this line
    }
}
// findUser(lastName, gender) function ends here
// Only change code above this line
getUsers();
findUser(user); // Change this line

module.exports = findUser;