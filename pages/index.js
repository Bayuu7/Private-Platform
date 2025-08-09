import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to DSRT Studio</h1>
        <p>Integrasi Next.js + Supabase + DSRT API</p>
        <Link href="/login">Login</Link>
      </main>
    </div>
  );
}
