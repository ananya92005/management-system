// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const form = document.getElementById("loginForm");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const email = emailInput.value;
//     const password = passwordInput.value;

//     console.log("Email:", email);
//     console.log("Password:", password);
// });

// document.addEventListener("DOMContentLoaded", function () {

//     const form = document.getElementById("loginForm");

//     form.addEventListener("submit", function (e) {
//         e.preventDefault();

//         const email = document.getElementById("email").value;
//         const password = document.getElementById("password").value;

//         console.log("Email:", email);
//         console.log("Password:", password);
//     });

// });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("LoginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("Email").value.trim();
    const password = document.getElementById("Password").value.trim();

    const emailError = document.getElementById("email error");
    const passwordError = document.getElementById("password error");
    const successMsg = document.getElementById("SuccessMsg");

    // reset
    emailError.textContent = "";
    passwordError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    // email validation
    if (email === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else if (!email.includes("@")) {
      emailError.textContent = "Enter a valid email";
      isValid = false;
    }

    // password validation
    if (password === "") {
      passwordError.textContent = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters";
      isValid = false;
    }

    if (isValid) {
      successMsg.textContent = "Login successful ✅";
    }
  });
});
 document.addEventListener("DOMContentLoaded", function () {
    form.addEventListener("submit", function (e) {
        console.log("Email:",loginData.email);
        console.log("Password:",loginData.password);

        const successMsg = document.getElementById("SuccessMsg");
        successMsg.textContent = "Login successful Redirecting....";
        setTimeout(function () {
            localStorage.setItem("userEmail",email);
            window.location.href = "Dashboard.html";
        }, 1500);
    });
});