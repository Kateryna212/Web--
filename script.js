document.getElementById('contactForm').addEventListener('submit', function(event) {
    // 1. Цей рядок КРИТИЧНО ВАЖЛИВИЙ — він зупиняє перезавантаження сторінки
    event.preventDefault();

    // 2. Отримуємо доступ до білої картки
    const card = document.getElementById('main-card');

    // 3. ПОВНІСТЮ замінюємо все, що всередині картки, на твій напис
    card.innerHTML = `
        <div class="thanks-container">
            <h2 style="font-size: 40px; margin-bottom: 15px;">✓</h2>
            <h2>Дякую!</h2>
            <p>Ваше повідомлення надіслано успішно.</p>
        </div>
    `;
    
    console.log("Форма надіслана, вміст картки змінено!");
});
            
            setTimeout(() => notification.remove(), 2000);
        });
    });
});
