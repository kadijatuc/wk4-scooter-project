//each scooter has these properties
class Scooter{
  constructor(station, user, serial, nextSerial, charge, isBroken) {
    this.station = station;
    this.user = user;
    this.serial = serial.nextSerial+1;
    this.nextSerial = 1;
    this.charge = charge;
    this.isBroken = isBroken;
  }
  //renting out a single scooter to a user
  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      return this.station = null; 
      this.user = user;
    }else {
      throw new Error (this.isBroken ? "scooter needs to charge" : "scooter needs repair")
    };
  }
  //returning a scooter back to a station
  dock(station) {
    this.station = station;
    this.user = null;
  }

}


module.exports = Scooter
