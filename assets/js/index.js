// fixed team ID or name
var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "85cee54e6ac660bbf59c4a410daf6965");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/leagues", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

const fixedTeamId = "211";

async function getFixedTeam(teamId) {
    try {
      const response = await fetch(`"https://v3.football.api-sports.io/teams?id=211${teamId}`);
      if (!response.ok) {
        throw new Error(`Error fetching team: ${response.statusText}`);
      }
      const teamData = await response.json();
      return teamData;
    } catch (error) {
      console.error("Error fetching team:", error);
      // Handle errors gracefully, e.g., display an error message to the user
      return null;
    }
  }

getFixedTeam(fixedTeamId)
  .then(teamData => {
    if (teamData) {
      // Use the retrieved team data here, e.g., display team name, logo, etc.
      console.log("Fixed team data:", teamData);
    } else {
      // Handle cases where data retrieval failed
      console.error("Failed to get fixed team data");
    }
  });

  const teamNameElement = document.getElementById("fixed-team-name");
  const teamLogoElement = document.getElementById("fixed-team-logo");
// Path: index.js