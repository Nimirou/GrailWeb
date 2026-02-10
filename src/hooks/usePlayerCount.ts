import { useState, useEffect } from 'react';

const SPREADSHEET_URL = 'https://docs.google.com/spreadsheets/d/1064B3BlMIntIgXDHZBf2JmqqHSiSun18FYTakwLgcaU/gviz/tq?tqx=out:csv&gid=0';

// Parse CSV line handling quoted values
const parseCSVLine = (line: string): string[] => {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());

  return result;
};

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

        // Count filled cells in column D (index 3) starting from row 28 (index 27)
        let filledCount = 0;
        const startRow = 27; // 0-indexed, so row 28 = index 27

        for (let i = startRow; i < lines.length; i++) {
          const columns = parseCSVLine(lines[i]);
          const columnD = columns[3]; // Column D = index 3

          // Check if column D has a non-empty value
          if (columnD && columnD.trim() !== '' && columnD.trim() !== '""') {
            filledCount++;
          }
        }

        setCount(filledCount);
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
