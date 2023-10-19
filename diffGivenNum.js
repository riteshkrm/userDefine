// Write a JavaScript program to get the difference 
// between a given number and 13, 
// if the number is broader than 13 
// return double the absolute difference.


const diffNum = (diff) => {
    if (diff <= 13) {
        return 13 - diff;

    } else {
        return (diff - 13) * 2;

    }
}

console.log(diffNum(1500));