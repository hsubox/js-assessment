exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var re = new RegExp('(.)\\1{' + amount + ',}', 'g');
    return str.replace(re, '$1'.repeat(amount));
  },

  wordWrap: function(str, cols) {
    var words = str.split(' ');
    var finalStr = '';
    while (words.length > 1) {
      var word = words.shift();
      var lineBreak = finalStr.lastIndexOf('\n');
      lineBreak = lineBreak === -1 ? finalStr.length : finalStr.length - lineBreak - 1;
      if (lineBreak + word.length + words[0].length >= cols) {
        finalStr += word + '\n';
      } else {
        finalStr += word + ' ';
      }
    }
    finalStr += words.shift();
    return finalStr;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
