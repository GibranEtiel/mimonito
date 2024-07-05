document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert('¡Feliz Aniversario! Te Quiero mucho 💖');
        });
    });
});
