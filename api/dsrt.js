export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { endpoint, data } = req.body;

  try {
    const response = await fetch(`${process.env.DSRT_API_BASE}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DSRT_API_TOKEN}`
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    res.status(response.status).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'DSRT API request failed' });
  }
}
