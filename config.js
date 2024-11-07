const eventsTable = document.getElementById("eventsTable");

function addEvent() {
  const title = document.getElementById("eventTitle").value;
  const date = document.getElementById("eventDate").value;
  const time = document.getElementById("eventTime").value;

  const newRow = eventsTable.insertRow();
  newRow.innerHTML = `
    <td>${title}</td>
    <td>${date}</td>
    <td>${time}</td>
  `;
}
