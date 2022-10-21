"use strict";
// ENUM
// Administrator = 1
// LockManager = 2
// Coordinator = 3
var Role;
(function (Role) {
    Role[Role["Administrator"] = 0] = "Administrator";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Coordinator"] = 2] = "Coordinator";
})(Role || (Role = {}));
;
let empOneInfo = {
    name: "Sanjay",
    age: 23,
    hobbies: ["Music", "Cycling", "Movie"],
    role: Role.Administrator
};
if (empOneInfo.role === Role.Administrator) {
    console.log("Authorised manager");
}
else {
    console.log("Unauthorised manager");
}
