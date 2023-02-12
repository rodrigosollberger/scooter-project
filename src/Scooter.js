class Scooter{
  // scooter code here
  constructor (station, user, serial, charge, isBroken) {

    if(){
      throw new Error('error whatver')
    }

    this.station = station
    this.user = user
    this.serial = serial
    this.charge = charge
    this.isBroken = isBroken

    //static
    this.nextSerial = nextSerial
  }

  rent() {

  }

  dock(station){

  }

  recharge(){

  }

  requestRepair(){
    
  }
}


module.exports = Scooter
