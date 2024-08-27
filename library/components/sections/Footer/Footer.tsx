import Image from 'next/image';
import { FC } from 'react';
import { Logo } from 'library/components/generics/Logo/Logo';
import casePurple from 'public/case-lilac-purple.png';
import caseBlack from 'public/case-matte-black.png';
import caseRose from 'public/case-rose-gold.png';
import earplugPurple1 from 'public/earplug-lilac-purple-1.png';
import earplugPurple2 from 'public/earplug-lilac-purple-2.png';
import earplugBlack1 from 'public/earplug-matte-black-1.png';
import earplugBlack2 from 'public/earplug-matte-black-2.png';
import earplugRose1 from 'public/earplug-rose-gold-1.png';
import earplugRose2 from 'public/earplug-rose-gold-2.png';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <Logo />
            <Image
                src={casePurple.src}
                width={150}
                height={150}
                placeholder="empty"
                alt=""
                className={styles.casePurple}
            />
            <Image
                src={caseBlack.src}
                width={150}
                height={150}
                placeholder="empty"
                alt=""
                className={styles.caseBlack}
            />
            <Image
                src={caseRose.src}
                width={150}
                height={150}
                placeholder="empty"
                alt=""
                className={styles.caseRose}
            />
            <Image
                src={earplugPurple1.src}
                width={50}
                height={50}
                placeholder="empty"
                alt=""
                className={styles.earplugPurple1}
            />
            <Image
                src={earplugPurple2.src}
                width={50}
                height={50}
                placeholder="empty"
                alt=""
                className={styles.earplugPurple2}
            />
            <Image
                src={earplugPurple1.src}
                width={50}
                height={50}
                placeholder="empty"
                alt=""
                className={styles.earplugPurple3}
            />
            <Image
                src={earplugBlack1.src}
                width={50}
                height={50}
                placeholder="empty"
                alt=""
                className={styles.earplugBlack1}
            />
            <Image
                src={earplugBlack2.src}
                width={50}
                height={50}
                placeholder="empty"
                alt=""
                className={styles.earplugBlack2}
            />
            <Image
                src={earplugBlack2.src}
                width={50}
                height={50}
                placeholder="empty"
                alt=""
                className={styles.earplugBlack3}
            />
            <Image
                src={earplugBlack1.src}
                width={50}
                height={50}
                placeholder="empty"
                alt=""
                className={styles.earplugBlack4}
            />
            <Image
                src={earplugRose1.src}
                width={50}
                height={50}
                placeholder="empty"
                alt=""
                className={styles.earplugRose1}
            />
            <Image
                src={earplugRose2.src}
                width={50}
                height={50}
                placeholder="empty"
                alt=""
                className={styles.earplugRose2}
            />
            <Image
                src={earplugRose2.src}
                width={50}
                height={50}
                placeholder="empty"
                alt=""
                className={styles.earplugRose3}
            />
        </footer>
    );
};
