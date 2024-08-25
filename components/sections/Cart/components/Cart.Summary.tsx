import { FC } from 'react';
import { Cost } from 'components/generics/Cost/Cost';
import { useCart } from 'components/template/cart/cart-context';
import styles from '../Cart.module.scss';

interface Props {
    isOpen: boolean;
    openCart: () => void;
    closeCart: () => void;
}

export const CartSummary: FC<Props> = ({ isOpen, openCart, closeCart }) => {
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
            {!isOpen ? (
                <button onClick={openCart}>View cart</button>
            ) : (
                <button onClick={closeCart}>Close cart</button>
            )}
        </div>
    );
};
