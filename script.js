/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

 arr.map(PrintStudentswithMap);
 arr.forEach(PrintStudentsbyForEach);
 addData(arr);
 removeFailedStudent(arr);
 concatenateArray(arr);



function PrintStudentswithMap(mapArr) {
  //Write your code here , just console.log
  if(mapArr.marks > 50){
    console.log(mapArr.name);
  }
}

function PrintStudentsbyForEach(forArr) {
  //Write your code here , just console.log
  if(forArr.marks > 50){
      console.log(forArr.name);
  }
}

function addData(arr) {
  //Write your code here, just console.log
  let obj = {id:4,name:"susan",age:"20",marks:45};
  arr.push(obj);
  console.log(arr);
}

function removeFailedStudent(arr) {
  //Write your code here, just console.log
  for(let i=0; i<arr.length; i++){
      if(arr[i].marks < 50){
          arr.splice(i);
      }
  }
  console.log(arr);
}

function concatenateArray(arr) {
  //Write your code here, just console.log
  let arr1 = [
      { id: 4, name: "ram", age: "9", marks: 99 },
      { id: 5, name: "shyam", age: "8", marks: 98 },
      { id: 6, name: "karan", age: "7", marks: 97 },
  ];

   let concatArr = arr.concat(arr1);
  console.log(concatArr);
  
}
