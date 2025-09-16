//Immediately invoked function to avoid confilct between JS files.
(function(){

    var obj ={
        fName:"raunak",
        lName:"garg",
        age:20,

        get getName(){
            return this.fName.toUpperCase();
        },
        
        set setname(n){
            this.fName = n.toUpperCase();
        }
    }
    document.write("<p style='color:red'> Object Getters/Setters :- </p>")
    obj.setname = "kartikey"
    document.write("<p>"+obj.getName+"</p>")
    
    document.write("<span style='color:red'>Object constructor method :- </span>")
    
    function Student(fn,ln,age){
        this.fName = fn
        this.lName = ln
        this.age = age
    }

    let obj1 = new Student("Raunak","Garg",20)
    document.write("<br />"+obj1.fName)
    document.write("<br />"+obj1.lName)
    document.write("<br />"+obj1.age)

    //console.log(obj1)

    document.write("<br /> Adding property in the object constructor method from outside through \"Prototype :- \"")

    Student.prototype.nationality = "Indian"

    document.write("<br /> We can see the newly added property just the same way we use other property :- "+obj1.nationality)

    x=5;
    //console.log(x)

})()