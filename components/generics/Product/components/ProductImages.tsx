'use client';

import Image from 'next/image';
import { FC } from 'react';
import { useProduct } from 'components/template/product/product-context';
import { Product } from 'lib/shopify/types';
import styles from './ProductImages.module.scss';

export const ProductImages: FC<{ product: Product }> = ({ product }) => {
    console.log(product);
    const context = useProduct();
    console.log(context);

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
                            context.state.color === 'atte Black'
                                ? 'none'
                                : 'auto',
                    }}
                />
            ))}
        </div>
    );
};
