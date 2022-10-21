"use strict";
const txtUser = document.getElementById("username");
const txtPassword = document.getElementById("password");
const button = document.querySelector('#button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    var link;
    users.forEach((user) => {
        if (user.username == txtUser.value && user.password == txtPassword.value) {
            switch (user.role) {
                case 0:
                    console.log("Rolename: Admin");
                    console.log("RoleId: 1");
                    link = './Admin/adminview.html';
                    break;
                case 1:
                    console.log("Rolename: User");
                    console.log("RoleId: 2");
                    link = './User/userview.html';
                    break;
                default: alert("Invalid user");
            }
            window.location.href = link;
        }
        else if (user.username == txtUser.value && user.password !== txtPassword.value) {
            let errorElm = document.getElementById("errPswd");
            errorElm.style.visibility = 'visible';
        }
        else if (user.username == txtUser.value && user.password !== txtPassword.value) {
            let errorElm = document.getElementById("errUser");
            errorElm.style.visibility = 'visible';
        }
        else if (user.username !== txtUser.value && user.password !== txtPassword.value) {
            let errElm = document.getElementById("errCredentials");
            errElm.style.visibility = 'visible';
        }
        else {
            console.log('Enter valid credentials!');
        }
    });
});
var roleName;
(function (roleName) {
    roleName[roleName["ADMIN"] = 0] = "ADMIN";
    roleName[roleName["USER"] = 1] = "USER";
})(roleName || (roleName = {}));
const users = [{
        username: "Arun",
        password: "Arun",
        role: roleName.ADMIN
    }, {
        username: "Amal",
        password: "Amal",
        role: roleName.USER
    },
    {
        username: "Menu",
        password: "Menu",
        role: roleName.USER
    }];
