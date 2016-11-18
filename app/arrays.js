exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((a, b) => a + b );
  },

  remove: function(arr, item) {
    var index = arr.indexOf(item);
    while (index !== -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    var index = arr.indexOf(item);
    while (index !== -1) {
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    var index = arr.indexOf(item, 0);
    while (index !== -1) {
      count++;
      index = arr.indexOf(item, index + 1);
    }
    return count;
  },

  duplicates: function(arr) {
    var dictionary = {};
    for (var i = 0; i < arr.length; i++) {
      if (!(arr[i] in dictionary)) {
        dictionary[arr[i]] = 0;
      }
      dictionary[arr[i]] += 1;
    }
    var duplicates = [];
    for (var val in dictionary) {
      if (dictionary[val] !== 1) {
        duplicates.push(Number(val));
      }
    }
    return duplicates.sort();
  },

  square: function(arr) {
    return arr.map((x) => x * x);
  },

  findAllOccurrences: function(arr, target) {
    var occurences = [];
    var index = arr.indexOf(target);
    while (index !== -1) {
      occurences.push(index);
      index = arr.indexOf(target, index + 1);
    }
    return occurences;
  }
};
