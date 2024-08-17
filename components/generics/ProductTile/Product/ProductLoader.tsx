'use client';

import { FC } from 'react';
import { useProduct } from './useProductLoader';

const ProductLoader: FC = () => {
    useProduct();

    return <div id="product"></div>;
};

export default ProductLoader;
