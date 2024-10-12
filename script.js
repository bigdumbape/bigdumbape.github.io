document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle'); // Target the toggle button

    // Check if a theme is already set in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'light') {
        document.body.classList.add('light-mode'); // Apply light mode if set
    }

    // Event listener for toggle button click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode'); // Toggle the light mode class

        // Update the theme in localStorage
        let theme = 'dark'; // Default to dark
        if (document.body.classList.contains('light-mode')) {
            theme = 'light'; // Set to light if the class is present
        }
        localStorage.setItem('theme', theme); // Save preference in localStorage
    });
});

