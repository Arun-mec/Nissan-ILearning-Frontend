const txtUser = document.getElementById("username")! as HTMLInputElement;
const txtPassword = document.getElementById("password")! as HTMLInputElement;
const button = document.querySelector('#button')

button?.addEventListener('click',()=>{
    var link:string 
    users.forEach((user:any)=>{
        if (user.username==txtUser.value && user.password==txtPassword.value){
            switch (user.role){
                case 0: console.log("Rolename: Admin");
                        console.log("RoleId: 1");
                        link ='./Admin/adminview.html'
                        break;
                case 1: console.log("Rolename: User");
                        console.log("RoleId: 2");
                        link = './User/userview.html'
                        break;
                default:alert("Invalid user")
            }
            window.location.href=link
        }else if(user.username==txtUser.value && user.password!==txtPassword.value){
            let errorElm = document.getElementById("errPswd")! as HTMLSpanElement;
            errorElm.style.visibility = 'visible';
        }else if(user.username==txtUser.value && user.password!==txtPassword.value){
            let errorElm = document.getElementById("errUser")! as HTMLSpanElement;
            errorElm.style.visibility = 'visible';
        }
        else if(user.username!==txtUser.value && user.password!==txtPassword.value){
            let errElm = document.getElementById("errCredentials")! as HTMLSpanElement;
            errElm.style.visibility = 'visible';
        }else{
            console.log('Enter valid credentials!')
        }
    })
})

enum roleName {ADMIN,USER}
const users = [{
    username:"Arun",
    password:"Arun",
    role:roleName.ADMIN
},{
    username:"Amal",
    password:"Amal",
    role:roleName.USER
},
{
    username:"Menu",
    password:"Menu",
    role:roleName.USER
}]
