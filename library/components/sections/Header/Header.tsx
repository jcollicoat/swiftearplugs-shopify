'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { FC, useCallback, useEffect, useState } from 'react';
import { Logo } from '@components/Logo/Logo';
import styles from './Header.module.scss';

export const Header: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const calculate = useCallback(() => {
        setIsScrolled(window.scrollY > 10);
    }, []);

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
            <div
                className={classNames(
                    styles.bar,
                    isScrolled && styles.isScrolled,
                )}
            >
                <Link href="/">
                    <Logo />
                </Link>
            </div>
        </header>
    );
};
