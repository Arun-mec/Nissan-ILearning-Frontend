const txtUser = document.getElementById("txtusername")! as HTMLInputElement;
const txtPassword = document.getElementById("txtpassword")! as HTMLInputElement;
const button = document.querySelector('#button')

button?.addEventListener('click',()=>{
    var link:string 
    users.forEach((user:any)=>{
        if (user.username==txtUser.value && user.password==txtPassword.value){
            switch (user.role){
                case 0: console.log("Rolename: Admin");
                        console.log("RoleId: 1");
                        link = './admin.html'
                        break;
                case 1: console.log("Rolename: Manager");
                        console.log("RoleId: 2");
                        link = './manager.html'
                        break;
                case 2: console.log("Rolename: Coordinator");
                        console.log("RoleId: 3");
                        link = './coordinator.html'
                        break;
                default:alert("Invalid user")
            }
            window.location.href=link
        }
    })
})

enum roleName {ADMIN,MANAGER,COORDINATOR}
const users = [{
    username:"Arun",
    password:"Arun",
    role:roleName.ADMIN
},{
    username:"Amal",
    password:"Amal",
    role:roleName.MANAGER
},
{
    username:"Menu",
    password:"Menu",
    role:roleName.COORDINATOR
}]
