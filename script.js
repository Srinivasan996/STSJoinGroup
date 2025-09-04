document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    const contentPanels = document.querySelectorAll('.content-panel');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;

            // Remove 'active' class from all buttons and content panels
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            contentPanels.forEach(panel => panel.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Show the corresponding content panel
            document.querySelector(`.${lang}-content`).classList.add('active');
        });
    });

    // Optionally, set an initial active language if needed (e.g., English by default)
    document.querySelector('.english-content').classList.add('active');
    document.querySelector('.toggle-button[data-lang="english"]').classList.add('active');
});