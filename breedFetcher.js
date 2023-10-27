const request = require('request');
const breed = process.argv[2];

if (!breed) {
  console.log("don't forget to add a breed name");
  process.exit(1);
};
request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  if (error) {
    console.log("request failed, error details:", error);
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

});
