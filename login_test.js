var fs = require('fs');

// var logins = {
//     username: [],
//     password: []
// };

// q = input("Do you have a registered account?")
// if (q == "Yes"){
    
// }
// logins.username += input()


fs.appendFile('usernames.txt','usernames go here',function(err){
    if (err) throw err;
    console.log("Saved!");
});
