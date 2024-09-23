'use client';

import Image from 'next/image';
import { FC } from 'react';
import { useProduct } from '@shopify/product/product-context';
import { Product } from '@shopify/types';
import styles from '../Product.module.scss';

export const Images: FC<{ product: Product }> = ({ product }) => {
    const { state } = useProduct();

    return (
        <div className={styles.images}>
            {product.images.map((image) => (
                <Image
                    key={image.url}
                    src={image.url}
                    sizes="(max-width: 799px) 100vw, 33vw"
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
