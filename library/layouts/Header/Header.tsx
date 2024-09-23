'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { FC, useCallback, useState } from 'react';
import { Icon } from '@components/Icon/Icon';
import { Logo } from '@components/Logo/Logo';
import styles from './Header.module.scss';
import { useHeaderScroll } from './useHeaderScroll';

export const Header: FC = () => {
    const { showBar } = useHeaderScroll();
    const [cartOpen, setCartOpen] = useState(false);
    const toggleCart = useCallback(() => setCartOpen(!cartOpen), [cartOpen]);

    return (
        <header className={styles.header}>
            <div className={classNames(styles.bar, showBar && styles.show)}>
                <Link href="/" className={styles.logo}>
                    <Logo />
                </Link>
                <button className={styles.cart} onClick={toggleCart}>
                    <Icon icon="Cart" />
                    Cart
                </button>
            </div>
            <div
                className={classNames(
                    styles.modalBackground,
                    cartOpen && styles.open,
                )}
            >
                <div className={styles.modal}></div>
            </div>
        </header>
    );
};
