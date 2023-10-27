const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      console.log("request failed, error details:", error);
      callback(error, null);
      return;
    }
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body', body);

    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof body);
    console.log(data[0]);
    const objData = data[0];
    console.log(objData.description);
    callback(null, objData.description);

  });

};

module.exports = { fetchBreedDescription };