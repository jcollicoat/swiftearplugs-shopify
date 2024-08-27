'use client';

import Image from 'next/image';
import { FC } from 'react';
import { useProduct } from 'components/template/product/product-context';
import { Product } from 'library/shopify/types';
import styles from '../Product.module.scss';

export const ProductImages: FC<{ product: Product }> = ({ product }) => {
    const { state } = useProduct();

    return (
        <div className={styles.images}>
            {product.images.map((image) => (
                <Image
                    key={image.url}
                    src={image.url}
                    alt={image.altText}
                    fill
                    style={{
                        display:
                            state['color'] === image.altText ? 'block' : 'none',
                    }}
                />
            ))}
        </div>
    );
};
