document.getElementById("signUpForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Form validation
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    let valid = true;
  
    // Name validation
    if (name.value.trim() === "") {
      name.classList.add("is-invalid");
      valid = false;
    } else {
      name.classList.remove("is-invalid");
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.classList.add("is-invalid");
      valid = false;
    } else {
      email.classList.remove("is-invalid");
    }
  
    // Password validation
    if (password.value.trim().length < 6) {
      password.classList.add("is-invalid");
      valid = false;
    } else {
      password.classList.remove("is-invalid");
    }
  
    // Success message
    if (valid) {
      alert("Sign up successful!");
      // Reset the form
      document.getElementById("signUpForm").reset();
    }
  });
  