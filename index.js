export default {
  async fetch(request, env) {
    if (request.method === 'POST') {
      // KI-Anfragen verarbeiten
      return new Response('Dashboard API');
    }
    return new Response('KI-Dashboard');
  },
  async scheduled(event, env, ctx) {
    // Automatische Aktualisierung
    console.log('Dashboard wird aktualisiert...');
  }
};
