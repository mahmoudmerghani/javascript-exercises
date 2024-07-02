const sumAll = function(from, to) {
    if (from < 0 || to < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(from) || !Number.isInteger(to)) {
        return "ERROR";
    }
    let sum = 0;
    for (let i = Math.min(from, to); i <= Math.max(from, to); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
