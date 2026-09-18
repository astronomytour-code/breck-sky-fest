export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const hostname = url.hostname.toLowerCase();

    const alternateHost =
      hostname === 'brecksky.com' ||
      hostname === 'www.brecksky.com' ||
      hostname === 'www.breckskyfest.com';

    const insecureCanonical =
      hostname === 'breckskyfest.com' && url.protocol !== 'https:';

    if (alternateHost || insecureCanonical) {
      url.protocol = 'https:';
      url.hostname = 'breckskyfest.com';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
