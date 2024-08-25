'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';
import {
    useProduct,
    useUpdateURL,
} from 'components/template/product/product-context';
import { Image as ProductImage, ProductVariant } from 'lib/shopify/types';
import styles from '../Product.module.scss';

interface Props {
    variants: ProductVariant[];
    images: ProductImage[];
}

export const ProductSelector: FC<Props> = ({ variants, images }) => {
    const { updateOption } = useProduct();
    const updateURL = useUpdateURL();

    const searchParams = useSearchParams();
    const selectedColor = searchParams.get('color');

    if (!selectedColor) {
        const firstAvailable = variants.find(
            (variant) => variant.availableForSale,
        );
        const defaultState = updateOption('color', firstAvailable?.title ?? '');
        updateURL(defaultState);
    }

    return (
        <form className={styles.selector}>
            {variants.map((variant) => {
                const image = images.find((image) =>
                    image.altText.includes(variant.title),
                );
                const isAvailable = variant.availableForSale;
                const isSelected = searchParams.get('color') === image?.altText;

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
