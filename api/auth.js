// api/auth.js (contoh sederhana)
import { verifyUser, createUser } from '../../utils/authHelpers.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, action } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email dan password wajib diisi' });

    try {
      if (action === 'login') {
        const user = await verifyUser(email, password);
        if (!user) return res.status(401).json({ error: 'Email atau password salah' });
        // Return token/session etc
        return res.status(200).json({ message: 'Login berhasil', user });
      }
      else if (action === 'register') {
        const user = await createUser(email, password);
        return res.status(201).json({ message: 'User berhasil didaftarkan', user });
      } else {
        return res.status(400).json({ error: 'Action tidak valid' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method tidak diizinkan' });
  }
}
