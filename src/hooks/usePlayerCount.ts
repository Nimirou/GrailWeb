import { useState, useEffect } from 'react';

const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1064B3BlMIntIgXDHZBf2JmqqHSiSun18FYTakwLgcaU/gviz/tq?tqx=out:csv&gid=0';

export const usePlayerCount = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayerCount = async () => {
      try {
        const response = await fetch(SPREADSHEET_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch spreadsheet');
        }

        const csvText = await response.text();
        const lines = csvText.split('\n');

        // Count lines that have TRUE (confirmed players)
        // Skip header rows and count only confirmed registrations
        let confirmedCount = 0;

        for (const line of lines) {
          // Check if line contains TRUE (confirmed registration)
          if (line.includes('TRUE')) {
            confirmedCount++;
          }
        }

        setCount(confirmedCount);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
        // Fallback to a default value on error
        setCount(31);
      }
    };

    fetchPlayerCount();

    // Refresh every 5 minutes
    const interval = setInterval(fetchPlayerCount, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return { count, loading, error };
};
