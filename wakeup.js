document.addEventListener("DOMContentLoaded", function() {
    const eventsList = document.getElementById("eventsList");
  
    // Example events data
    const events = [
      { title: "Morning Yoga", date: "2024-11-02", time: "7:00 AM" },
      { title: "Evening Spin Class", date: "2024-11-02", time: "6:00 PM" },
    ];
  
    events.forEach(event => {
      const eventDiv = document.createElement("div");
      eventDiv.className = "event";
      eventDiv.innerHTML = `
        <h3>${event.title}</h3>
        <p>${event.date} at ${event.time}</p>
      `;
      eventsList.appendChild(eventDiv);
    });
  });
  