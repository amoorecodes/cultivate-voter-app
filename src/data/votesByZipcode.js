// create a temp store for rapid dev

// random number helper function
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// helper to populate store with 200 entries
function populateStore() {
  const store = {};
  let entry = 1;
  while (entry < 201) {
    store[randomNumber(90001, 96162)] = randomNumber(0, 1001);
    entry += 1;
  }

  return store;
}

let votesByZipcode = populateStore();

module.exports = votesByZipcode;
