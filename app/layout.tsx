/* eslint-disable @next/next/no-page-custom-font */
import '@styles/layout.scss';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { getCart } from '@shopify/index';
import { ensureStartsWith } from '@shopify/utils';
import { CartProvider } from 'library/components/template/cart/cart-context';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR
    ? ensureStartsWith(TWITTER_CREATOR, '@')
    : undefined;
const twitterSite = TWITTER_SITE
    ? ensureStartsWith(TWITTER_SITE, 'https://')
    : undefined;

export const metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: SITE_NAME!,
        template: `%s | ${SITE_NAME}`,
    },
    robots: {
        follow: true,
        index: true,
    },
    ...(twitterCreator &&
        twitterSite && {
            twitter: {
                card: 'summary_large_image',
                creator: twitterCreator,
                site: twitterSite,
            },
        }),
};

// eslint-disable-next-line require-await
export default async function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    const cartId = cookies().get('cartId')?.value;
    // Instantiate cart (from modal)
    // Don't await the fetch, pass the Promise to the context provider
    const cart = getCart(cartId);

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="./favicon.ico" key="" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <CartProvider cartPromise={cart}>{children}</CartProvider>
            </body>
        </html>
    );
}
