document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formContainer = document.getElementById('formContainer');
    const successMsg = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        // 1. Зупиняємо стандартне перезавантаження сторінки
        event.preventDefault();

        // 2. Отримуємо значення та очищуємо від пробілів
        const nameInput = document.getElementById('userName');
        const emailInput = document.getElementById('userEmail');
        const messageInput = document.getElementById('userMessage');

        // Очищення попередніх помилок
        document.querySelectorAll('.error-text').forEach(el => el.textContent = '');
        
        let isValid = true;

        // 3. Базова валідація (чи заповнені поля)
        if (nameInput.value.trim() === "") {
            document.getElementById('nameError').textContent = "Введіть ваше ім'я";
            isValid = false;
        }

        // Проста перевірка Email на наявність @
        if (emailInput.value.trim() === "" || !emailInput.value.includes('@')) {
            document.getElementById('emailError').textContent = "Введіть коректний Email";
            isValid = false;
        }

        if (messageInput.value.trim() === "") {
            document.getElementById('messageError').textContent = "Напишіть нам повідомлення";
            isValid = false;
        }

        // 4. ГОРОВНА ЛОГІКА: Якщо все заповнено вірно
        if (isValid) {
            // ПРИХОВУЄМО КОНТЕЙНЕР З ФОРМОЮ
            formContainer.classList.add('hidden');
            
            // ПОКАЗУЄМО БЛОК ПОДЯКИ (видаляємо клас приховування)
            successMsg.classList.remove('hidden');

            // Опціонально: вивід у консоль
            console.log("Повідомлення надіслано успішно!");
        }
    });
});
            
            setTimeout(() => notification.remove(), 2000);
        });
    });
});
