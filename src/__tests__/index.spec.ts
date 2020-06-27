import { injectScript } from '../'

describe('injectScript', () => {
  it('makes a POST request to add a script tag', async () => {
    const mockFetch = jest.fn().mockResolvedValue('foo')
    const result = await injectScript(
      mockFetch,
      'access_token',
      'my_shop',
      'script_url',
    )

    const expectedAPIUri = 'https://my_shop/admin/api/2020-04/script_tags.json'
    const expectedOptions = {
      body: '{"script_tag":{"event":"onload","src":"script_url"}}',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': 'access_token',
      },
      method: 'POST',
    }
    expect(result).toEqual('foo')
    expect(mockFetch).toHaveBeenCalledWith(expectedAPIUri, expectedOptions)
  })
})
