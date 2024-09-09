import { Cart } from '@components/Cart/Cart';
import { ContentSection } from '@components/ContentSection/ContentSection';
import { ContentSectionList } from '@components/ContentSectionList/ContentSectionList';
import { Features } from '@components/Features/Features';
import { Footer } from '@components/Footer/Footer';
import { Hero } from '@components/Hero/Hero';
import { IconContent } from '@components/IconContent/IconContent';
import { StickyScroller } from '@components/StickyScroller/StickyScroller';
import { WhyChoose } from '@components/WhyChoose/WhyChoose';
import imageOneBlur from 'public/swift-content-1-blur.jpg';
import imageOne from 'public/swift-content-1.jpg';

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
                    <ContentSection
                        heading="Feel the music, not noise"
                        content={[
                            {
                                image: imageOne.src,
                                heading: 'Up to 17dB noise reduction',
                                content:
                                    'Jump, dance, and feel free. Our earplugs are crafted to fit securely, ensuring they stay in place as you move with the music.',
                            },
                            {
                                image: imageOne.src,
                                heading: 'Long-lasting protection',
                                content:
                                    'Crafted from durable materials, Swift Earplugs protect your hearing during countless nights out – because the best nights should never end in ringing ears.',
                            },
                        ]}
                    />
                    <ContentSection
                        reversed
                        heading="Perfect on any night out"
                        content={[
                            {
                                image: imageOne.src,
                                heading: 'For any occasion',
                                content:
                                    'Whether you’re at a concert, a festival, or a club, Swift Earplugs are your best companion, ensuring that you are enjoying the music while protecting your hearing.',
                            },
                            {
                                image: imageOne.src,
                                heading: 'Compact and portable',
                                content:
                                    'Each pair of Swift Earplugs comes with a sleek, portable carrying case, making it easy to take them wherever the music takes you.',
                            },
                        ]}
                    />
                </StickyScroller>
                <ContentSectionList
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
                </ContentSectionList>
                <Features />
                <WhyChoose />
            </main>
            <Footer />
            <Cart />
        </>
    );
}
