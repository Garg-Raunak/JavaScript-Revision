document.write("<br /> <br /> <span style='color:red'> --Date Object In JavaScript-- </span>")

let x = new Date();
document.write("<br /> new Date() :- "+new Date())
document.write("<br /> new Date(Year,Mon,date,hr,min,sec,minisec) :- "+new Date(2002,0,8))
document.write("<br /> .getTime() "+ x.getTime())
document.write("<br /> .getFullYear() "+ x.getFullYear())
document.write("<br /> .getMonth() "+ x.getMonth())
document.write("<br /> .getDate() "+ x.getDate())
document.write("<br /> .getHours() "+ x.getHours())
document.write("<br /> .getMinutes() "+ x.getMinutes())
document.write("<br /> .getSeconds() "+ x.getSeconds())
document.write("<br /> .getDay() "+ x.getDay())
//Updating the date
x.setFullYear(2020)
x.getmin
document.write("<br /> .setFullyear()"+ x)
//setMonth()
//setDate()
//setHours()
//setMinutes()
//setSeconds()
let y = new Date()
y.setDate(x.getDate()+50)
document.write("<br /> <br /> Find out the date after 50 days from today ? :- " + y)
//We can also compare the dates just like :-
document.write("<br/><br/> comparing the dates:- " +(y>x))

