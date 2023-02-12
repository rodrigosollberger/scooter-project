class User {
  // User code here

  constructor (username, password, age) {

    if(!username || !password || !age){
      throw new Error('All data must be input')
    }

    if(age < 18){
      throw new Error('User must be 18 or over')
    }

    this.username = username
    this.password = password
    this.age = age
    

    //static
    this.loggedIn = loggedIn
  }

  login(password) {

  }

  logout(){

  }

}

module.exports = User
