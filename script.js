
// console.log("hi there, thank you")


// decraling variable
// var, let, const

// var name = "Aayush Sharma"
// let address ="somewhere in canberra"
// const dob = "17-10-2005"
// // console.log(name)
// name = "Aayush sharma poudel"
// // console.log(name)
// // console.log(address)
// // console.log(dob)

// =======operators
// =======
 
// a+b,a-b,a*b,a**b
//  const b = 5/* cannot be changed never*/
//  let a = 6
//  const ans =a**b a ko power b

// 
// a++ increment by 1
// a-- 
// a-- if you do second time now decreased by 2
//  console.log(a)
// ===============
// comparision
//==
//===
//>, >==
//<, <==
// const v1 = 5
// const v2 = "5"
// const  result = v1 >= v2
// console.log(result)


// ======data type

// // console.log();
// let person1 = "prem"
// let person2 = person1
// person1 = "sam"
// person2 = person1 
// console.log(person1, person2 )



// const val = Math.PI
// console.log(val)
// const val = Math.floor  4.9=4
// const val = Math.ceil 4.1=5
// const val = Math.
// const val = Math.pow(8,2)
// const val = Math.sqrt(64)
// const val = Math.max(0, 1, 2, 3, 4, 5) ans 5
// const val = Math.min(0, 1, 2, 3, 4, 5)

// const val = Math.random()// creats random nomber between 0-9.99999999999999
// const val = Math.random()*10// creats random nomber between 0-9.99999999999999
// console.log(val)
// ===========================logical operators
// coditional operation

// =====if else======
// let age = 17
// if(age< 18){
//     console.log("go home kiddo")
// }
// else{
// //     console.log("welcome in gentleman")
// // }

// const pet = "badar"

// if(pet === "cat" ){
//     console.log("meow")
// }
// else if(pet === "dog" ){
//     console.log("bhow")
// }else{
//     console.log("chup")

// }
// ==================================switch=====================
// const pet = "dog"
// switch(pet){
//     case dog:
//         console.log("bhow")
//         break
//     case cat:
//         console.log("mew")
//         break
// default:
// console.log("nothing")    
// }
// =======================================close===============
// && both have to be true
// || either of them can be true
//!=

// =================t=r=u=t=hh=y value "p",4,true.{obj},[array], ()=>{}
// //falsy value"nothing inside" "0" undefined null false=.false(((!!!)))
// console.log(!!pet)
// if (pet) {
//     console.log("there is something")
// // }

// let age = 17
//  age< 18
//  ?
//      console.log("go home kiddo")
 
 
//  :    console.log("welcome in gentleman")
 


// // error handeling =======try catch=== 

// try{
// console.log("with in try")
// }
// catch(error){
//     console.log("with in error", error)
// }
// finally{
//     console.log("with in finally")
// }

// ======================================scheduling=====
//]
// console.log("before set time out")
// setTimeout(()=>{
//     console.log("inside set time out"
// )}, 1000)
// ==================================================================
// let i=0
// const interval = setInterval( ()=>{ console.log("inside set setInterval",i++)
// if(i == 10){
//     clearInterval(interval)
// }

// },1000)
// ==============================================function?=============

//function name(parameter){console}
/*===============================================
console.log("before function")
function add()
{console.log(4+6)}
console.log("after function")
console.log(add())
===============================================
 console.log("before function")
 function add(a, b){return(a+b)
 const ans = add(5, 6) 
 console.log(ans)
 console.log("after function")
 =======================================*/
// =====================================Es666========================

const multiplier = (a) => a * 5
const bio = (name, address)=>{
    return "hey "+ name +".i live in " + adddress
}


const aayush = bio("Aayush", "Canberra")