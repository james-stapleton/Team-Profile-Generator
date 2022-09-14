
function generateTeamHTML(team) {
    let stringHTML = ``;
    for (var i = 0; i < team.length; i++) {
        if(team[i].role === 'Manager') {
            stringHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Manager</h5>
            
                <div id="${team[i].ID.toString()}"> 
                    <ul>
                        <li>${team[i].name}</li>
                        <li>${team[i].id}</li>
                        <li>${team[i].email}</li>
                        <li>${team[i].office}</li>
                    </ul>
                </div>
</div>
</div>`
        }
        else if (team[i].role =="Engineer") {
            stringHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Engineer</h5>
            
                <div id="${team[i].ID.toString()}"> 
                    <ul>
                        <li>${team[i].name}</li>
                        <li>${team[i].ID}</li>
                        <li>${team[i].email}</li>
                        <li><a href="https://github.com/${team[i].github}">GitHub</a></li>
                    </ul>
                </div>
</div>
</div>`
        }
        else {
            stringHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Intern</h5>
            
                <div id="${team[i].ID.toString()}"> 
                    <ul>
                        <li>${team[i].name}</li>
                        <li>${team[i].ID}</li>
                        <li>${team[i].email}</li>
                        <li>${team[i].school}</li>
                    </ul>
                </div>
</div>
</div>`
        }

    }
    return stringHTML.toString();
    // .split(`<div id="${team[i].ID.toString()}">`);;
}

function generateBaseHTML (team) {
    let teamHTML = generateTeamHTML(team).toString();
    let finalHTML = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="Description" content="Enter your description here" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link rel="stylesheet" href="assets/css/style.css" />
        <title>Your Team!</title>
      </head>
      <body>
     
        ${teamHTML}
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
      </body>
    </html>
`
    return finalHTML;
}

module.exports = generateBaseHTML;
module.exports = generateTeamHTML;
