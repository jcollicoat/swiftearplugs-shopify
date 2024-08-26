import classNames from 'classnames';
import { FC } from 'react';
import { Cost } from 'components/generics/Cost/Cost';
import { Icon } from 'components/generics/Icon/Icon';
import { useCart } from 'components/template/cart/cart-context';
import styles from '../Cart.module.scss';

interface Props {
    isOpen: boolean;
    openCart: () => void;
}

export const CartSummary: FC<Props> = ({ isOpen, openCart }) => {
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
            <button
                className={classNames(isOpen && styles.checkout)}
                onClick={!isOpen ? openCart : () => alert('Checkout to come!')}
            >
                <Icon icon="Cart" />
                <span>{!isOpen ? 'View cart' : 'Checkout'}</span>
            </button>
        </div>
    );
};
