// Helper to get correct asset path for both dev and production (GitHub Pages)
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
