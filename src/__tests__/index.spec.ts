import { injectScript, getScripts, removeScript } from '../'

describe('scripts', () => {
  describe('injectScript', () => {
    it('makes a POST request to add a script tag', async () => {
      const mockFetch = jest.fn().mockResolvedValue('foo')
      const result = await injectScript(
        mockFetch,
        'access_token',
        'my_shop',
        'script_url',
      )
      const expectedAPIUri =
        'https://my_shop/admin/api/2020-04/script_tags.json'
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

  describe('getScripts', () => {
    it('makes a GET request to retrieve all active script tags', async () => {
      const mockFetch = jest.fn().mockResolvedValue('foo')
      const result = await getScripts(
        mockFetch,
        'access_token',
        'my_shop',
        'script_url',
      )
      const expectedAPIUri =
        'https://my_shop/admin/api/2020-04/script_tags.json'
      const expectedOptions = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': 'access_token',
        },
      }
      expect(result).toEqual('foo')
      expect(mockFetch).toHaveBeenCalledWith(expectedAPIUri, expectedOptions)
    })
  })

  describe('removeScript', () => {
    it('makes a DELETE request to remove a specific script', async () => {
      const mockFetch = jest.fn().mockResolvedValue('foo')
      const result = await removeScript(
        mockFetch,
        'access_token',
        'my_shop',
        'foobar',
      )
      const expectedAPIUri =
        'https://my_shop/admin/api/2020-04/script_tags/foobar.json'
      const expectedOptions = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': 'access_token',
        },
        method: 'DELETE',
      }
      expect(result).toEqual('foo')
      expect(mockFetch).toHaveBeenCalledWith(expectedAPIUri, expectedOptions)
    })
  })
})
