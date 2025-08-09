import { useState } from 'react';

export default function FeaturePanel() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRunFeature = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch('/api/dsrt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          endpoint: 'enhance-image',
          data: { imageUrl: 'https://example.com/image.jpg' }
        }),
      });
      if (!res.ok) {
        throw new Error('Request failed dengan status ' + res.status);
      }
      const json = await res.json();
      setResult(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleRunFeature}
        disabled={loading}
        className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Run DSRT Feature'}
      </button>

      {error && <p className="mt-3 text-red-400">Error: {error}</p>}

      {result && (
        <pre className="mt-3 bg-gray-800 p-4 rounded text-sm overflow-auto max-h-60">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
