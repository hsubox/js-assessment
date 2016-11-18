exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binary = num.toString(2);
    return Number(binary.charAt(binary.length - bit));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binary = num.toString(2);
    while (binary.length < 8) {
      binary = '0' + binary;
    }
    return binary;
  },

  multiply: function(a, b) {
    var placesMoved = 0;
    var aNew = a;
    var bNew = b;
    while (aNew % 1 !== 0) {
      aNew *= 10;
      placesMoved += 1;
    }
    aNew = parseInt(aNew, 10);
    while (bNew % 1 !== 0) {
      bNew *= 10;
      placesMoved += 1;
    }
    bNew = parseInt(bNew, 10);
    return aNew * bNew / Math.pow(10, placesMoved);
  }
};
