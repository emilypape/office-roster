

function createTeamPage(teamDataArray) {
    // data manipulation
    // turn teamate objects into html strings
    function generateTeamCard(teamMemberData) {
        //return an HTML Card
        let htmlName = `<h1 class="employeeName">${teamMemberData.getName()}</h1>`;
        let htmlTitle = `<h1 class="employeeRole">${teamMemberData.getRole()}</h1>`;
        let htmlId = `<h2 class="employeeId">ID: ${teamMemberData.getId()}`;
        let htmlEmail = `<h2 class="employeeEmail"> Email: ${teamMemberData.getEmail()}`;
        let htmlOfficeNumber;
        let htmlGithub;
        let htmlSchool;

        if(teamMemberData.officeNumber) {
            htmlOfficeNumber = `<h2 class="employeeSpecific"> Office Number: ${teamMemberData.getOfficeNumber()}</h2>`;
        }

        if(teamMemberData.github) {
            htmlGithub = `<h2 class="employeeSpecific"> Github: ${teamMemberData.getGithub()}</h2>`;
        }

        if(teamMemberData.school) {
            htmlSchool = `<h2 class="employeeSpecific"> School: ${teamMemberData.getSchool()}</h2>`;
        }

        return(`
        <div class="card">
            <div class="cardHeader">
                ${htmlName}
                ${htmlTitle}
            </div>
            <div class="cardBody">
                ${htmlId}
                ${htmlEmail}
                ${htmlOfficeNumber ? htmlOfficeNumber : ''}
                ${htmlGithub ? htmlGithub : ''}
                ${htmlSchool ? htmlSchool : ''}
            </div>
        </div>
        `)
    }

    const teamDataHTMLArray = teamDataArray.map(generateTeamCard);
    let cardHTML = '';
    teamDataHTMLArray.forEach((card) => {
        cardHTML += card;
    })
    return(`
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../css/styles.css">
            <title>Document</title>
        </head>
        <header class="teamBar"> My Team </header>
        <body>
            <div class="cardBox">
                <div class="cardContainer">
                    ${cardHTML}
                </div>
            </div>
            
        </body>
        </html>
    `)
}

module.exports = createTeamPage;