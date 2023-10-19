// Write a JavaScript program to compute 
// the sum of the two given integers. 
// If the two values are the same, 
// then return triple their sum. 

const addInt = (num1, num2)=> {
    if(num1 === num2){
        return 3 * (num1 + num2)
    }
}

console.log(addInt(60, 60));