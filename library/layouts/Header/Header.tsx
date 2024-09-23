'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { Logo } from '@components/Logo/Logo';
import { useCart } from '@shopify/cart/cart-context';
import { CartButton } from './CartButton/CartButton';
import styles from './Header.module.scss';
import { useHeaderScroll } from './useHeaderScroll';

export const Header: FC = () => {
    const { showBar } = useHeaderScroll();

    const { isCartOpen } = useCart();

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
            <div
                className={classNames(
                    styles.modalBackground,
                    isCartOpen && styles.open,
                )}
            >
                <div className={styles.modal}></div>
            </div>
        </header>
    );
};
