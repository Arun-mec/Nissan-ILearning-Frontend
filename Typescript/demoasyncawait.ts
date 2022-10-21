// Step 1 : Define interface or a class
interface Employee{
    id:number;
    emp_name:string;
    emp_salary:number;
    emp_age:number;
    profile_img:string
}

// Step 2 : consume REST API 
const webapi = 'http://dummy.restapiexample.com/api/v1/employees'

// Step 3 : Fetch all data using async/await/promise
const fetchAllEmployees = async (url:string) : Promise<Employee[]> =>{
    var reqProfile:Employee;
    const response = await fetch(url);
    const {data}:any = await response.json();
    console.log(data);
    return data;
}
const fetchAllEmployeeById= async (url:string,id:number) : Promise<Employee> =>{
    let reqProfile!:Employee;
    const response = await fetch(url);
    const {data}:any = await response.json();
    data.forEach((profile:Employee)=>{
        if (id==profile.id){
            reqProfile = profile
        }
        else{
            return null
        }
    })
    console.log(reqProfile);
    return reqProfile;
}

// Step 4 : Call asynchronous function
fetchAllEmployees(webapi)
fetchAllEmployeeById(webapi,9)

// Step 5 : Reference js file in html to see output in console

