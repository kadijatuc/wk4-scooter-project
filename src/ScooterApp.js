const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = {
      "Station 1": [],
      "Station 2": [],
      "Station 3": [],
    }
    this.registeredUsers = {};
  }
    //ScooterApp should include methods...
  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("User is already registered.");
    }

    if (age < 18) {
      throw new Error("User is too young to register.");
    }
    
  };
  


}




module.exports = ScooterApp
