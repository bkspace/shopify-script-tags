# shopify-script-tags 📜

A small library to inject script tags into Shopify storefront(s).

## Info

All Shopify stores are built differently and asking users of your Shopify application to install custom UI components is not always feasible. One alternative is to inject a script tag `<script>stuffs</script>` into the store front.

### Requirements

You will require an access token with the `write_script_tags` scope included.

### Where

This is ideally done when a Shopify store has authenticated with your application. For example, you will have the required shop context, access_token in your `afterAuth` hook when using `createShopifyAuth`.

### Lifetime

The script tag will live on the storefront(s) for as long as said store is authenticated with your application. Once a store removes your application, the injected script tag is removed. Installed on application auth, removed on application removal..nice!

## Usage

```yarn install shopify-script-tags```

```import { injectScript } from 'shopify-script-tags'```

```
await injectScript(
    fetch,
    accessToken,
    shop,
    'https://example-url.com/script.js'
)
```

```
await getScripts(
    fetch,
    accessToken,
    shop,
)
```

```
await deleteScript(
    fetch,
    accessToken,
    shop,
    '1234',
)
```

This function returns a response. It is left to the consumer to handle any possible errors. I expect this library will handle both fetch and a gql client in the near future.

## Development
```yarn build```

```yarn format```

```yarn lint```

```yarn test```
