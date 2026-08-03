export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Only handle /portfolio paths
    if (!url.pathname.startsWith("/portfolio")) {
      return fetch(request);
    }

    // Rewrite to portfolio worker origin
    const targetUrl = new URL(url.pathname, "https://p0rtf0li0-spac3.machin3.workers.dev");
    targetUrl.search = url.search;

    const proxyRequest = new Request(targetUrl.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });

    const response = await fetch(proxyRequest);

    // Return response with CORS headers preserved
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  },
};
