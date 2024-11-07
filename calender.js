document.addEventListener("DOMContentLoaded", function() {
    const calendarContainer = document.getElementById("calendarContainer");
  
    // Example of dynamically creating events
    const events = [
      { title: "Yoga Class", date: "2024-11-01", time: "10:00 AM" },
      { title: "HIIT Workout", date: "2024-11-03", time: "6:00 PM" },
    ];
  
    events.forEach(event => {
      const eventDiv = document.createElement("div");
      eventDiv.className = "event";
  
      eventDiv.innerHTML = `
        <h3>${event.title}</h3>
        <p>${event.date} at ${event.time}</p>
        <button onclick="generateQRCode('${event.title}')">Get QR Code</button>
      `;
  
      calendarContainer.appendChild(eventDiv);
    });
  });
  
  function generateQRCode(eventName) {
    alert(`QR code generated for: ${eventName}`);
  }
  