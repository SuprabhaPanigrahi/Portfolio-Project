// Toggle Mobile Navigation Menu
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

        // Close the menu on mobile after clicking a link
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Dark Mode Toggle
const toggleThemeBtn = document.createElement('button');
toggleThemeBtn.innerText = "🌙 Dark Mode";
toggleThemeBtn.classList.add('theme-toggle');
document.body.appendChild(toggleThemeBtn);

toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save dark mode preference in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleThemeBtn.innerText = "☀️ Light Mode";
    } else {
        localStorage.setItem('theme', 'light');
        toggleThemeBtn.innerText = "🌙 Dark Mode";
    }
});

// Load Dark Mode Preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleThemeBtn.innerText = "☀️ Light Mode";
}

// Show Scroll-to-Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = "⬆️";
scrollTopBtn.classList.add('scroll-top');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
