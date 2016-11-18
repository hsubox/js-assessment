exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/[0-9]/).test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([a-z])\1/i).test(str);
  },

  endsWithVowel: function(str) {
    return (/[aeiou]$/i).test(str);
  },

  captureThreeNumbers: function(str) {
    var res = (/[0-9]{3}/).exec(str);
    return res ? res[0] : false;
  },

  matchesPattern: function(str) {
    return (/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/).test(str);
  },

  isUSD: function(str) {
    return (/^\$[0-9]{1,3}(?:,[0-9]{3})*(\.[0-9]{2})?$/i).test(str);
  }
};
