'use client';

import { FC } from 'react';
import { useFormState } from 'react-dom';
import { Cost } from 'components/generics/Cost/Cost';
import { addItem } from 'components/template/cart/actions';
import { useCart } from 'components/template/cart/cart-context';
import { useProduct } from 'components/template/product/product-context';
import { Product, ProductVariant } from 'lib/shopify/types';
import styles from '../Product.module.scss';

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
            }}
        >
            <Cost
                value={finalVariant.price.amount}
                currency={finalVariant.price.currencyCode}
            />
            <button>Add to cart</button>
            <p aria-live="polite" className="sr-only" role="status">
                {message}
            </p>
        </form>
    );
};
