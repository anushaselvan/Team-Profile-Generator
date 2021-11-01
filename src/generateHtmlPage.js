function addManager(manager){
  return `
<div class= "col-4 mb-3">
<div class="card shadow-lg rounded" style="width: 18rem">
<div class="card-title bg-info ">
    <h3>${manager.name}</h3>
    <h5 class="sub-title"><img src="./assets/Coffee.png" alt="Coffee"/> Manager</h5>
</div>
<ul class="card-body">
    <h6 class="card-text">ID:${manager.id}</h6>
    <h6 class="card-text">Email:<a href="mailto:${manager.email}">${manager.email}</a> </h6>
    <h6 class="card-text">Office Number:${manager.officenumber}</h6>
</ul>       
</div>
</div>`;
}

function addEngineer(engineer){
  return `
<div class= "col-4 mb-3">
<div class="card shadow-lg rounded " style="width: 18rem">
<div class="card-title bg-info  ">
    <h3>${engineer.name}</h3>
    <h5 class="sub-title"><img src="./assets/Glasses.png" alt="Glasses"/> Engineer</h5>
</div>
<ul class=" card-body">
    <h6 class="card-text">ID:${engineer.id}</h6>
    <h6 class="card-text">Email:<a href="mailto:${engineer.email}">${engineer.email}</a> </h6>
    <h6 class="card-text">GitHub:<a href="https://github.com/${engineer.github}">${engineer.github}</a></h6>
</ul>       
</div>
</div>`;
}

function addIntern(intern){
  return `
  <div class= "col-4 mb-3">
  <div class="card shadow-lg rounded " style="width: 18rem">
  <div class="card-title bg-info  ">
      <h3>${intern.name}</h3>
      <h5 class="sub-title"><img src="./assets/Intern.png" alt="Intern"/> Intern</h5>
  </div>
  <ul class=" card-body">
      <h6 class="card-text">ID:${intern.id}</h6>
      <h6 class="card-text">Email:<a href="mailto:${intern.email}">${intern.email}</a> </h6>
      <h6 class="card-text">School:${intern.school}</h6>
  </ul>       
  </div>
  </div>`;
}

function generateHtmlPage(teamMemberArray) {
cardArray = [];
    for(let i = 0; i < teamMemberArray.length; i++){
        if(teamMemberArray[i].getRole() === "Manager")
        {
            const managerCard = addManager(teamMemberArray[i]);
            cardArray.push(managerCard);
        }
        else if(teamMemberArray[i].getRole() === "Engineer")
        {
            const engineerCard = addEngineer(teamMemberArray[i]);
            cardArray.push(engineerCard);
        }
        else
        {
            const internCard = addIntern(teamMemberArray[i]);
            cardArray.push(internCard);
        }
    }
 const employeecardArray = cardArray.join('');
 return generateHTML(employeecardArray);
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
      <header class= "jumbotron bg-info height-200px text-center"> 
        <span style = "font-size:4rem; font-weight: bold; font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Team Profile</span>
      </header>
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