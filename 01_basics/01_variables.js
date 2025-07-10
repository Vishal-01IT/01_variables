const accountId =  144553
let accountEmail = "vishalsaini.ngd@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2

accountEmail = "vikramsingh@gmail.com"
accountPassword = "232212"
accountCity = "Bengaluru"

console.log(accountId);

/* Prefer not to use var
   Because of issue in block and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
