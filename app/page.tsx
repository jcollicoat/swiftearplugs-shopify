import { Hero } from 'components/layouts/Hero/Hero';
// import { Carousel } from 'components/template/carousel';
// import { ThreeItemGrid } from 'components/template/grid/three-items';
// import Footer from 'components/template/layout/footer';

export const metadata = {
    description: 'Swift Earplugs bring you closer to the music you love.',
    openGraph: {
        type: 'website',
    },
};

export default function HomePage() {
    return (
        <>
            <Hero />
            {/* <ThreeItemGrid /> */}
            {/* <Carousel /> */}
            {/* <Footer /> */}
        </>
    );
}
