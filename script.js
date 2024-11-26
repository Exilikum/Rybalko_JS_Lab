function checkPassword() {
    const password = document.getElementById("password").value;
    const strengthResult = document.getElementById("strength-result");
    const tips = [];
  
    // Очищення попереднього результату
    strengthResult.textContent = "";
    strengthResult.className = "password-strength";
  
    // Мінімальна довжина
    if (password.length < 8) {
      tips.push("Довжина пароля повинна бути не менше 8 символів.");
    }
  
    // Перевірка наявності великих літер
    if (!/[A-Z]/.test(password)) {
      tips.push("Додайте хоча б одну велику літеру.");
    }
  
    // Перевірка наявності малих літер
    if (!/[a-z]/.test(password)) {
      tips.push("Додайте хоча б одну малу літеру.");
    }
  
    // Перевірка наявності цифр
    if (!/[0-9]/.test(password)) {
      tips.push("Додайте хоча б одну цифру.");
    }
  
    // Перевірка наявності спеціальних символів
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      tips.push("Додайте хоча б один спеціальний символ (!@#$%^&* тощо).");
    }
  
    // Перевірка на послідовності символів
    if (/([a-zA-Z0-9])\1{2,}/.test(password)) {
      tips.push("Уникайте повторюваних символів (наприклад, 'aaa').");
    }
  
    // Оцінка сили пароля
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
  
    if (strength <= 2) {
      strengthResult.textContent = "Слабкий пароль. " + tips.join(" ");
      strengthResult.classList.add("weak", "show");
    } else if (strength === 3 || strength === 4) {
      strengthResult.textContent = "Середній пароль. " + tips.join(" ");
      strengthResult.classList.add("medium", "show");
    } else {
      strengthResult.textContent = "Сильний пароль! Вітаємо, ваш пароль відповідає основним вимогам безпеки.";
      strengthResult.classList.add("strong", "show");
    }
  }
  