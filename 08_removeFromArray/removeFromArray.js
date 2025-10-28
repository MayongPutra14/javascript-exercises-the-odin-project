const removeFromArray = function(arr, ...index) {
    const newArray = []
    arr.forEach(el => {
        if(!index.includes(el)){
            
            newArray.push(el)
        }
    });
    return newArray
};

console.log(removeFromArray([1,2,3,4], 3, 2));














// Do not edit below this line
module.exports = removeFromArray;
