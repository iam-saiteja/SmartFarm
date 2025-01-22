document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Form validation
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    let valid = true;
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.classList.add("is-invalid");
      valid = false;
    } else {
      email.classList.remove("is-invalid");
    }
  
    // Password validation
    if (password.value.trim() === "") {
      password.classList.add("is-invalid");
      valid = false;
    } else {
      password.classList.remove("is-invalid");
    }
  
    // Success message
    if (valid) {
      alert("Log in successful!");
      // Reset the form
      document.getElementById("loginForm").reset();
    }
  });
  