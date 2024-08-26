import { FC } from 'react';
import { Cost } from 'components/generics/Cost/Cost';
import { Icon } from 'components/generics/Icon/Icon';
import { useCart } from 'components/template/cart/cart-context';
import styles from '../Cart.module.scss';

interface Props {
    toggleCart: () => void;
}

export const CartSummary: FC<Props> = ({ toggleCart }) => {
    const { cart } = useCart();

    if (!cart) {
        return null;
    }

    return (
        <div className={styles.summary}>
            <div>
                <div className={styles.quantity}>
                    <div>
                        <span className={styles.count}>
                            {cart.totalQuantity}{' '}
                            {cart.totalQuantity === 1 ? 'item' : 'items'}
                        </span>{' '}
                        in cart
                    </div>
                </div>
                <Cost
                    value={cart.cost.totalAmount.amount}
                    currency={cart.cost.totalAmount.currencyCode}
                />
            </div>
            <div className={styles.actions}>
                <button className={styles.cart} onClick={toggleCart}>
                    <Icon icon="Cart" />
                </button>
                <button
                    className={styles.checkout}
                    onClick={() => alert('Checkout to come!')}
                >
                    <span>Checkout</span>
                    <Icon icon="Arrow" />
                </button>
            </div>
        </div>
    );
};
