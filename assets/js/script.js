const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "85cee54e6ac660bbf59c4a410daf6965");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("fixtures?id=1063718&team=211&date=2024-03-29&season=2023", requestOptions)
  .then((response) => response.json()) // Try parsing as JSON (modify if needed)
  .then((data) => {
    if (data.error) { // Check for errors in the response (optional)
      console.error(data.error);
    } else {
      displayData(data);
    }
  })
  .catch((error) => console.error(error));

  function displayData(data) {
    const jsonData = JSON.parse(data);
  
    // Assuming response structure as before
    const homeTeamName = jsonData.response[0].teams.home.team.name;
    const awayTeamName = jsonData.response[0].teams.away.team.name;
    const matchDate = jsonData.response[0].date;
  
    // Update HTML elements using their IDs from stats.html
    const homeTeamElement = document.getElementById("home-team");
    const awayTeamElement = document.getElementById("away-team");
    const matchDateElement = document.getElementById("match-date");
  
    homeTeamElement.textContent = homeTeamName;
    awayTeamElement.textContent = awayTeamName;
    matchDateElement.textContent = matchDate;
  }