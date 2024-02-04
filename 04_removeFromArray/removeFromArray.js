const removeFromArray = function(arr, ...args) {
    new_arr = [];
    arr.forEach(item => {
        if (!args.includes(item)) {
            new_arr.push(item);
        }
    });
    return new_arr;
};

// Do not edit below this line
module.exports = removeFromArray;
