document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const mainCard = document.getElementById('mainCard');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Зупиняємо стандартну відправку

        // Отримуємо дані
        const name = document.getElementById('userName').value.trim();
        const email = document.getElementById('userEmail').value.trim();
        const message = document.getElementById('userMessage').value.trim();

        // Валідація
        let isValid = true;
        if (name === "") { document.getElementById('nameError').textContent = "Введіть ім'я"; isValid = false; }
        if (!email.includes('@')) { document.getElementById('emailError').textContent = "Невірний Email"; isValid = false; }
        if (message === "") { document.getElementById('messageError').textContent = "Введіть повідомлення"; isValid = false; }

        if (isValid) {
            // 1. Змінюємо текст на кнопці, імітуючи відправку
            const btn = document.getElementById('submitBtn');
            btn.textContent = "Надсилаємо...";
            btn.disabled = true;

            // 2. Через 1 секунду "оновлюємо" вміст картки
            setTimeout(() => {
                mainCard.innerHTML = `
                    <div class="thanks-message">
                        <h2>Дякую!</h2>
                        <p>Ваше повідомлення надіслано успішно.</p>
                    </div>
                `;
            }, 1000);
        }
    });
});
