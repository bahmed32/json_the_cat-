const { fetchBreedDescription } = require('./breedFetcher');
const breed = process.argv[2];
if (!breed) {
  console.log("don't forget to add a breed name");
  process.exit(1);
}





fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});