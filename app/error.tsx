'use client';

import '@styles/error.scss';
import { Logo } from '@components/generics/Logo/Logo';

export default function Error({ reset }: { reset: () => void }) {
    return (
        <div className="error-page">
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
