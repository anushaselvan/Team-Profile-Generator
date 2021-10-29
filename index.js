const inquirer = require("inquirer");
const fs = require("fs");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const generateHTML = require("./src/teamGenerate");
const { format } = require("path");
const teamProfArray = [];

const getManagerDetails = () => {

    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter Team Manager's name:",  
        validate: nameInput =>{
         if(typeof nameInput === 'string' && nameInput.trim().length) {
             return true;
         }
         else{
          console.log("Expected parameter 'name' to be a non-empty string"); 
      }}
  },
    {
      type: "input",
      name: "id",
      message: "Enter Team Manager's ID:",
      validate: idInput =>{
       if( idInput > 0) {
          return true;
       }
       else{
        console.log("Expected parameter 'id' to be a non-negative number"); 
    }
  }
  },
  {
      type: "input",
      name: "email",
      message: "Enter Team Manager's email: ",
      validate: emailInput => {
          //format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
  
       if(emailInput) {
         return true;
         }
       else{
        console.log("Reenter email address in the correct format!"); 
    }
  }
  },
  {
    type: "input",
    name: "officenumber",
    message: "Enter Team Manager's office number:",
    validate: officeNumber => {
     if( officeNumber > 0) {
        return true;
     }
     else{
      console.log("Expected parameter offer number to be a non-negative number"); 
  }
}
}
    ])
    .then(managerPromptValues => {
        const { name, id, email, officenumber} = managerPromptValues;
        const manager = new Manager(name, id, email, officenumber);

        teamProfArray.push(manager);
        console.log(manager);
    })
};
 
function init(){
getManagerDetails()
//addEmployee()
.then(manager => {
    const HTMLContent = generateHTML(manager);
    fs.writeFile("./dist/index.html", HTMLContent, (err) =>
    err ? console.log(err) : console.log("Successfully created HTML page!")
     );
});

}

init();