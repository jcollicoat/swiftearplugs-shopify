'use client';

import { FC } from 'react';
import { useFormState } from 'react-dom';
import { Cost } from '@components/Cost/Cost';
import { Icon } from '@components/Icon/Icon';
import { addItem } from '@shopify/cart/actions';
import { useCart } from '@shopify/cart/cart-context';
import { useProduct } from '@shopify/product/product-context';
import { Product, ProductVariant } from '@shopify/types';
import styles from '../Product.module.scss';

declare global {
    interface Window {
        fbq: (event: string, name: string, data: unknown) => void;
    }
}

export const ProductAddToCart: FC<{ product: Product }> = ({ product }) => {
    const { variants } = product;
    const { state } = useProduct();
    const { addCartItem } = useCart();
    const [message, formAction] = useFormState(addItem, null);

    const variant = variants.find((variant: ProductVariant) =>
        variant.selectedOptions.every(
            (option) => option.value === state[option.name.toLowerCase()],
        ),
    );
    const defaultVariantId =
        variants.length === 1 ? variants[0]?.id : undefined;
    const selectedVariantId = variant?.id || defaultVariantId;
    const actionWithVariant = formAction.bind(null, selectedVariantId);
    const finalVariant = variants.find(
        (variant) => variant.id === selectedVariantId,
    );

    if (!finalVariant) {
        return null;
    }

    return (
        <form
            className={styles.addToCart}
            action={async () => {
                addCartItem(finalVariant, product);
                await actionWithVariant();
                window.fbq('track', 'AddToCart', {
                    content_ids: [finalVariant.id],
                    content_type: 'product',
                });
            }}
        >
            <div className={styles.action}>
                <Cost
                    value={finalVariant.price.amount}
                    currency={finalVariant.price.currencyCode}
                />
                <button>Add to cart</button>
            </div>
            <div className={styles.shipping}>
                <Icon icon="Shipping" />
                <span>Free shipping on all orders</span>
            </div>
            <p aria-live="polite" className="sr-only" role="status">
                {message}
            </p>
        </form>
    );
};
