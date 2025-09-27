// small interactivity: form mock and year
document.getElementById('year').textContent = new Date().getFullYear();


const form = document.getElementById('contact-form');
const result = document.getElementById('form-result');
form.addEventListener('submit', (e) => {
e.preventDefault();
result.classList.remove('hidden');
result.textContent = 'Thanks — message received (mock).';
form.reset();
});
