// import the potion constructor, establishing Potion as a usable variable 
const Potion = require('../lib/Potion');
//replace with mock data
jest.mock('../lib/Potion');


// Player constructor ...for name parameter, an empty string if not name is provided
function Player(name = '') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
}
    // returns an object with various player properties
    Player.prototype.getStats = function() {
        return {
          potions: this.inventory.length,
          health: this.health,
          strength: this.strength,
          agility: this.agility
        };
      };
  
  module.exports = Player;