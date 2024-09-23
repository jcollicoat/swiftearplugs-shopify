'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { FC, useCallback, useEffect, useState } from 'react';
import { Logo } from '@components/Logo/Logo';
import styles from './Header.module.scss';

export const Header: FC = () => {
    const [showBar, setShowBar] = useState(false);

    const calculate = useCallback(() => {
        if (showBar) {
            setShowBar(true);
        } else {
            setShowBar(window.scrollY > 10);
        }
    }, [showBar]);

    useEffect(() => {
        calculate();

        window.addEventListener('scroll', () => {
            calculate();
        });

        return () => {
            window.removeEventListener('scroll', () => {
                return;
            });
        };
    }, [calculate]);

    return (
        <header className={styles.header}>
            <div className={classNames(styles.bar, showBar && styles.show)}>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
        </header>
    );
};
