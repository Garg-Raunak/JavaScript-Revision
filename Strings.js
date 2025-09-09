document.write("<br /> <h1>Strings Manipulation In Javascript :- </h1><br />")

let str = "    Raunakgarg"
let str1 = " JS Expert "
 
document.write("trimStart() : <br />")
document.write("trimEnd() : <br />")
document.write("trim() :-"+str.trim()+"<br />")
document.write("concat() method in JS :- "+str.concat(str1)+"<br />")
document.write("substr() method in JS :- "+str.substr(1,6)+"<br />")
document.write("substring() method in JS :- "+str.substring(2,7)+"<br />")
document.write("indexOf(\"\",SearchStartIndex) method in JS :- "+str.indexOf("g")+"<br />")
document.write("lastIndexOf(\"\",SearchStartIndex) method in JS :- "+str.lastIndexOf("g")+"<br />")
document.write("toUpperCase() method in JS :- "+str.toUpperCase()+ "<br />")
document.write("toLowerCase() method in JS :- "+str.toLowerCase()+ "<br />")
document.write("replace() method in JS :- "+str.replace("g"," ")+ "<br />")
document.write("includes() method in JS :- "+str.includes("R"," ")+ "<br />")

