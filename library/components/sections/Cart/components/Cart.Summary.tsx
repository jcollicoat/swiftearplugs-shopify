import { FC } from 'react';
import { Cost } from '@components/generics/Cost/Cost';
import { Icon } from '@components/generics/Icon/Icon';
import { redirectToCheckout } from '@shopify/cart/actions';
import { useCart } from '@shopify/cart/cart-context';
import styles from '../Cart.module.scss';
import { CartCheckout } from './Cart.Checkout';

interface Props {
    toggleCart: () => void;
}

export const CartSummary: FC<Props> = ({ toggleCart }) => {
    const { cart } = useCart();
    if (!cart) {
        return null;
    }

    const checkoutDisabled =
        cart.totalQuantity === 0 || Number(cart.cost.totalAmount.amount) === 0;

    return (
        <div className={styles.summary}>
            <div>
                <div className={styles.quantity}>
                    <div>
                        <span>
                            {cart.totalQuantity === 0 ? (
                                'Your cart is empty'
                            ) : (
                                <>
                                    {cart.totalQuantity}{' '}
                                    {cart.totalQuantity === 1
                                        ? 'item'
                                        : 'items'}{' '}
                                    in cart
                                </>
                            )}
                        </span>
                    </div>
                </div>
                {!checkoutDisabled && (
                    <Cost
                        value={cart.cost.totalAmount.amount}
                        currency={cart.cost.totalAmount.currencyCode}
                    />
                )}
            </div>
            <div className={styles.actions}>
                {!checkoutDisabled && (
                    <button className={styles.cart} onClick={toggleCart}>
                        <Icon icon="Cart" />
                    </button>
                )}
                <form action={redirectToCheckout}>
                    <CartCheckout checkoutDisabled={checkoutDisabled} />
                </form>
            </div>
        </div>
    );
};
