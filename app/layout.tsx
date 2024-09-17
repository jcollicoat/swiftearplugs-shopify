/* eslint-disable @next/next/no-page-custom-font */
import '@styles/layout.scss';
import { cookies } from 'next/headers';
import Script from 'next/script';
import { ReactNode } from 'react';
import { Cart } from '@components/Cart/Cart';
import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/sections/Header/Header';
import { CartProvider } from '@shopify/cart/cart-context';
import { getCart } from '@shopify/index';
import { ensureStartsWith } from '@shopify/utils';

const {
    FACEBOOK_PIXEL_ID,
    GOOGLE_TAG_ID,
    TWITTER_CREATOR,
    TWITTER_SITE,
    SITE_NAME,
} = process.env;
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
                <CartProvider cartPromise={cart}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    <Cart />
                </CartProvider>
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
                />
                <Script id="gtag-track" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GOOGLE_TAG_ID}');
                    `}
                </Script>
                <Script id="facebook-pixel" strategy="afterInteractive">
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '${FACEBOOK_PIXEL_ID}');
                        fbq('track', 'PageView');
                    `}
                </Script>
                <noscript>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        alt=""
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
                    />
                </noscript>
            </body>
        </html>
    );
}
