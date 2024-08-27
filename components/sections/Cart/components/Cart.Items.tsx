import Image from 'next/image';
import { FC } from 'react';
import { useFormState } from 'react-dom';
import { Cost } from 'components/generics/Cost/Cost';
import { Icon } from 'components/generics/Icon/Icon';
import { removeItem } from 'components/template/cart/actions';
import { useCart } from 'components/template/cart/cart-context';
import { CartItem } from 'library/shopify/types';
import styles from '../Cart.module.scss';

const LineItem: FC<{ item: CartItem }> = ({ item }) => {
    const { updateCartItem } = useCart();
    const [message, formAction] = useFormState(removeItem, null);

    const actionWithVariant = formAction.bind(null, item.merchandise.id);

    const imageUrl = item.merchandise.product.images?.edges.find(
        (edge) =>
            edge.node.altText === item.merchandise.selectedOptions[0].value,
    )?.node.url;

    return (
        <div className={styles.lineItem}>
            <div className={styles.details}>
                <Image
                    src={imageUrl ?? item.merchandise.product.featuredImage.url}
                    alt=""
                    width={48}
                    height={48}
                />
                <div>
                    <span className={styles.color}>
                        {item.merchandise.selectedOptions[0].value}
                        {item.quantity > 1 && ` x${item.quantity}`}
                    </span>
                    <span className={styles.product}>
                        {item.merchandise.product.title}
                    </span>
                </div>
            </div>
            <form
                className={styles.actions}
                action={async () => {
                    updateCartItem(item.merchandise.id, 'delete');
                    await actionWithVariant();
                }}
            >
                <Cost
                    value={item.cost.totalAmount.amount}
                    currency={item.cost.totalAmount.currencyCode}
                />
                <button>
                    <Icon icon="Bin" />
                </button>
            </form>
            <p aria-live="polite" className="sr-only" role="status">
                {message}
            </p>
        </div>
    );
};

export const CartItems: FC = () => {
    const { cart } = useCart();

    if (!cart) {
        return null;
    }

    const sortedLines = cart.lines.sort((a, b) => {
        if (
            a.merchandise.selectedOptions[0].value >
            b.merchandise.selectedOptions[0].value
        ) {
            return 1;
        }
        if (
            b.merchandise.selectedOptions[0].value >
            a.merchandise.selectedOptions[0].value
        ) {
            return -1;
        }
        return 0;
    });

    return (
        <div className={styles.items}>
            {sortedLines.map((line) => (
                <LineItem
                    key={`${line.id}${line.merchandise.selectedOptions[0].value}`}
                    item={line}
                />
            ))}
        </div>
    );
};
