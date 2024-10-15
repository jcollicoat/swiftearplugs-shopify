import { FC } from 'react';
import { Cost } from '@Generic/Cost/Cost';
import { Icon } from '@Generic/Icon/Icon';
import { redirectToCheckout } from '@shopify/cart/actions';
import { useCart } from '@shopify/cart/cart-context';
import styles from './Summary.module.scss';

export const Summary: FC = () => {
    const { cart } = useCart();

    if (!cart) return null;

    const quantity = cart.totalQuantity;

    const checkoutDisabled =
        quantity === 0 || Number(cart.cost.totalAmount.amount) === 0;

    return (
        <div className={styles.summary}>
            <div>
                <div className={styles.total}>
                    <span>Total: </span>
                    <Cost
                        value={cart.cost.totalAmount.amount}
                        currency={cart.cost.totalAmount.currencyCode}
                    />
                </div>
                <span className={styles.quantity}>
                    {quantity + ` ${quantity === 1 ? 'item' : 'items'}`}
                </span>
            </div>
            <form action={redirectToCheckout}>
                <button
                    className={styles.checkout}
                    disabled={checkoutDisabled}
                    aria-disabled={checkoutDisabled}
                >
                    <span>Checkout</span>
                    <Icon icon="Arrow" />
                </button>
            </form>
        </div>
    );
};
