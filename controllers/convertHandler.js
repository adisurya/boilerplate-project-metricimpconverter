function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    const pattern = RegExp(/[a-zA-Z]+/);
    const num = input.replace(pattern, '').trim();
    if (num === '') {
      result = 1;
    } else if (Number.isNaN(num)) {
      const numArrs = num.split('/');
      if (numArrs.length !== 2) {
        result = new Error('invalid number');
      } else {
        const n1 = Number(numArrs[0]);
        const n2 = Number(numArrs[1]);
        if (Number.isNaN(n1) || Number.isNaN(n2)) {
          result = new Error('invalid number');
        } else {
          result = n1 / n2;
        }
      }
    } else {
      result = num;
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
