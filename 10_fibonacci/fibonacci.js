const fibonacci = function(x) {
    x = parseInt(x);
    if (x < 0) return "OOPS";
    arr = [0, 1];
    for (let i = 2; i <= x; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[x];
};

// Do not edit below this line
module.exports = fibonacci;
