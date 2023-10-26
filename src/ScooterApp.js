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
    //method for new users to register if > 18
  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("User is already registered.");
    }

    if (age < 18) {
      throw new Error("User is too young to register.");
    }
  }
  //locate registered user by name and log in
  loginUser (username, password) {
    const user = this.registeredUsers[username];

    if (user && user.login(password)) {
      console.log(`${username} has been logged In.`)
    }else {
      throw new Error ("Username or password is incorrect!")
    }
    //locate registered user by name and log out
    logoutUser (username, password) {
      const user = this.registeredUsers[username];

      if (user) {
        user.logout();
        console.log(`${username} has been logged Out.`)
      }else {
        throw new Error("No such user is logged in")
      }
    }
  }
  


}




module.exports = ScooterApp
