'use client';

import Image from 'next/image';
import { FC } from 'react';
import { Product } from 'lib/shopify/types';
import styles from './ProductImages.module.scss';

export const ProductImages: FC<{ product: Product }> = ({ product }) => {
    return (
        <div className={styles.images}>
            {product.images.map((image) => (
                <Image
                    key={image.url}
                    src={image.url}
                    alt={image.altText}
                    fill
                />
            ))}
        </div>
    );
};
