// ENUM

// Administrator = 1
// LockManager = 2
// Coordinator = 3

enum Role {Administrator, Manager, Coordinator};

let empOneInfo = {
    name:"Sanjay",
    age:23,
    hobbies:["Music","Cycling","Movie"],
    role:Role.Administrator
}
if(empOneInfo.role=== Role.Administrator){
    console.log("Authorised manager");
}else{
    console.log("Unauthorised manager");
}