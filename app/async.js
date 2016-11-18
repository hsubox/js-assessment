exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function (resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(function (resolve, reject) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var response = JSON.parse(httpRequest.responseText).people.map((person) => person.name).sort();
            resolve(response);
          } else {
            reject('There was a problem with the request.');
          }
        }
      };
      httpRequest.open('GET', url, true);
      httpRequest.send();
    });
  }
};
