import { Cart } from '@components/Cart/Cart';
import { Features } from '@components/Features/Features';
import { Footer } from '@components/Footer/Footer';
import { Hero } from '@components/Hero/Hero';
import { IconContent } from '@components/IconContent/IconContent';
import { ImageContent } from '@components/ImageContent/ImageContent';
import { StickyScroller } from '@components/StickyScroller/StickyScroller';
import { WhyChoose } from '@components/WhyChoose/WhyChoose';
import imageOneBlur from 'public/swift-content-1-blur.jpg';
import imageOne from 'public/swift-content-1.jpg';
import imageTwoBlur from 'public/swift-content-2-blur.jpg';
import imageTwo from 'public/swift-content-2.jpg';

export const metadata = {
    description: 'Swift Earplugs bring you closer to the music you love.',
    openGraph: {
        type: 'website',
    },
};

export default function HomePage() {
    return (
        <>
            <main>
                <Hero />
                <StickyScroller>
                    <ImageContent
                        heading="Designed for comfort and style"
                        image={imageOne.src}
                        imageBlur={imageOneBlur.src}
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
                        imageBlur={imageTwoBlur.src}
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
                <Features />
                <WhyChoose />
            </main>
            <Footer />
            <Cart />
        </>
    );
}
