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
    logoutUser (username, password); {
      const user = this.registeredUsers[username];

      if (user) {
        user.logout();
        console.log(`${username} has been logged Out.`)
      }else {
        throw new Error("No such user is logged in")
      }
    }
  }

  //when new scooters are deployed...
  createScooter(station, charge, isBroken) {
    if (!this.stations[station]) {
      throw new Error("No such station.");
    }

    const newScooter = new Scooter(stationName, null, charge, isBroken);
    this.stations[stationName].push(newScooter);
    console.log("Created a new scooter.");
    
    return newScooter;

  }

  //check that scooter is docked
  dockScooter(scooter, station) {
    if (!stations[stationName]) {
      throw new Error("No such station.");
    }else if (this.stations[stationName].includes(scooter)){
      throw new Error("Scooter is already at the station.");
    }
    this.stations[stationName].push(scooter);
    scooter.station = stationName;

    console.log("Scooter is docked.")
  }
  //dock a rented scooter to an exisitng station
  rentScooter(scooter, user) {
    if(scooter.user) {
      throw new Error("Scooter is already rented.");
    }

    let stationName = null;
    for (const station in this.stations) {
      if (this.stations[station].includes(scooter)) {
        stationName = station;
        break;
      }
      if (stationName) {
        scooter.user = username;
        this.stations[stationName] = this.stations[stationName].filter((s) => s !== scooter);
        console.log("Scooter is rented.");
      } 
    }
    
  }

  


}




module.exports = ScooterApp
