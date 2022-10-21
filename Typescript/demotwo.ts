// class
class Student {
    // instance variables
    studId!: number;
    studName!: string;
    studAge!:number;
    studStandard!:number;
    studRollno!:number;
    studAddress!:string;
    studContact!:number;

    // constructor method
    constructor(_id:number,_name:string,_age:number,_standard:number,_rollno:number,_address:string,_contact:number){
        this.studId = _id;
        this.studName=_name;
        this.studAge=_age;
        this.studStandard=_standard;
        this.studRollno=_rollno;
        this.studAddress=_address;
        this.studContact=_contact;
    }
}

// objects declared manually
// let studentOne = new Student(12,"Amal",10,10,4,"Kilivayil",232331212)
// let studentTwo = new Student(11,"Amul",10,10,4,"Aalam",232331212)
// let studentThr = new Student(12,"Anees",10,10,4,"Nila",232331212)
// let studentFour = new Student(12,"Dileep",10,10,4,"Yamuna",232331212)
// let studentFive = new Student(12,"Dupe",10,10,4,"Ganga",232331212)

// array
let students: Student [] =[]
for(let i=0;i<1;i++){
    let id:any = prompt("Enter student user id");
    let name:any = prompt("Enter student name");
    let age:any = prompt("Enter student age");
    let rno:any = prompt("Enter student roleno");
    let std:any = prompt("Enter student standard");
    let add:any = prompt("Enter student address");
    let cont:any = prompt("Enter student contact");
    students.push(new Student(parseInt(id),name,parseInt(age),parseInt(std),parseInt(rno),add,parseInt(cont)))
}   

// addring the datas manually
// = [studentOne,studentTwo,studentThr,studentFour,studentFive]

students.forEach((student)=>{
    console.log(student)
    console.log(student.studId)
    console.log(student.studName)
    console.log(student.studAge)
    console.log(student.studRollno)
    console.log(student.studAddress)
    console.log(student.studContact)
    console.log(student.studStandard);
    
})