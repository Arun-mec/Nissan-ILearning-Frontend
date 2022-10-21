"use strict";
// // Defining the profile class
// class Profile {
//     // declaring the variables
//     id!: number;
//     email!: string;
//     first_name!: string;
//     last_name!: string;
//     avatar!: string;
// }
// // Define the api
// const webApi = "https://reqres.in/api/users?page=1/?id=1"
// // Step 3 : Fetch all data using async/await/promise
// const fetchAllProfiles = async (url: string): any=> {
//     let paramString = url.split('?')
//     let reqUrl = paramString[-1];
//     console.log(paramString[-1])
//     // const response = await fetch(url);
//     // const {data}: any= await response.json();
//     // await data.forEach((item:any)=>{
//     //     if(item.id==id){
//     //         console.log(item)
//     //     }
//     // })
//     // return null;
// }
// // Step 4 : Call asynchronous function
// fetchAllProfiles(webApi)
// // Step 5 : Reference js file in html to see output in console
