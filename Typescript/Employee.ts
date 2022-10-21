export interface Department{
    deptId:number;
    deptName:string;
}

interface Employee{
    empName:string;
    empDesignation:string;
    doj:string;
    empSalary:number;
    empPhone:number;
    dpt:Department
}

const empApi = 'http://127.0.0.1:9504/api/employees';

// Step 3 : Fetch all data using async/await/promise
const getEmployees = async (url:string) : Promise<Employee[]> =>{
    const response = await fetch(url);
    const data:any = await response.json();
    console.log("Fetching...");
    
    console.log(data);
    return data;
}
// Step 4 : Call asynchronous function
getEmployees(empApi)
// Step 5 : Reference js file in html to see output in console