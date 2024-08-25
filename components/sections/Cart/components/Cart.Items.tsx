import { FC } from 'react';
import { useFormState } from 'react-dom';
import { removeItem } from 'components/template/cart/actions';
import { useCart } from 'components/template/cart/cart-context';
import styles from '../Cart.module.scss';

export const CartItems: FC = () => {
    const { cart, updateCartItem } = useCart();

    const [message, formAction] = useFormState(removeItem, null);

    return (
        <div className={styles.items}>
            {cart?.lines.map((line) => {
                const actionWithVariant = formAction.bind(
                    null,
                    line.merchandise.id,
                );

                return (
                    <div key={line.id}>
                        <div>{line.merchandise.product.title}</div>
                        <button
                            onClick={async () => {
                                updateCartItem(line.merchandise.id, 'delete');
                                await actionWithVariant();
                            }}
                        >
                            Remove item
                        </button>
                        <p aria-live="polite" className="sr-only" role="status">
                            {message}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
