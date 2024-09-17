import { IconContent } from '@components/IconContent/IconContent';
import { ContentSection } from '@layouts/ContentSection/ContentSection';
import { ContentSectionList } from '@layouts/ContentSectionList/ContentSectionList';
import { Hero } from '@layouts/Hero/Hero';
import { StickyScroller } from '@layouts/StickyScroller/StickyScroller';
import { WhyChoose } from '@layouts/WhyChoose/WhyChoose';
import anyNightOut from 'public/any-night-out.jpg';
import comfortAndStyle from 'public/comfort-and-style.jpg';
import feelTheMusic from 'public/feel-the-music.jpg';
import cases from 'public/lockup-cases.png';
import circle from 'public/lockup-earplugs-circle.png';
import earplugs from 'public/lockup-earplugs.png';
import pink from 'public/lockup-pink.png';

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
            <StickyScroller>
                <ContentSection
                    heading="Feel the music, not noise"
                    image={feelTheMusic.src}
                    content={[
                        {
                            image: circle.src,
                            heading: 'Up to 17dB noise reduction',
                            content:
                                'Jump, dance, and feel free. Our earplugs are crafted to fit securely, ensuring they stay in place as you move with the music.',
                        },
                        {
                            image: pink.src,
                            heading: 'Long-lasting protection',
                            content:
                                'Crafted from durable materials, Swift Earplugs protect your hearing during countless nights out – because the best nights should never end in ringing ears.',
                        },
                    ]}
                />
                <ContentSection
                    reversed
                    heading="Perfect on any night out"
                    image={anyNightOut.src}
                    content={[
                        {
                            image: earplugs.src,
                            heading: 'For any occasion',
                            content:
                                'Whether you’re at a concert, a festival, or a club, Swift Earplugs are your best companion, ensuring that you are enjoying the music while protecting your hearing.',
                        },
                        {
                            image: cases.src,
                            heading: 'Compact and portable',
                            content:
                                'Each pair of Swift Earplugs comes with a sleek, portable carrying case, making it easy to take them wherever the music takes you.',
                        },
                    ]}
                />
            </StickyScroller>
            <ContentSectionList
                heading="Designed for comfort and style"
                image={comfortAndStyle.src}
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
            <WhyChoose />
        </>
    );
}
