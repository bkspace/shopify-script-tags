export declare const injectScript: (fetch: (url: string, opts: any) => Promise<Response>, accessToken: string, shop: string, scriptUrl: string) => Promise<Response>;
export declare const getScripts: (fetch: (url: string, opts: any) => Promise<Response>, accessToken: string, shop: string) => Promise<Response>;
export declare const removeScript: (fetch: (url: string, opts: any) => Promise<Response>, accessToken: string, shop: string, scriptId: string) => Promise<Response>;
