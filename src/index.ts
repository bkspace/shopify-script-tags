export const injectScript = async (
  fetch: (url: string, opts: any) => Promise<Response>,
  accessToken: string,
  shop: string,
  scriptUrl: string,
): Promise<Response> => {
  const createScriptTagUrl =
    'https://' + shop + '/admin/api/2020-04/script_tags.json'
  const shopRequestHeaders = {
    'X-Shopify-Access-Token': accessToken,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  const scriptTagBody = {
    script_tag: {
      event: 'onload',
      src: scriptUrl,
    },
  }

  return await fetch(createScriptTagUrl, {
    method: 'POST',
    headers: shopRequestHeaders,
    body: JSON.stringify(scriptTagBody),
  })
}
