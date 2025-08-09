import { useState } from 'react';

export default function FeaturePanel() {
  const [result, setResult] = useState(null);

  const handleRunFeature = async () => {
    const res = await fetch('/api/dsrt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        endpoint: 'enhance-image',
        data: { imageUrl: 'https://example.com/image.jpg' }
      })
    });
    const json = await res.json();
    setResult(json);
  };

  return (
    <div>
      <button onClick={handleRunFeature}>Run DSRT Feature</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}
