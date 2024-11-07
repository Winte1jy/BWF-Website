function calculateCalories() {
    const exerciseType = document.getElementById("exerciseType").value;
    const duration = parseInt(document.getElementById("duration").value);
    let calories = 0;
  
    if (exerciseType === "running") {
      calories = duration * 10;  // Example: 10 calories per minute for running
    } else if (exerciseType === "cycling") {
      calories = duration * 8;
    } else if (exerciseType === "swimming") {
      calories = duration * 9;
    }
  
    document.getElementById("caloriesOutput").textContent = calories;
  }
  