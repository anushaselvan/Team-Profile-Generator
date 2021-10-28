const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github){
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
 }

getGitHub(){
    return this.github;
    }
getRole(){
    return 'Engineer';
}
};

module.exports = Engineer;