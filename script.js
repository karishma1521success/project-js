/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];







function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function (obj){
    if(obj.marks > 50){
      console.log(obj.name);
    }
  });
 
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
   arr.forEach((obj) => {
    if(obj.marks > 50){
      console.log(obj.name);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let student = { id: 4, name: "karishma", age: "20", marks: 55 }
  arr.push(student);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr.forEach(function (obj,index){
    if(obj.marks < 50){
        arr.splice(index,1);
    }
  });
 
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 4, name: "johny jack", age: "18", marks: 80 },
    { id: 5, name: "shicn chen", age: "20", marks: 81 },
    { id: 6, name: "shizuka", age: "19", marks: 51 },
  ];

  let result = arr.concat(arr1);
  console.log(result);
}

