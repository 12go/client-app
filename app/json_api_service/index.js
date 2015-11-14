var JsonApiDataStore = require('jsonapi-datastore');
var jsonApi = new JsonApiDataStore.JsonApiDataStore();

function JsonApiService() {
  function process(response) {
    return jsonApi.sync(response); 
  }

  return {
    process: process
  };
}

module.exports = JsonApiService();

