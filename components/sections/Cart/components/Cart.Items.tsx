import Image from 'next/image';
import { FC } from 'react';
import { useFormState } from 'react-dom';
import { Cost } from 'components/generics/Cost/Cost';
import { removeItem } from 'components/template/cart/actions';
import { useCart } from 'components/template/cart/cart-context';
import { CartItem } from 'lib/shopify/types';
import styles from '../Cart.module.scss';

const LineItem: FC<{ item: CartItem }> = ({ item }) => {
    const { updateCartItem } = useCart();
    const [message, formAction] = useFormState(removeItem, null);

    const actionWithVariant = formAction.bind(null, item.merchandise.id);

    return (
        <div className={styles.lineItem}>
            <div className={styles.details}>
                <Image
                    src={item.merchandise.product.featuredImage.url}
                    alt=""
                    width={48}
                    height={48}
                />
                <div>
                    <span className={styles.color}>
                        {item.merchandise.selectedOptions[0].value} x
                        {item.quantity}
                    </span>
                    <span className={styles.product}>
                        {item.merchandise.product.title}
                    </span>
                </div>
            </div>
            <div className={styles.actions}>
                <Cost
                    value={item.cost.totalAmount.amount}
                    currency={item.cost.totalAmount.currencyCode}
                />
                <button
                    onClick={() => {
                        updateCartItem(item.merchandise.id, 'delete');
                        actionWithVariant();
                    }}
                >
                    Bin
                </button>
            </div>
            <p aria-live="polite" className="sr-only" role="status">
                {message}
            </p>
        </div>
    );
};

export const CartItems: FC = () => {
    const { cart } = useCart();

    return (
        <div className={styles.items}>
            {cart?.lines.map((line) => <LineItem key={line.id} item={line} />)}
        </div>
    );
};
