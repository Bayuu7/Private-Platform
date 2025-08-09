import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      background: '#222',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Link href="/" style={{ color: '#fff', fontWeight: 'bold' }}>
        DSRT Studio
      </Link>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/login" style={{ color: '#fff' }}>Login</Link>
        <Link href="/dashboard" style={{ color: '#fff' }}>Dashboard</Link>
      </div>
    </nav>
  );
}
