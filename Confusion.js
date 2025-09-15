document.write(
  "<br /><br /><span style='color:red'>Some confusing fundamentals :- <br /></span>"
);

// for (let i = 1; i <= 3; i++) {
//   // setTimeout(()=>{
//   //     console.log(i)
//   // },2000)
// }
// console.log(i);
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");
// Person.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(Person.getFullName())

// let num = 1;
// let sum = num++ + ++num;
// // console.log(number++);
// // console.log(++number);
// console.log(sum);


// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
//   }
  
//   const person = 'Lydia';
//   const age = 21;
  
//   getPersonInfo`${person} is ${age} years old`;

//   let arr91 = []
// function a(){}
// let arr90 = []
// console.log(typeof arr90)

let arr90 = [1,2,3,4]

let sum = arr90.reduce((acc,itr,idx)=>{
  acc[idx] = itr
  return acc 
},{})

console.log(sum)