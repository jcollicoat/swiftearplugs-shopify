import { MetadataRoute } from 'next';
import { getCollections, getPages, getProducts } from 'shopify/index';
import { validateEnvironmentVariables } from 'shopify/utils';

type Route = {
    url: string;
    lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    validateEnvironmentVariables();

    const routesMap = [''].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
    }));

    // eslint-disable-next-line promise/prefer-await-to-then
    const collectionsPromise = getCollections().then((collections) =>
        collections.map((collection) => ({
            url: `${baseUrl}${collection.path}`,
            lastModified: collection.updatedAt,
        })),
    );

    // eslint-disable-next-line promise/prefer-await-to-then
    const productsPromise = getProducts({}).then((products) =>
        products.map((product) => ({
            url: `${baseUrl}/product/${product.handle}`,
            lastModified: product.updatedAt,
        })),
    );

    // eslint-disable-next-line promise/prefer-await-to-then
    const pagesPromise = getPages().then((pages) =>
        pages.map((page) => ({
            url: `${baseUrl}/${page.handle}`,
            lastModified: page.updatedAt,
        })),
    );

    let fetchedRoutes: Route[] = [];

    try {
        fetchedRoutes = (
            await Promise.all([
                collectionsPromise,
                productsPromise,
                pagesPromise,
            ])
        ).flat();
    } catch (error) {
        throw JSON.stringify(error, null, 2);
    }

    return [...routesMap, ...fetchedRoutes];
}
