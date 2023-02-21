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
  let student = { id: 4, name: "karishma", age: "20", marks: 30}
  arr.push(student);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  // for(let i=0; i<arr.length; i++){
  //   if(arr[i].marks < 50){
  //     arr.splice(i,1);
  //   }
  // } this method will not work becuase splice method remove the element directly it will effect length and the index of objects
  
  //so the correct answer is using filter method
  let arr1 = arr.filter(function(student){return student.marks >50});  //here I create new array and add that object which having the marks greater than 50 means new array will not consist those student which got failed
  console.log(arr1);
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

