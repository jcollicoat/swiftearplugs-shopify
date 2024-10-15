import { useCallback, useEffect, useRef } from 'react';

export const useClickOutside = (active: boolean, action: () => void) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const onClickOutside = useCallback(
        (event: MouseEvent) => {
            if (
                active &&
                modalRef.current &&
                !modalRef.current.contains(event.target as HTMLDivElement)
            ) {
                action();
            }
        },
        [action, active],
    );

    useEffect(() => {
        document.addEventListener('mousedown', onClickOutside);

        return () => {
            document.removeEventListener('mousedown', onClickOutside);
        };
    }, [onClickOutside]);

    return { modalRef };
};
