const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const generateHtmlPage = require("./src/generateHtmlPage");


const teamMemberArray = [];
// Getting manager details and adding it to teamMemberArray
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
    /*validate: officeNumber => {
     if( officeNumber > 0) {
        return true;
     }
     else{
      console.log("Expected parameter offer number to be a non-negative number"); 
  }
}*/
}
    ])
    .then(managerPromptValues => {
        const { name, id, email, officenumber} = managerPromptValues;
        const manager = new Manager(name, id, email, officenumber);
console.log(manager);
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
    message: "Enter Engineer's ID:",
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
    message: "Enter Engineer's email: ",
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
  name: "github",
  message: "Enter Engineer's GitHub username:",
  validate: github => {
   if(github) {
      return true;
   }
   else{
    console.log("Please enter a correct username!"); 
}
}
}
  ])
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
    message: "Enter Intern's ID:",
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
    message: "Enter Intern's email: ",
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
  name: "school",
  message: "Enter Intern's school name:",

}
  ])
  .then(internPromptValues => {
      const {name, id, email, school} = internPromptValues;
      const intern = new Intern(name, id, email, school);

      teamMemberArray.push(intern);
      addOptions();
  })
};
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
        console.log(teamMemberArray);
       /* const HTMLContent = generateHtmlPage(teamMemberArray);
        console.log(HTMLContent);
        fs.writeFileMd("./dist/index.html", JSON.stringify(HTMLContent), (err) =>
        err ? console.log(err) : console.log("Successfully created HTML page!"));*/
        
        fs.writeFile("./dist/index.html", generateHtmlPage(teamMemberArray), (err) =>
        err ? console.log(err) : console.log("Successfully created HTML page!"));
      }
    });    
};

const init = () => {
  getManagerDetails()
  };

init();