import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) alert(error.message);
    else alert('Check your email for the login link!');
  };

  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>Send Magic Link</button>
      </main>
    </div>
  );
}
