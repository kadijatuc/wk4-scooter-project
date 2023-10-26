class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }
  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
    }else {
      throw new Error("Incorrect Password");
    }
  }
  logout() {
    this.loggedIn = false;
  }
}
//testing the User class on console
const u1 = new User ("xyzy", "password1", 20);
console.log("xyzy", u1);


module.exports = Userß
