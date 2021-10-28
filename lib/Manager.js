
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officenumber){
      this.name = name;
      this.id = id;
      this.email = email;
      this.officenumber = officenumber;
 }
getOfficenumber(){
    return this.officenumber;
}

getRole(){
    return 'Manager';
}
};

module.exports = Manager;