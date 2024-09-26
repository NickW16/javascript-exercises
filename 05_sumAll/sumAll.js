const sumAll = function(par1, par2) {
    if (!Number.isInteger(par1) || !Number.isInteger(par2)) return "ERROR";
    if (par1 < 0 || par2 < 0) return "ERROR";
    if (par1 > par2) {
      const temp = par1;
      par1 = par2;
      par2 = temp;
    }
    let sum = 0;
 
    for (i = par1; i <= par2; i++) {
        sum += i;
    }
    return sum;

};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
