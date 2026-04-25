document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMessage');
    const emailInput = document.getElementById('userEmail');

    // 1. Подія 'input' — Валідація Email в реальному часі
    emailInput.addEventListener('input', () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailError = document.getElementById('emailError');
        
        if (emailInput.value !== "" && !emailPattern.test(emailInput.value)) {
            emailError.textContent = "Невірний формат email (приклад: name@mail.com)";
            emailInput.style.borderColor = "#e74c3c";
        } else {
            emailError.textContent = "";
            emailInput.style.borderColor = "#ddd";
        }
    });

    // 2. Подія 'submit' — Обробка відправки форми
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Сторінка не перезавантажується

        const name = document.getElementById('userName').value.trim();
        const email = emailInput.value.trim();
        const message = document.getElementById('userMessage').value.trim();

        // Очищення попередніх помилок
        document.querySelectorAll('.error').forEach(el => el.textContent = '');

        let isValid = true;

        // Валідація полів
        if (name === "") {
            document.getElementById('nameError').textContent = "Введіть ваше ім'я";
            isValid = false;
        }
        if (email === "") {
            document.getElementById('emailError').textContent = "Email обов'язковий";
            isValid = false;
        }
        if (message === "") {
            document.getElementById('messageError').textContent = "Напишіть нам щось";
            isValid = false;
        }

        // Якщо все заповнено вірно
        if (isValid) {
            // ПРИХОВУЄМО ФОРМУ
            form.classList.add('hidden');
            
            // ПОКАЗУЄМО ПОВІДОМЛЕННЯ ПРО УСПІХ
            successMsg.classList.remove('hidden');

            console.log("Форма успішно оброблена:", { name, email, message });
        }
    });

    // 3. Подія 'click' — Інтерактивність кнопок товарів
    const buyBtn = document.querySelector('.buy-btn');
    if (buyBtn) {
        buyBtn.addEventListener('click', () => {
            buyBtn.textContent = "У кошику ✓";
            buyBtn.style.background = "#2ecc71";
            buyBtn.style.color = "white";
            
            alert("Товар додано до вашого кошика!");
        });
    }
});
            
            setTimeout(() => notification.remove(), 2000);
        });
    });
});
