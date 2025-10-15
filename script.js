const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const prefersDark = window.matchMedia('(preferes-color-scheme: dark)').matches;
const root = document.documentElement; 
const saved = localStorage.getItem('theme');
if (saved === 'dark' || (!saved && prefersDark)) root.classList.add('dark');

const btn = document.getElementById('themeToggle');
if (btn){
  const setPressed = () => btn.setAttribute('aria-pressed', root.classList.contains('dark') ? 'true' : 'false');
  setPressed();
  btn.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    setPressed();
  });
}