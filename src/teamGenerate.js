
function addManager(manager){
    return `<div class= "col-4 mb-3">
    <div class="card" style="width: 18rem">
    <div class="card-title bg-info ">
        <h5>${manager.name}</h5>
        <p class="sub-title"> Manager</p>
    </div>
    <ul class="card-body">
      <p class="card-text">Id:${manager.id}</p>
      <p class="card-text">Email:<a href="mailto:${manager.email}">${manager.email}</a> </p>
      <p class="card-text">Office Number:${manager.officenumber}</p>
    </ul>       
  </div>
</div>`;
}

function addEngineer(engineer){
    return `<div class= "col-4 mb-3">
    <div class="card " style="width: 18rem">
    <div class="card-title bg-info ">
        <h5>${engineer.name}</h5>
        <p class="sub-title"> Engineer</p>
    </div>
    <ul class=" card-body">
      <p class="card-text">Id:${engineer.id}</p>
      <p class="card-text">Email:<a href="mailto:${engineer.email}">${engineer.email}</a> </p>
      <p class="card-text">GitHub:<a href="https://github.com/${engineer.email}">${engineer.email}</a></p>
    </ul>       
  </div>
</div>`;
}

function addIntern(intern){
    return `<div class= "col-4 mb-3">
    <div class="card " style="width: 18rem">
    <div class="card-title bg-info ">
        <h5>${intern.name}</h5>
        <p class="sub-title"> Intern</p>
    </div>
    <ul class=" card-body">
      <p class="card-text">Id:${intern.id}</p>
      <p class="card-text">Email:<a href="mailto:${intern.email}">${intern}.email}</a> </p>
      <p class="card-text">School:${intern.school}</p>
    </ul>       
  </div>
</div>`;
}

function generateHtmlPage(data){
   cardArray = [];
  for(const employee of data){
    const role = employee.getrole();

   if(role === 'Manager');
   {
       const managerCard = addManager(employee);
       cardArray.push(managerCard);
   }
   if(role === 'Engineer');
   {
       const engineerCard = addEngineer(employee);
       cardArray.push(engineerCard);
   }
   if(role === 'Intern');
   {
       const internCard = addIntern(employee);
       cardArray.push(internCard);
   }
   const employeecardArray = cardArray.join('');
   generateHTML(employeecardArray);
}
}


function generateHTML(employeeCardArray){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    
        <title>Team Profile Generator</title>
    </head>
    <body>
    <header class= "jumbotron bg-info height-200px text-center"><h1>Team Profile</h1></header>
    <div class="container w-80% ">
        <section class="row justify-content-center">
     
        ${employeeCardArray}
       
        </section>
        </div>
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    
    </html>`;  
}


module.exports = generateHtmlPage;