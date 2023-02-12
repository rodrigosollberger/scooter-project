const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('does something', () => {
    // edit this to be a real test!
    expect(false).toEqual(true);
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  const scooter1 = new Scooter ('Glasgow', 'Rodrigo', 123456, 80, false)
  //rent method

  //dock method
  test('battery percentage is working', () => {
    expect(scooter1.charge).toBeGreaterThanOrEqual(0)
    expect(scooter1.charge).toBeLessThanOrEqual(100)
  })
  //requestRepair method

  //charge method

})
