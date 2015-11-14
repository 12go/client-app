import fs from 'fs'
import request from 'request'
import JsonApiService from './json_api_service'

const TOKEN = require('../config')['TOKEN'];

export default {

  home(req, res) {
    fs.readFile(__dirname + '/layout/index.html', 'utf8', function(err, text){
      res.send(text);
    });
  }

  search(req, res) {
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
}
