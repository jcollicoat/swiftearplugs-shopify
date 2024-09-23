import { FC } from 'react';
import { Cost } from '@components/Cost/Cost';
import { Icon } from '@components/Icon/Icon';
import { useCart } from '@shopify/cart/cart-context';
import styles from './CartButton.module.scss';

export const CartButton: FC = () => {
    const { cart, isCartOpen, setIsCartOpen } = useCart();
    const toggleCart = () => setIsCartOpen(!isCartOpen);

    if (!cart) return null;

    const value = cart.cost.totalAmount.amount;
    const currency = cart.cost.totalAmount.currencyCode;
    const quantity = cart.totalQuantity;

    return (
        <button className={styles.button} onClick={toggleCart}>
            <Icon icon="Cart" />
            <div className={styles.summary}>
                <Cost value={value} currency={currency} />
                <span className={styles.quantity}>
                    {quantity + ` ${quantity === 1 ? 'item' : 'items'}`}
                </span>
            </div>
        </button>
    );
};
