<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>DSRT - Digital Smart Revise Technology</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  body, html {
    margin: 0; padding: 0; height: 100%;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: white;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background: rgba(0,0,0,0.5);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 20;
    box-sizing: border-box;
  }
  .logo {
    font-weight: 900;
    font-size: 26px;
    letter-spacing: 3px;
    color: #00ffd5;
    user-select: none;
    cursor: default;
  }
  .btn-login {
    background: transparent;
    border: 2px solid #00ffd5;
    color: #00ffd5;
    padding: 8px 22px;
    border-radius: 30px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
  }
  .btn-login:hover {
    background: #00ffd5;
    color: #000;
  }

  .hero-bg {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100vh;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }
  .line {
    position: absolute;
    background: rgba(0, 255, 213, 0.3);
    width: 2px;
    animation: moveLine 6s linear infinite;
  }
  .line:nth-child(1) {
    height: 120vh;
    left: 20%;
    animation-delay: 0s;
  }
  .line:nth-child(2) {
    height: 100vh;
    left: 40%;
    animation-delay: 2s;
  }
  .line:nth-child(3) {
    height: 140vh;
    left: 60%;
    animation-delay: 4s;
  }
  .line:nth-child(4) {
    height: 110vh;
    left: 80%;
    animation-delay: 1s;
  }
  @keyframes moveLine {
    0% {transform: translateY(-100%);}
    100% {transform: translateY(100%);}
  }

  section.hero {
    height: 100vh;
    padding: 0 20px;
    max-width: 1200px;
    margin: auto;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  /* Logo singkat dan judul */
  .hero .short-logo {
    font-weight: 900;
    font-size: 48px;
    color: #00ffd5;
    letter-spacing: 5px;
    margin: 0 0 12px 0;
    user-select: none;
  }
  .hero h1 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 20px 0;
    color: #00ffd5;
  }
  .hero p {
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 30px;
    color: #cde9e9;
    max-width: 600px;
  }
  .btn-primary {
    background: #ffcb05;
    color: #000;
    padding: 16px 36px;
    font-size: 1.1rem;
    font-weight: 700;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    width: fit-content;
    box-shadow: 0 5px 15px rgba(255,203,5,0.6);
    transition: background 0.3s ease;
  }
  .btn-primary:hover {
    background: #f2a900;
  }

  /* Fitur Unggulan */
  section.features {
    max-width: 1200px;
    margin: 40px auto 60px;
    padding: 0 20px;
  }
  section.features h2 {
    text-align: center;
    color: #00ffd5;
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 24px;
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
    gap: 24px;
  }
  .feature-item {
    background: rgba(0,255,213,0.1);
    padding: 20px;
    border-radius: 12px;
    text-align: center;
  }
  .feature-icon {
    font-size: 48px;
    color: #00ffd5;
    margin-bottom: 12px;
  }
  .feature-item h3 {
    color: #00ffd5;
    margin-bottom: 8px;
  }
  .feature-item p {
    color: #cde9e9;
  }

  /* Footer */
  footer {
    background: #001f27;
    color: #00ffd5;
    padding: 20px 0;
    text-align: center;
    font-weight: 700;
  }

  /* Modal styles */
  .modal {
    display: none; /* Hidden by default */
    position: fixed;
    z-index: 50;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0,0,0,0.6);
    backdrop-filter: blur(5px);
  }
  .modal-content {
    background: #142a3a;
    margin: 10% auto;
    padding: 30px 40px;
    border-radius: 12px;
    max-width: 400px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.7);
    color: white;
    position: relative;
    animation: fadeInUp 0.4s ease forwards;
  }
  .modal-content h2 {
    margin-top: 0;
    margin-bottom: 20px;
    color: #00ffd5;
    font-weight: 900;
    text-align: center;
  }
  .modal-content label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
  }
  .modal-content input[type="email"],
  .modal-content input[type="password"] {
    width: 100%;
    padding: 10px 14px;
    margin-bottom: 18px;
    border-radius: 6px;
    border: none;
    outline: none;
    font-size: 15px;
    box-shadow: inset 0 0 0 1px white;
  }
  .modal-content input::placeholder {
    color: #999;
  }
  .modal-content button.login-submit {
    background: #ffcb05;
    border: none;
    width: 100%;
    padding: 14px 0;
    font-weight: 700;
    font-size: 16px;
    border-radius: 30px;
    cursor: pointer;
    color: #000;
    box-shadow: 0 5px 15px rgba(255,203,5,0.7);
    transition: background 0.3s ease;
  }
  .modal-content button.login-submit:hover {
    background: #f2a900;
  }
  .modal-content .forgot-register {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    user-select: none;
  }
  .modal-content .forgot-register a {
    color: #00ffd5;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s ease;
    border: none;
    padding: 0;
  }
  .modal-content .forgot-register a:hover {
    color: #ffcb05;
  }
  .modal-content .register-btn {
    background: transparent;
    border: 2px solid #00ffd5;
    color: #00ffd5;
    padding: 6px 16px;
    border-radius: 30px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .modal-content .register-btn:hover {
    background: #00ffd5;
    color: #000;
  }
  .close-btn {
    position: absolute;
    top: 12px;
    right: 18px;
    font-size: 24px;
    font-weight: 900;
    color: #00ffd5;
    cursor: pointer;
    user-select: none;
  }
  .close-btn:hover {
    color: #ffcb05;
  }

  /* Animations */
  @keyframes fadeInUp {
    0% {opacity: 0; transform: translateY(40px);}
    100% {opacity: 1; transform: translateY(0);}
  }

  /* Responsive */
  @media (max-width: 480px) {
    header {
      padding: 12px 20px;
    }
    .hero {
      padding: 0 20px;
      text-align: center;
      margin-top: 100px;
    }
    .hero .short-logo {
      font-size: 36px;
      letter-spacing: 4px;
      margin-bottom: 8px;
    }
    .hero h1 {
      font-size: 1.8rem;
      margin-bottom: 16px;
    }
    .hero p {
      max-width: 100%;
      font-size: 1.1rem;
      margin-bottom: 25px;
    }
    .btn-primary {
      padding: 14px 30px;
      font-size: 1rem;
    }
    .modal-content {
      margin: 0;
      width: 100vw;
      height: 100vh;
      border-radius: 0;
      padding: 30px 20px;
      box-sizing: border-box;
      max-width: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .modal-content form {
      width: 100%;
      max-width: 360px;
    }
    .modal-content input[type="email"],
    .modal-content input[type="password"] {
      max-width: 100%;
      width: 100%;
    }
  }
</style>
</head>
<body>

<header>
  <div class="logo">DSRT</div>
  <button class="btn-login" id="openLoginBtn">Login</button>
</header>

<div class="hero-bg">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</div>

<section class="hero">
  <div class="short-logo">DSRT</div>
  <h1>Digital Smart Revise Technology</h1>
  <p>Menghadirkan solusi digital pintar untuk transformasi bisnis yang efisien dan inovatif.</p>
  <button class="btn-primary" onclick="alert('Fitur pelajari lebih lanjut akan dikembangkan')">Coba Sekarang</button>
</section>

<section class="features" aria-label="Fitur Unggulan DSRT">
  <h2>Fitur Unggulan Kami</h2>
  <div class="features-grid">
    <div class="feature-item">
      <div class="feature-icon">⚙️</div>
      <h3>Otomatisasi Cerdas</h3>
      <p>Mempermudah proses bisnis dengan teknologi AI yang otomatis dan efisien.</p>
    </div>
    <div class="feature-item">
      <div class="feature-icon">🔒</div>
      <h3>Keamanan Tinggi</h3>
      <p>Data dan privasi Anda dijaga dengan standar keamanan terbaik.</p>
    </div>
    <div class="feature-item">
      <div class="feature-icon">⚡</div>
      <h3>Performa Cepat</h3>
      <p>Respon sistem yang cepat dan stabil untuk kelancaran operasional.</p>
    </div>
    <div class="feature-item">
      <div class="feature-icon">📈</div>
      <h3>Analitik Mendalam</h3>
      <p>Insight bisnis yang akurat untuk pengambilan keputusan yang tepat.</p>
    </div>
  </div>
</section>

<footer>
  &copy; 2025 DSRT - Digital Smart Revise Technology. All rights reserved.
</footer>

<!-- Modal Login -->
<div id="loginModal" class="modal" aria-hidden="true" role="dialog" aria-labelledby="loginTitle">
  <div class="modal-content">
    <span class="close-btn" id="closeLoginBtn" aria-label="Close login form">&times;</span>
    <h2 id="loginTitle">Login ke DSRT</h2>
    <form id="loginForm">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="masukkan email" required />
      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder="masukkan password" required />
      <button type="submit" class="login-submit">Login</button>
    </form>
    <div class="forgot-register">
      <a href="#" id="forgotPasswordLink">Forgot password?</a>
      <button class="register-btn" id="registerBtn">Register</button>
    </div>
  </div>
</div>

<script>
  const openBtn = document.getElementById('openLoginBtn');
  const modal = document.getElementById('loginModal');
  const closeBtn = document.getElementById('closeLoginBtn');
  const loginForm = document.getElementById('loginForm');
  const forgotLink = document.getElementById('forgotPasswordLink');
  const registerBtn = document.getElementById('registerBtn');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
  });
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Login functionality belum tersedia');
  });

  forgotLink.addEventListener('click', e => {
    e.preventDefault();
    alert('Fitur lupa password akan dikembangkan');
  });

  registerBtn.addEventListener('click', () => {
    alert('Fitur registrasi akan dikembangkan');
  });
</script>

</body>
</html>
