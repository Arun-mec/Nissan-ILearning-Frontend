"use strict";
const txtUser = document.getElementById("txtusername");
const txtPassword = document.getElementById("txtpassword");
const button = document.querySelector('#button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    var link;
    users.forEach((user) => {
        if (user.username == txtUser.value && user.password == txtPassword.value) {
            switch (user.role) {
                case 0:
                    console.log("Rolename: Admin");
                    console.log("RoleId: 1");
                    link = './admin.html';
                    break;
                case 1:
                    console.log("Rolename: Manager");
                    console.log("RoleId: 2");
                    link = './manager.html';
                    break;
                case 2:
                    console.log("Rolename: Coordinator");
                    console.log("RoleId: 3");
                    link = './coordinator.html';
                    break;
                default: alert("Invalid user");
            }
            window.location.href = link;
        }
    });
});
var roleName;
(function (roleName) {
    roleName[roleName["ADMIN"] = 0] = "ADMIN";
    roleName[roleName["MANAGER"] = 1] = "MANAGER";
    roleName[roleName["COORDINATOR"] = 2] = "COORDINATOR";
})(roleName || (roleName = {}));
const users = [{
        username: "Arun",
        password: "Arun",
        role: roleName.ADMIN
    }, {
        username: "Amal",
        password: "Amal",
        role: roleName.MANAGER
    },
    {
        username: "Menu",
        password: "Menu",
        role: roleName.COORDINATOR
    }];
