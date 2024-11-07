function validateForm() {
    let valid = true;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const zip = document.getElementById("zip").value;
  
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const zipError = document.getElementById("zipError");
  
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    zipError.textContent = "";
  
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      nameError.textContent = "Invalid name format";
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.textContent = "Invalid email format";
      valid = false;
    }
    if (!/^\d{10}$/.test(phone)) {
      phoneError.textContent = "Phone must be 10 digits";
      valid = false;
    }
    if (!/^\d{5}$/.test(zip)) {
      zipError.textContent = "ZIP code must be 5 digits";
      valid = false;
    }
  
    return valid;
  }
  
  function confirmSubmission() {
    alert("Thank you! Your registration is confirmed.");
  }
  