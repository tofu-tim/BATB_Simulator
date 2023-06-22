function toggleActive(button) {
    button.classList.toggle('active');

    const activeButtons = document.querySelectorAll('.skater-button.active');
    if (activeButtons.length === 2) {
        window.location.href = 'batbgamesim.html';
    }
}