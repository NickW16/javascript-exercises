const removeFromArray = function(num, ...excl) {
    const newArray = [];
    num.forEach((item) => {
        if (!excl.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};

removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
