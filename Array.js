//Array Basics
document.write("<h1> JavaScript Basics:-</h1>")

let arr = [1,2,3,4]
document.write("To declare and print the Array "+arr+"<br/><br/>")

let arr1 = [5,6,7,8]
document.write("To print the length of the Array "+ arr1.length+"<br/><br/>")

let arr2 = [9,10,11,12]
arr2.push(13)
document.write("To add in the end of the Array "+arr2+"<br/><br/>")

let arr3 = [14,15,16,17,18,29]
arr3.pop()
document.write("To remove the element from the end "+arr3+"<br/><br/>")

let arr4 = [18,19,20,21,22,23,24,25,26,28]
arr4.unshift(9)
document.write("To add in begning of the array "+arr4+"<br/><br/>")

let arr5 = [22,23,24,25,26,17]
arr5.shift()
document.write("To remove from the starting of the array "+arr5+"<br/><br/>")

let arr6 = [26,27,28,29]
arr6.splice(1,2)
document.write("To remove the element from the particular index and how many elements to remove "+arr6+ "<br/><br/>")

let arr7 = [30,31,32,33]
let arr8 = arr7.slice(1,3)
document.write("To remove the element from the array without touching the original array (StartIndex,EndIndex-1) "+arr8 +"<br/><br/>");

let arr9 = [34,35,36,37]
arr9.splice(1,0,90,91)
//(StartIdx,0/1,ele1,ele2...)
document.write("To add the element at particular index in the original array "+arr9+"<br/><br/>")

let arr10 = "Raunak Garg"
document.write("To know whether the variable is array or not ? "+Array.isArray(arr10)+"<br/><br/>")



//Other methods such as join(), split(), filter(), forEach()
document.write("To traverse the array :- <br/>")
arr9.forEach((ele,idx)=>{
    document.write(`Element at the index ${idx} and value ${ele} <br/>`)
})
document.write("<br/>")


