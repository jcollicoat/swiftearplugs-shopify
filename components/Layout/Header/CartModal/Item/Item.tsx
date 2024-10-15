import Image from 'next/image';
import { FC } from 'react';
import { useFormState } from 'react-dom';
import { Cost } from '@Generic/Cost/Cost';
import { Icon } from '@Generic/Icon/Icon';
import { removeItem } from 'shopify/cart/actions';
import { useCart } from 'shopify/cart/cart-context';
import { CartItem } from 'shopify/types';
import styles from './Item.module.scss';

interface Props {
    item: CartItem;
}

export const Item: FC<Props> = ({ item }) => {
    const { updateCartItem } = useCart();
    const [message, formAction] = useFormState(removeItem, null);

    const actionWithVariant = formAction.bind(null, item.merchandise.id);

    const imageUrl = item.merchandise.product.images?.edges.find(
        (edge) =>
            edge.node.altText === item.merchandise.selectedOptions[0].value,
    )?.node.url;

    return (
        <div className={styles.item}>
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
