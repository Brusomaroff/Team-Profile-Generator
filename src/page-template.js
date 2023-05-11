const generateTeam = (team) => {
    const generateCard = (employee) => {
      let icon = '';
      let info = '';
      if (employee.getRole() === 'Manager') {
        icon = '<i class="fas fa-mug-hot mr-2"></i>';
        info = `Office Number: ${employee.getOfficeNumber()}`;
      } else if (employee.getRole() === 'Engineer') {
        icon = '<i class="fas fa-glasses mr-2"></i>';
        info = `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank" rel="noopener noreferrer">${employee.getGithub()}</a>`;
      } else if (employee.getRole() === 'Intern') {
        icon = '<i class="fas fa-user-graduate mr-2"></i>';
        info = `School: ${employee.getSchool()}`;
      }
      return `
        <div class="card employee-card">
          <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
            <h3 class="card-title">${icon}${employee.getRole()}</h3>
          </div>
          <div class="cards">
            <ul class="list-group">
              <li class="list-group-item">ID: ${employee.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
              <li class="list-group-item">${info}</li>
            </ul>
          </div>
        </div>
      `;
    };
  
    const html = team.map(employee => generateCard(employee)).join('');
    return html;
  };
  
  module.exports = (team) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Team Profiles</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="style.css">
          <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>
        <body>
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 jumbotron mb-3 team-header">
                <h1 class="text-center">Team Profiles</h1>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
  };
  