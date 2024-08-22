import Image from 'next/image';
import { FC } from 'react';
import { Logo } from 'components/generics/Logo/Logo';
import caseImage from 'public/case-matte-black.png';
import earplugLeft from 'public/earplug-lilac-purple-1.png';
import earplugRight from 'public/earplug-rose-gold-2.png';
import imageBlur from 'public/swift-hero-1-blur.jpg';
import image from 'public/swift-hero-1.jpg';
import styles from './Hero.module.scss';

export const Hero: FC = () => {
    return (
        <header className={styles.wrapper}>
            <Logo />
            <div className={styles.image}>
                <Image
                    src={image.src}
                    blurDataURL={imageBlur.src}
                    placeholder="blur"
                    alt=""
                    fill
                />
            </div>
            <div className={styles.content}>
                <Image
                    src={caseImage.src}
                    width={150}
                    height={150}
                    placeholder="empty"
                    alt=""
                    className={styles.case}
                />
                <Image
                    src={earplugLeft.src}
                    width={50}
                    height={50}
                    placeholder="empty"
                    alt=""
                    className={styles.earplugLeft}
                />
                <Image
                    src={earplugRight.src}
                    width={50}
                    height={50}
                    placeholder="empty"
                    alt=""
                    className={styles.earplugRight}
                />
                <h1>Dance, laugh, and live loudly.</h1>
                <h2>Swift&nbsp;Earplugs have you covered.</h2>
                <p>
                    Dive into the music with our high-fidelity earplugs designed
                    to deliver crystal clear sound, while protecting your
                    hearing for many years to come.
                </p>
            </div>
        </header>
    );
};
