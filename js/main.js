// js/main.js
// Basic UI logic: toggle login/register modal, simple validation

const btnTry = document.getElementById('btnTry');
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');

const goRegister = document.getElementById('go-register');
const goLogin = document.getElementById('go-login');

btnTry.addEventListener('click', () => {
  loginSection.classList.remove('hidden');
});

goRegister.addEventListener('click', (e) => {
  e.preventDefault();
  loginSection.classList.add('hidden');
  registerSection.classList.remove('hidden');
});

goLogin.addEventListener('click', (e) => {
  e.preventDefault();
  registerSection.classList.add('hidden');
  loginSection.classList.remove('hidden');
});

// TODO: Tambahkan validasi form dan logic login/register dengan API (Supabase dll)
