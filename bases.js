// Listas 
let myList = ["Mauro","Dani","Angel", 48, "Negro"]
console.log(myList)
console.log(myList[2])

// Set
let mySet = new Set (["Mauro","Angel","Victory",48])
mySet.add("Vane")
console.log(mySet)

// Maps
let myMaps = new Map ([["Mauricio", 48], ["Javier" , 48], ["Angela", 43]])
myMaps.set("Laura", 33)
console.log(myMaps)
    //Trae el valor de la clave con get
console.log(myMaps.get("Mauricio"))


// Bucles

for (const value of myList){
    //console.log(myList)
    console.log(value)
}

let myCounter = 0 

while (myCounter < myList.length ){
    console.log("myCounter : " + myList[myCounter])
    myCounter++
}


//Clases 
// van en UpperCase
class MyClass {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
let myClass = new MyClass("Male", 15)
console.log(myClass)
console.log("-------")
console.log(myClass.age)


// Enum
const MyEnum = {
    DART : "Dart", 
    JAVASCRIPT : "Javascript",
    PYTHON : "Python",
    JAVA : "Java",
    ANGULAR : "Angular"
}

const myEnum =  MyEnum.ANGULAR
console.log(myEnum)