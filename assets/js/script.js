// Fetch current season stats (replace with actual API call)
function fetchCurrentSeasonStats() {
  // Simulate API response
  const stats = {
    points: 42,
    gamesPlayed: 20
  };
  document.getElementById('points').textContent = stats.points;
  document.getElementById('games-played').textContent = stats.gamesPlayed;
  // Add logic to populate charts using the stats data
}

// Fetch next match info (replace with actual API call)
function fetchNextMatchInfo() {
  // Simulate API response
  const matchInfo = {
    opponent: "Sporting CP",
    date: "2024-04-06",
    time: "18:00",
    competition: "Primeira Liga",
    venue: "Estádio José Alvalade"
  };
  document.getElementById('opponent').textContent = matchInfo.opponent;
  document.getElementById('match-date').textContent = matchInfo.date;
  document.getElementById('match-time').textContent = matchInfo.time;
  document.getElementById('competition').textContent = matchInfo.competition;
  document.getElementById('venue').textContent = matchInfo.venue;
}

// Fetch head-to-head stats (replace with actual API call)
function fetchHeadToHeadStats() {
  // Simulate API response
  const headToHeadData = [
    {
      date: "2023-12-10",
      competition: "Primeira Liga",
      result: "SL Benfica 3-1 Sporting CP"
    },
    {
      date: "2024-02-04",
      competition: "Taça de Portugal",
      result: "Sporting CP 2-1 SL Benfica"
    }
  ];
  // Update the table rows with head-to-head data
  const tableBody = document.querySelector('.head-to-head tbody');
  tableBody.innerHTML = ""; // Clear existing rows
  headToHeadData.forEach(match => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${match.date}</td><td>${match.competition}</td><td>${match.result}</td>`;
    tableBody.appendChild(row);
  });
}

// Call the functions on page load
window.addEventListener('load', () => {
  fetchCurrentSeasonStats();
  fetchNextMatchInfo();
  fetchHeadToHeadStats();
});