import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Navbar from '../components/Navbar';
import FeaturePanel from '../components/FeaturePanel';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Dashboard</h1>
        <p>Welcome, {user.email}</p>
        <FeaturePanel />
      </main>
    </div>
  );
}
