//require potion module 
const Potion = require('../lib/Potion.js');

//test to ensure the object has a name and value
test('creates a health potion object', () => {
    //create a new object that accepts a string assigned as potion name
    const potion = new Potion('health');
    //name should be health
    expect(potion.name).toBe('health');
    //value should be a number - value property is created with Number() constructor
    expect(potion.value).toEqual(expect.any(Number));
  });

  //check to make sure that if the potion constructor is called without any arguments, a new potion with random type and value will be created
  test('creates a random potion object', () => {
    const potion = new Potion();
  
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
  });