import Image from 'next/image';
import { FC } from 'react';
import { Emoji } from '@Generic/Emoji/Emoji';
import casePurple from 'public/case-lilac-purple.png';
import earplugPurple from 'public/earplug-lilac-purple-1.png';
import earplugBlack from 'public/earplug-matte-black-1.png';
import earplugRose from 'public/earplug-rose-gold-2.png';
import imageSmallBlur from 'public/hero-1-blur.jpg';
import imageSmall from 'public/hero-1.jpg';
import imageLargeBlur from 'public/hero-2-blur.jpg';
import imageLarge from 'public/hero-2.jpg';
import styles from './Hero.module.scss';

export const Hero: FC = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.content}>
                <Image
                    src={casePurple.src}
                    width={150}
                    height={150}
                    placeholder="empty"
                    alt=""
                    className={styles.casePurple}
                />
                <Image
                    src={earplugPurple.src}
                    width={50}
                    height={50}
                    placeholder="empty"
                    alt=""
                    className={styles.earplugPurple}
                />
                <Image
                    src={earplugBlack.src}
                    width={50}
                    height={50}
                    placeholder="empty"
                    alt=""
                    className={styles.earplugBlack}
                />
                <Image
                    src={earplugRose.src}
                    width={50}
                    height={50}
                    placeholder="empty"
                    alt=""
                    className={styles.earplugRose}
                />
                <h1>Meet the last earplugs you will ever need.</h1>
                <h2>
                    <Emoji>💃</Emoji> Steal the show <Emoji>✨</Emoji>
                </h2>
                <p>
                    <b>
                        Permanent hearing damage can occur in{' '}
                        <a
                            href="https://healthed.govt.nz/products/noise-around-the-home"
                            target="_blank"
                        >
                            as little as 2 minutes.
                        </a>
                    </b>
                    Protect your ears in style — Swift&nbsp;Earplugs deliver
                    crystal-clear sound, blocking noise while keeping you
                    comfortable and stylish at every event.
                </p>
            </div>
            <div className={styles.image}>
                <Image
                    src={imageSmall.src}
                    blurDataURL={imageSmallBlur.src}
                    sizes="(max-width: 799px) 100vw, 60vw"
                    placeholder="blur"
                    alt=""
                    fill
                    className={styles.imageSmall}
                />
                <Image
                    src={imageLarge.src}
                    blurDataURL={imageLargeBlur.src}
                    sizes="(max-width: 799px) 100vw, 60vw"
                    placeholder="blur"
                    alt=""
                    fill
                    className={styles.imageLarge}
                />
            </div>
        </header>
    );
};
