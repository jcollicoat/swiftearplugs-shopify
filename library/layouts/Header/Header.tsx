'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { Logo } from '@components/Logo/Logo';
import { CartButton } from './CartButton/CartButton';
import { CartModal } from './CartModal/CartModal';
import styles from './Header.module.scss';
import { useHeaderScroll } from './useHeaderScroll';

export const Header: FC = () => {
    const { showBar } = useHeaderScroll();

    return (
        <header className={styles.header}>
            <div className={classNames(styles.bar, showBar && styles.show)}>
                <Link href="/" className={styles.logo}>
                    <Logo />
                </Link>
                <nav className={styles.menu}>
                    <CartButton />
                </nav>
            </div>
            <CartModal />
        </header>
    );
};
