import { Hero } from 'components/layouts/Hero/Hero';
import { Carousel } from 'components/template/carousel';
import { ThreeItemGrid } from 'components/template/grid/three-items';
import Footer from 'components/template/layout/footer';

export const metadata = {
    description:
        'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
    openGraph: {
        type: 'website',
    },
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <ThreeItemGrid />
            <Carousel />
            <Footer />
        </>
    );
}
