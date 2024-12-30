// //question 1
// let name = window.prompt("enter your name");
// // let gen = window.prompt("enter your gender (male or female?)");

// //name and gender
// if(gen == "male"){
//     window.alert("welcome MR."+ name);
// }
// else if(gen =="female"){
//     window.alert("welcome Ms."+ name);
// }
// else{
//     window.alert("welcome "+ name);
// }

// //order
// let order = window.prompt("what do you want ? shawarma, zinger, or burger?");
// if(order == "shawarma"){
//     window.alert("your order is being prepared");
// }
// else if(order =="zinger"){
//     window.alert("your order is being prepared");
// }
// else if (order =="burger"){
//     window.alert("your order is being prepared");
// }

// console.log("hello " + name +" " +"your " + order + " will be prepared");
// ex3
let arr=[name,gen,order];
for(i=0;i<=3;i++){
    console.log(arr[i]);
}

let g=function (gen){
    return gen;
}
g(gen);



// x = prompt("enter a number");
// parseInt(x);
// if(x==1){
//     console.log("one");
// }
// else if(x==2){
//     console.log("two");
// }
// else if(x==3){
//     console.log("three");
// }
// else if(x==4){
//     console.log("four");
// }
// else if(x==5){
//     console.log("five");
// }
// else if(x==6){
//     console.log("six");
// }
// else if(x==7){
//     console.log("seven");
// }
// else if(x==8){
//     console.log("eight");
// }
// else if(x==9){
//     console.log("nine");
// }
// else{
//     console.log("PLEASE TRY AGAIN")
// }


//question 2


//q1
// let gen = window.prompt("enter your gender (male or female?)");

// while(true){
//     // window.prompt("enter you gender in correct way please (male or female)");
//     if(gen == "male" || gen =="female"){
//     console.log(gen);
//     break;
//     }
//     else {
//         console.log("invalid");
//     }
// }


//q1

// i=0;
// while(i<=5){
//     window.alert(i);
//     i++;
// }

//q4
// while (true){
//     let num = window.prompt("enter number between 0 and 100");
//     if(num>100 || num<0){
//     alert("error number");
// }
//     else{
//         alert(num);
//         break;
//     }
// }

//q5
let num = window.prompt("enter a number");
let sum=0;

    for(let  i=0;i<=num;i++){
        sum+=i;
    }
alert(sum);
       