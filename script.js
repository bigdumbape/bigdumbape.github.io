document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
    });

    // Save the user's theme preference in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'light') {
        document.body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        let theme = 'dark';
        if (document.body.classList.contains('light-mode')) {
            theme = 'light';
        }
        localStorage.setItem('theme', theme);
    });
});

