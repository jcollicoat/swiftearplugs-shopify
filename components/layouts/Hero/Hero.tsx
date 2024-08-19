import Image from 'next/image';
import { FC } from 'react';
import { Logo } from 'components/generics/Logo/Logo';
import image from 'public/swift-hero-1.jpg';
import styles from './Hero.module.scss';

export const Hero: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Logo />
            <div className={styles.image}>
                <Image src={image} placeholder="empty" alt="" fill />
            </div>
            <div className={styles.content}>
                <h1>Dance, laugh, and live loudly.</h1>
                <h2>Swift&nbsp;Earplugs have you covered.</h2>
                <p>
                    Dive into the music with our high-fidelity earplugs designed
                    to deliver crystal clear sound, while protecting your
                    hearing for many years to come.
                </p>
            </div>
        </div>
    );
};
