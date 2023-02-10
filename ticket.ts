let input = (document.querySelector("#fname") as HTMLInputElement)

let value = input.value

console.log(value)

let submit = (document.querySelector("#submit") as HTMLInputElement)

submit.addEventListener("click",()=>{
input.classList.toggle("background-color");
})

new Promise((res) => {
    submit.addEventListener("mouseover",()=>{
        input.classList.toggle("background-colortwo");
    })
})
.then(res => {
    console.log(res)
})
    .catch(error => {
    console.log('ERROR:', error.message);
});


//!Generics : There are limitation to using Generics and Object Manipulation for example if you wanted to merge two objects together the first thought might be"

 /*function merge<T,U>(objA: T, objB: U){
 return Object.assign(objA, objB);}

 const mergedObject = merge({name:"Max", hobbies:["Sports"]},30) */

// Now this will now work because Object.assign can only have 2 objects. If we use a non object like 30 it will not work beit it will compile
// To fix this:
/*function merge<T extends Object, U extends Object>(objA: T, objB: U){
    return (Object.assign(objA, objB))
}*/

//it is used to merge two objects into a single object. The function requires the inputs to be of type Object. The function uses the Object.assign method to combine the properties of the two objects into a new object, where properties in the second object overwrite properties with the same name in the first object. The function should not produce errors when used with correct inputs, but may produce unexpected results if used with non-object inputs.

 function merge<A,B>(objA: A, objB: B){
 return {...objA, ...objB}
}

 const mergedObject = merge({name:"Dylan", favSubject:["History"]},30)