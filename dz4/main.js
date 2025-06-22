const email = document.getElementById('email');
    const password = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const emailError = document.getElementById('emailError');
    const passError = document.getElementById('passError');
    const result = document.getElementById('result');
    const correctEmail = "admin@test.com";
    const correctPassword = "123456";
    function checkInputs() {
      const emailValue = email.value.trim();
      const passValue = password.value.trim();
      let emailValid = false;
      let passValid = false;
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        email.style.border = "1px solid #ccc";
        emailError.style.display = "none";
        emailValid = true;
      } else {
        email.style.border = "1px solid red";
        emailError.style.display = "block";
      }
      if (passValue.length >= 6) {
        password.style.border = "1px solid #ccc";
        passError.style.display = "none";
        passValid = true;
      } else {
        password.style.border = "1px solid red";
        passError.style.display = "block";
      }
      if (emailValid && passValid) {
        loginBtn.disabled = false;
      } else {
        loginBtn.disabled = true;
      }
    }
    email.addEventListener('input', checkInputs);
    password.addEventListener('input', checkInputs);
    loginBtn.addEventListener('click', function () {
      if (email.value === correctEmail && password.value === correctPassword) {
        result.style.color = "green";
        result.textContent = "Вхід успішний!";
      } else {
        result.style.color = "red";
        result.textContent = "Невірний email або пароль.";
      }
    });