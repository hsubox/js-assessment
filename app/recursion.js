exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    function findDirName(dataInDir, dirNameToFind) {
      if (dataInDir.dir === dirNameToFind) {
        return dataInDir;
      }
      for (var i = 0; i < dataInDir.files.length; i++) {
        if (typeof dataInDir.files[i] === 'object') { // directory
          var found = findDirName(dataInDir.files[i], dirNameToFind);
          if (found) {
            return found;
          }
        }
      }
      return null;
    }
    function listFilesInDir(dataToList) {
      var files = dataToList.files.map((x) => {
        if (typeof x === 'object') { // directory
          return listFilesInDir(x);
        } // file
        return [x];
      }).reduce((a, b) => [...a, ...b]);
      return files;
    }
    if (dirName) {
      var dataSubset = findDirName(data, dirName);
      return listFilesInDir(dataSubset);
    }
    return listFilesInDir(data);
  },

  permute: function(arr) {
    var permutations = [];
    function perm(a, memo = []) {
      for (var i = 0; i < a.length; i++) {
        var n = (a.splice(i, 1))[0];
        var newMemo = memo.concat([n]);
        if (a.length === 0) {
          permutations.push(newMemo);
        } else {
          perm(arr, newMemo);
        }
        a.splice(i, 0, n);
      }
      return permutations;
    }
    return perm(arr);
  },

  fibonacci: function(n) {
    var memo = [1, 1];
    if (n <= 0) {
      return null;
    }
    if (n < memo.length) {
      return memo[n];
    }
    return exports.recursionAnswers.fibonacci(n - 1) + exports.recursionAnswers.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    if (n === 1) {
      return ['()'];
    }
    var lastValidParensSet = exports.recursionAnswers.validParentheses(n - 1);
    var foundParens = [];
    for (var i = 0; i < lastValidParensSet.length; i++) {
      var addedParensBefore = '()' + lastValidParensSet[i];
      if (foundParens.indexOf(addedParensBefore) === -1) {
        foundParens.push(addedParensBefore);
      }
      var addedParensAround = '(' + lastValidParensSet[i] + ')';
      if (foundParens.indexOf(addedParensAround) === -1) {
        foundParens.push(addedParensAround);
      }
      var addedParensAfter = lastValidParensSet[i] + '()';
      if (foundParens.indexOf(addedParensAfter) === -1) {
        foundParens.push(addedParensAfter);
      }
    }
    return foundParens;
  }
};
