const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
//  const Employee = require("./lib/Employee");
const generateHtmlPage = require("./src/generateHtmlPage");

const teamMemberArray = [];

// Getting manager details and adding it to teamMemberArray
const getManagerDetails = () => {
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter Team Manager's name:",  
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
            console.log("\n Expected parameter ID to be a non-negative number"); 
            return false;
        }}
    },
    {
        type: "input",
        name: "email",
        message: "Enter Team Manager's email: ",
        validate: emailInput => {
          format = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(emailInput);
        if(format) {
          return true;
          }
        else{
          console.log("\n Reenter email address in the correct format!"); 
          return false;
        }}
    },
    {
        type: "input",
        name: "officenumber",
        message: "Enter Team Manager's office number:",
        validate: value =>{
          if( value > 0) {
              return true;
          }
          else{
            console.log("\n Expected parameter Office number to be a non-negative number"); 
            return false;
          }}
    }])
      .then(managerPromptValues => {
        const { name, id, email, officenumber} = managerPromptValues;
        const manager = new Manager(name, id, email, officenumber);
        teamMemberArray.push(manager);
        addOptions();
    })
  };

// Getting engineer details and adding it to teamMemberArray
const getEngineerDetails = () => {
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter Engineer's name:",  
    },
    {
        type: "input",
        name: "id",
        message: "Enter Engineer's ID:",
        validate: idInput =>{
        if( idInput > 0) {
          return true;
        }
        else{
          console.log("\n Expected parameter ID to be a non-negative number"); 
          return false;
      }}
    },
    {
        type: "input",
        name: "email",
        message: "Enter Engineer's email: ",
        validate: emailInput => {
          format = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(emailInput);
        if(format) {
          return true;
          }
        else{
          console.log("\n Reenter email address in the correct format!"); 
          return false;
      }}
    },
    {
        type: "input",
        name: "github",
        message: "Enter Engineer's GitHub username:",
        validate: github => {
        if(github) {
            return true;
        }
        else{
          console.log("\n Please enter a correct username!"); 
          return false;
      }}
    }])
  .then(engineerPromptValues => {
      const { name, id, email, github} = engineerPromptValues;
      const engineer = new Engineer(name, id, email, github);
      teamMemberArray.push(engineer);
      addOptions();
  })
};

// Getting intern details and adding it to teamMemberArray
const getInternDetails = () => {
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter Intern's name:",  
    },
    {
        type: "input",
        name: "id",
        message: "Enter Intern's ID:",
        validate: idInput =>{
        if( idInput > 0) {
            return true;
        }
        else{
          console.log("\n Expected parameter ID to be a non-negative number"); 
          return false;
        }}
    },
    {
        type: "input",
        name: "email",
        message: "Enter Intern's email: ",
        validate: emailInput => {
          format = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(emailInput);
        if(format) {
          return true;
          }
        else{
          console.log("\n Reenter email address in the correct format!"); 
          return false;
        }}
    },
    {
        type: "input",
        name: "school",
        message: "Enter Intern's school name:",

        }])
    .then(internPromptValues => {
        const {name, id, email, school} = internPromptValues;
        const intern = new Intern(name, id, email, school);
        teamMemberArray.push(intern);
        addOptions();
    })
};
//Function to choose what type of employee to add
const addOptions = () => {
    return inquirer.prompt([{
        type: "list",
        name: "option",
        message: "What type of employee would you like to add to your team?",
        choices: ["Engineer", "Intern", "I do not want to add more employees"]
    }])
    .then((answer) => {
        var answer = answer.option;
        if(answer === "Engineer"){
          getEngineerDetails(); 
        }
        else if(answer === "Intern"){
          getInternDetails();
        }
        else {
          fs.writeFile("./dist/index.html", generateHtmlPage(teamMemberArray), (err) =>
          err ? console.log(err) : console.log("Successfully created HTML page!"));
        }
    });    
};

const init = () => {
    getManagerDetails()
};

init();