// Write a JavaScript program to compute the absolute 
// difference between a specified number and 19. 
// Returns triple the absolute difference 
// if the specified number is greater than 19

const specNum = (num) => {
    if (num <= 19) {
        return (19 - num);
    } else {
        return (num - 19) * 3;
    }
}

console.log(specNum(10));