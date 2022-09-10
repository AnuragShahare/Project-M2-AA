
// function greetTheStudent(studentName){ //parameters //named function
//      return `Hello there! ${studentName}`;
// }
// const greetTheStudent = function(studentName){ //parameters //ananymous function //expression
//     return `Hello there! ${studentName}`;
// }
//fat arrow function   
// const greetTheStudent = (studentName)=>{ //parameters //ananymous function //expression
//     return `Hello there! ${studentName}`;
// }
// const greetTheStudent = (studentName)=> `Hello there! ${studentName}`;
const greetTheStudent = studentName=> `Hello there! ${studentName}`;

// const fullName = function(firstName, middleName, lastName){
//     return `${lastName}, ${middleName}. ${firstName}`;
// }
//  const fullName = (firstName, middleName, lastName)=>{
//      return `${lastName}, ${middleName}. ${firstName}`;
//  }
const fullName = (firstName, middleName, lastName)=> `${lastName}, ${middleName}. ${firstName}`;

// const student = 'Mary Jane';
// const greet = greetTheStudent(student) //argumument 
// console.log(greet)

const titleName = fullName('Mary','R','Jane')
console.log(titleName);
// console.log(message +' ' + student);
// console.log(message +' ' + student2);

