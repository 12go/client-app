var fs = require('fs');
var request = require('request');
var JsonApiService = require('../lib/json_api_service');

var TOKEN = require('../config')['TOKEN'];

function App() {
  
  function home(req, res) {
    fs.readFile(__dirname + '/layout/index.html', 'utf8', function(err, text){
      res.send(text);
    });
  }

  function search(req, res) {
    var query = req.query.query;
    var queryString = '?filter[contains]=' + query;

    var options = {
      url: 'https://ivy.vaynermedia.com/api/search' + queryString,
      headers: {
        'Authorization': 'Token ' + TOKEN
      }
    };

    var callback = function(error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);

        jsonPayload = JsonApiService.process(info);

        res.send(jsonPayload);
      }
      else {
        console.log('response statuscode:', response.statusCode);
      }
    };

    request(options, callback);
  }

  return {
    home: home,
    search: search
  };
};

module.exports = App();
