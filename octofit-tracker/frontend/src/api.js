// Helper to get the API base URL dynamically
export function getApiBaseUrl() {
  const codespaceName = process.env.CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api/`;
  }
  return 'http://localhost:8000/api/';
}

export async function fetchActivities() {
  const url = getApiBaseUrl() + 'activities/';
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch activities');
  return response.json();
}
