'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { FC, useEffect } from 'react';
import {
    useProduct,
    useUpdateURL,
} from 'components/template/product/product-context';
import { Image as ProductImage, ProductVariant } from 'library/shopify/types';
import styles from '../Product.module.scss';

interface Props {
    variants: ProductVariant[];
    images: ProductImage[];
}

export const ProductSelector: FC<Props> = ({ variants, images }) => {
    const { state, updateOption } = useProduct();
    const updateURL = useUpdateURL();

    useEffect(() => {
        if (!state.color) {
            const firstAvailable = variants.find(
                (variant) => variant.availableForSale,
            );
            updateURL({ color: firstAvailable?.title ?? '' });
        }
    }, [state, updateURL, variants]);

    return (
        <form className={styles.selector}>
            {variants.map((variant) => {
                const image = images.find((image) =>
                    image.altText.includes(variant.title),
                );
                const isAvailable = variant.availableForSale;
                const isSelected = state.color === image?.altText;

                return (
                    <div className={styles.option} key={variant.id}>
                        <button
                            formAction={() => {
                                const newState = updateOption(
                                    'color',
                                    variant.title,
                                );
                                updateURL(newState);
                            }}
                            className={classNames(
                                isSelected && styles.selected,
                            )}
                            disabled={!isAvailable}
                            aria-disabled={!isAvailable}
                            title={`${variant.title} ${!isAvailable ? ' (Out of stock)' : ''}`}
                        >
                            <Image
                                src={image?.url ?? ''}
                                alt={image?.altText ?? ''}
                                fill
                            />
                        </button>
                        <span className={styles.title}>{variant.title}</span>
                        {!isAvailable && (
                            <span className={styles.outOfStock}>
                                Out of stock
                            </span>
                        )}
                    </div>
                );
            })}
        </form>
    );
};
