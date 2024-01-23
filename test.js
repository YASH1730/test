// // const obj = {
// //     name : "Yashwant Sahu",
// //     info : {
// //         name : 'Harsh Sahu'
// //     }
// // }

// // const myArray = ["hello"]

// // function myFunction(){}

// // // ?. is short property to provide the undefined when there null or empty value exist in respective object 
// // // ?. = () ? value : undefined

// // // Example 1: Property access
// // const name = obj?.info?.name; // If user or user.info is null/undefined, name is undefined

// // // Example 2: Array access
// // const firstItem = myArray?.[0]; // If myArray is null/undefined or empty, firstItem is undefined

// // // Example 3: Function call
// // const result = myFunction?.(); // If myFunction is null/undefined, the call is skipped

// // console.log(obj?.name)
// // // console.log(obj?.age)

// // console.log(name)
// // console.log(firstItem)
// // console.log(result)

// "use strict"

// console.log(this)

// function xyz(){
// console.log(this)
// }

// in the strict mode the value of " this " will be undefined but in non-strict mode the value will be the window
// xyz() 
// window.xyz() // in this value will be window

// const obj = {
//     name : "Yashwant Sahu",
//     x : function(){
//         console.log(this)
//     }
// }
// obj.x()

// const obj2 = {
//     name : "Yashwant Sahu",
//     x : ()=>{
//         console.log(this)
//     }
// }

// obj2.x() // this print the window object because it representing the Lexical space where the obj2 exists


// const obj3 = {
//     name : "Yashwant Sahu",
//     x : function(){
//         const y = ()=>{
//             console.log(this)
//         }
//         y();
//     }
// }

// const obj3 = {
//     name : "Yashwant Sahu",
//     x : ()=>{
//         const y = ()=>{
//             console.log(this)
//         }
//         y();
//     }
// }

// obj3.x();

const car = {
    model : 2010,
    getModel : function(carName){
        console.log("The name is "+carName+" and Model is "+this.model)
    }
}

const car2 = {
    model : 2023
}

car.getModel("Scorpio");

// // but what if want to shear the method getModel from Car to Car2 
car.getModel.call(car2,"Van")
// //CALL will overwrite the value this keyword in car;
// the main DIFFERENCE in Call and Apply is the we passing the parameters in call we pass this "p1,p2,p2" in apply we use [] to the same
car.getModel.apply(car2,["Van","Royal"])
