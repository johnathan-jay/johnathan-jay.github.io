const darkModeToggle = document.getElementById('darkmode');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});
