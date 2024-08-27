import { FC } from 'react';
import { useFormStatus } from 'react-dom';
import { Icon } from 'library/components/generics/Icon/Icon';
import styles from '../Cart.module.scss';

interface Props {
    checkoutDisabled: boolean;
}

export const CartCheckout: FC<Props> = ({ checkoutDisabled }) => {
    const { pending } = useFormStatus();

    const disabled = pending || checkoutDisabled;

    return (
        <button
            className={styles.checkout}
            disabled={disabled}
            aria-disabled={disabled}
        >
            <span>Checkout</span>
            <Icon icon="Arrow" />
        </button>
    );
};
