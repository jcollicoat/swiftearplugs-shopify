import { useState, useCallback, useEffect } from 'react';

export const useHeaderScroll = () => {
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

    return { showBar };
};
