const inquirer = require("inquirer");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

function getManagerName(){

    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter Team Manager's name:",  
    }])
    
    .then(val =>{
        const managerName = val.name;
         if(typeof managerName === 'string' && managerName.trim().length) {
            this.getManagerId();
         }
         else{
          console.log("Expected parameter 'name' to be a non-empty string"); 
      }
    }); 
   }
  
  
  function getManagerId() {
  return inquirer.prompt([{
      type: "input",
      name: "id",
      message: "Enter Team Manager's ID:",
  
  }])
  .then(val => {
      const managerId = val.id;
       if( managerId > 0) {
          this.getManagerEmail();
       }
       else{
        console.log("Expected parameter 'id' to be a non-negative number"); 
    }
  }); 
  }
  
  function getManagerEmail() {
  return inquirer.prompt([{
      type: "input",
      name: "email",
      message: "Enter Team Manager's email: "
  }])
  .then(val => {
      const managerEmail = val.email;
  
       if( managerEmail.trim().length) {
          this.getRole();
       }
       else{
        console.log("Enter email address in the correct format!"); 
    }
  }); 
  }
  
 function  getRole(){
      return 'Employee';
  }

const team = new Employee();

