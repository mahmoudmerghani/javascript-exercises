const removeFromArray = function(array, ...elementToDelete) {
    return array.filter(value => !elementToDelete.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;
console.log(removeFromArray([1,2,3,4], ...[1,2]));