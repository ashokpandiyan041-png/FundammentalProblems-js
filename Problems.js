//1. Even or Odd

// function checkNum(num){
//     if(num%2==0){
//         console.log("even number");
        
//     }
//     else{
//         console.log("odd number");
        
//     }
// }
// checkNum(678.0);

//2. Largest of Three Numbers
// function findLargest(a,b,c){
//     if(a>=b && a>=c){
//         console.log(a);
         
//     }
//     else if(b>=a && b>=c){
//         console.log(b);
        
//     }
//     else{
//         console.log(c);
        
//     }
// }
// findLargest(15,30,16)
//3. Sum of Numbers from 1 to N

// function sumOfNum(num){
//     let sum=0;
//     for(i=0;i<=num;i++){
//         sum+=i;
        
//     }
//     return sum;
// }
// console.log(sumOfNum(20));

//4. Multiplication Table

// function printTable(n){
//     for(i=1;i<=10;i++){
//         console.log(n,"x",i,"=",n*i);
        
//     }
// }
// printTable(5);

//5)find positive,negative & zero
// function findNumber(num){
//     if(num>0){
//         console.log("Positive Number");
        
//     }
//     else if(num<0){
//         console.log("Negative Number");
        
//     }
//     else{
//         console.log("its ZERO");
        
//     }
// }
// findNumber(0);


//6)Access the object values

// const people={
//     name:"kalai",
//     age:50,
//     gender:"female",
//     mobileno:987654432
// }
// for(k in people){
//     console.log(k,"--->",people[k]);
    
// }

// //7)voting eligibility
// let age=23;
// if(age>=18){
//     console.log("Eligible to Vote");
    
// } 
// else{
//     console.log("Not Eligible");
    
// }

//8)find array type,length and access index & values of array

// const arr=[17,38,90,44,67,91]
// console.log(typeof arr);

// console.log(arr.length);

// for(i in arr){
//     console.log(i,":",arr[i]);
    
// }

//9)find the smallest number in array
// let arr=[37,47,98,67,12,46,79,24,10,99.3]
// let smallest=arr[0];
// for(let i=1;i<arr.length; i++){
//    if(smallest>arr[i]){
//     smallest = arr[i];
//    }
// }
// console.log(smallest);

//10)reverse an array without reverse()

// const arr=[1,2,3,4,5,6,7,8,9]
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
    
// }

