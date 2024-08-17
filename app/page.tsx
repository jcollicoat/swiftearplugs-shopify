import imageOne from '@images/austin-distel-p9aNTv6wl5I-unsplash.jpg';
import imageTwo from '@images/pexels-maumascaro-1154189.jpg';
import { IconContent } from 'components/generics/IconContent/IconContent';
import { ImageContent } from 'components/generics/ImageContent/ImageContent';
import { ProductTile } from 'components/generics/ProductTile/ProductTile';
import { Hero } from 'components/layouts/Hero/Hero';
import { StickyScroller } from 'components/layouts/StickyScroller/StickyScroller';
import { WhyChoose } from 'components/layouts/WhyChoose/WhyChoose';
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
            <StickyScroller stickyComponent={ProductTile}>
                <ImageContent
                    heading="Designed for comfort and style"
                    image={imageOne.src}
                    position="25% 80%"
                >
                    <IconContent
                        icon="Earplug"
                        heading="A secure fit that moves with you"
                        content="Jump, dance, and feel free. Our earplugs are
                                crafted to fit securely, ensuring they stay in
                                place as you move with the music."
                    />
                    <IconContent
                        icon="Colors"
                        heading="A pop of colour to suit your style"
                        content="Select from Rose Gold, Lilac Purple, or Matte
                                Black to accessorise your outfit. Swift Earplugs
                                aren’t just functional—they’re fashionable."
                    />
                    <IconContent
                        icon="Recycle"
                        heading="Re-usable and eco-friendly"
                        content="Easy to clean and designed for repeated use.
                                Party with peace of mind, knowing your earplugs
                                are environmentally friendly and built to last
                                through countless nights out."
                    />
                </ImageContent>
                <ImageContent
                    heading="Perfect on any night out"
                    image={imageTwo.src}
                    position="25% 100%"
                >
                    <IconContent
                        icon="Guitar"
                        heading="For any occasion"
                        content="Whether you’re at a concert, a festival, or a
                                club, Swift Earplugs are your best companion,
                                ensuring that you are enjoying the music while
                                protecting your hearing."
                    />
                    <IconContent
                        icon="Pod"
                        heading="Compact and portable"
                        content="Each pair of Swift Earplugs comes with a sleek,
                                portable carrying case, making it easy to take
                                them wherever the music takes you."
                    />
                </ImageContent>
            </StickyScroller>
            <WhyChoose />
            {/* <ThreeItemGrid /> */}
            {/* <Carousel /> */}
            {/* <Footer /> */}
        </>
    );
}
