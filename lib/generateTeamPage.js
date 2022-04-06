

function createTeamPage(teamDataArray) {
    // data manipulation
    // turn teamate objects into html strings
    function generateTeamCard(teamMemberData) {
        //return an HTML Card
        let htmlTitle = `<h1>${teamMemberData.getRole()}</h1>`;
        let htmlOfficeNumber = `<h2>${teamMemberData.getOfficeNumber()}</h2>`;
        let htmlGithub = `<h2>${teamMemberData.getGithub()}</h2>`;
        let htmlSchool = `<h2>${teamMemberData.getSchool()}</h2>`
        return(`
        ${htmlTitle}
        ${htmlOfficeNumber}
        ${htmlGithub}
        ${htmlSchool}
        `)
    }

    const teamDataHTMLArray = teamDataArray.map(generateTeamCard);

    return(`
    <html>
    <h1> MY TEAM </h1>
    
    </html>
    `)
}

module.exports = createTeamPage;