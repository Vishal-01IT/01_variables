const accountID = 144553
let accountEmail = "vishalsaini.ngd.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountID = 2 // not allowed

accountEmail = "hc2HC"
accountPassword = "12455"
accountCity = "Indore"

console.log(accountID);

/*
Please note to use var because of issue in 
block scop and functional scope 
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])
