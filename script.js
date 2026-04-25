document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMessage');

    // 1. Подія 'input' — валідація в реальному часі
    const emailInput = document.getElementById('userEmail');
    emailInput.addEventListener('input', () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailInput.classList.add('invalid');
            document.getElementById('emailError').textContent = 'Невірний формат email';
        } else {
            emailInput.classList.remove('invalid');
            document.getElementById('emailError').textContent = '';
        }
    });

    // 2. Подія 'submit' — обробка форми
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Заборона перезавантаження сторінки

        let isValid = true;
        const name = document.getElementById('userName').value;
        const message = document.getElementById('userMessage').value;

        // Перевірка заповненості
        if (name.trim() === '') {
            document.getElementById('nameError').textContent = "Ім'я обов'язкове";
            isValid = false;
        }
        if (message.trim() === '') {
            document.getElementById('messageError').textContent = "Повідомлення не може бути порожнім";
            isValid = false;
        }

        if (isValid) {
            // Динамічне оновлення DOM
            form.classList.add('hidden');
            successMsg.classList.remove('hidden');

            // 3. Подія 'click' (динамічне додавання елемента)
            console.log('Дані надіслано:', { name, email: emailInput.value, message });
        }
    });

    // Приклад додавання нової картки товару через кнопку "В кошик"
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.textContent = 'У кошику ✓';
            this.style.backgroundColor = '#28a745';
            this.style.color = '#fff';
            
            // Створення нового елемента DOM
            const notification = document.createElement('div');
            notification.innerText = 'Товар додано!';
            notification.style.cssText = 'position:fixed; bottom:20px; right:20px; background:#333; color:#fff; padding:10px;';
            document.body.appendChild(notification);
            
            setTimeout(() => notification.remove(), 2000);
        });
    });
});
