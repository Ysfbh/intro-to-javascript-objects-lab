const pokemon = require('./data.js');

// Define the game object
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ]
};

/* Exercise 1 */
// Inspect the Pokémon array
console.dir(pokemon, { maxArrayLength: null });

// Log the name of the Pokémon with number 59
console.log(pokemon[58].name); // Expected output: Arcanine

/* Exercise 2 */
// Inspect the game object
console.log(game);

/* Exercise 3 */
// Add a "difficulty" property to the game object
game.difficulty = 'Medium';

/* Exercise 4 */
// Add a starter Pokémon to game.party
const starterPokemon = pokemon.find(p => p.starter === true);
game.party.push(starterPokemon);

/* Exercise 5 */
// Add three more Pokémon to game.party
game.party.push(pokemon[3], pokemon[7], pokemon[25]); // Adding Charmander, Squirtle, and Pikachu as examples

/* Exercise 6 */
// Set completed to true for gyms with difficulty below 3
game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

/* Exercise 7 */
// Evolve the starter Pokémon
const starterIndex = game.party.findIndex(p => p.number === starterPokemon.number);
if (starterIndex !== -1) {
  // Replace with evolved form based on starter choice
  game.party.splice(starterIndex, 1, pokemon.find(p => p.number === starterPokemon.number + 1));
}

/* Exercise 8 */
// Print the name of each Pokémon in game.party
game.party.forEach(p => console.log(p.name));

/* Exercise 9 */
// Print all starter Pokémon names from the pokemon array
pokemon.filter(p => p.starter).forEach(p => console.log(p.name));

/* Exercise 10 */
// Define the catchPokemon method on game
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};

// Catch a Pokémon using the method
game.catchPokemon(pokemon[10]); // Adding Caterpie as an example

/* Exercise 11 */
// Update catchPokemon method to decrement pokeballs
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
  const pokeballs = this.items.find(item => item.name === 'pokeball');
  if (pokeballs) pokeballs.quantity--;
};

// Catch a Pokémon and test pokeball decrement
game.catchPokemon(pokemon[11]); // Adding Metapod as an example
console.log(game.items);

/* Exercise 12 */
// Complete gyms with difficulty below 6
game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});

/* Exercise 13 */
// Add gymStatus method to game
game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0 };
  this.gyms.forEach(gym => {
    if (gym.completed) gymTally.completed++;
    else gymTally.incomplete++;
  });
  console.log(gymTally);
};

// Call gymStatus to tally completed and incomplete gyms
game.gymStatus();

/* Exercise 14 */
// Add partyCount method to game
game.partyCount = function() {
  return this.party.length;
};

// Test partyCount method
console.log(game.partyCount());

/* Exercise 15 */
// Complete gyms with difficulty below 8
game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});

/* Exercise 16 */
// Log the entire game object
console.log(game);