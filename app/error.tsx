'use client';

import { Logo } from 'components/generics/Logo/Logo';
import styles from 'styles/error.module.scss';

export default function Error({ reset }: { reset: () => void }) {
    return (
        <div className={styles.error}>
            <div>
                <Logo />
                <h2>Oh no!</h2>
                <p>
                    There was an issue with our storefront. This could be a
                    temporary issue, please try your action again.
                </p>
                <button onClick={() => reset()}>Try Again</button>
            </div>
        </div>
    );
}
