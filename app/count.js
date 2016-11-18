exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var cancel = function() {
      window.clearInterval(exports.countAnswers.counter);
    };
    var current = start;
    console.log(current);
    exports.countAnswers.counter = window.setInterval(function() {
      current++;
      console.log(current);
      if (current >= end) {
        cancel();
      }
    }, 100);
    return {cancel};
  }
};
