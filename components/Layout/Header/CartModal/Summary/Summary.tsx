import { FC } from 'react';
import { Cost } from '@Generic/Cost/Cost';
import { Icon } from '@Generic/Icon/Icon';
import { redirectToCheckout } from 'shopify/cart/actions';
import { useCart } from 'shopify/cart/cart-context';
import styles from './Summary.module.scss';

export const Summary: FC = () => {
    const { cart } = useCart();

    if (!cart) return null;

    const quantity = cart.totalQuantity;

    const checkoutDisabled =
        quantity === 0 || Number(cart.cost.totalAmount.amount) === 0;

    const promoCode = cart.discountCodes[0] ?? {
        applicable: false,
        code: '',
    };

    return (
        <div className={styles.summary}>
            <div>
                <div className={styles.total}>
                    <span>Total: </span>
                    <Cost
                        value={cart.cost.subtotalAmount.amount}
                        promoValue={cart.cost.totalAmount.amount}
                        currency={cart.cost.totalAmount.currencyCode}
                    />
                </div>
                <div className={styles.info}>
                    <span className={styles.quantity}>
                        {quantity + ` ${quantity === 1 ? 'item' : 'items'}`}
                    </span>
                    {promoCode.applicable && (
                        <span className={styles.promo}>
                            Promo code:{' '}
                            <span className={styles.code}>
                                {promoCode.code}
                            </span>
                        </span>
                    )}
                </div>
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
