document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formContainer = document.getElementById('formContainer');
    const successMsg = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        // 1. Зупиняємо перезавантаження сторінки
        event.preventDefault();

        // 2. Отримуємо дані
        const name = document.getElementById('userName').value.trim();
        const email = document.getElementById('userEmail').value.trim();
        const message = document.getElementById('userMessage').value.trim();

        // Очищення помилок
        document.querySelectorAll('.error-text').forEach(el => el.textContent = '');

        let isValid = true;

        // 3. Валідація
        if (name === "") {
            document.getElementById('nameError').textContent = "Введіть ім'я";
            isValid = false;
        }
        if (!email.includes('@')) {
            document.getElementById('emailError').textContent = "Введіть коректний Email";
            isValid = false;
        }
        if (message === "") {
            document.getElementById('messageError').textContent = "Напишіть повідомлення";
            isValid = false;
        }

        // 4. ДІЯ ПРИ УСПІХУ
        if (isValid) {
            // Повністю ховаємо контейнер з формою
            formContainer.style.display = 'none';
            
            // Показуємо блок подяки (видаляємо hidden)
            successMsg.classList.remove('hidden');
            
            console.log("Форма успішно відправлена!");
        }
    });
});
            
            setTimeout(() => notification.remove(), 2000);
        });
    });
});
