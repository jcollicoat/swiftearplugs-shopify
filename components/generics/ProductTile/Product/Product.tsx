import dynamic from 'next/dynamic';
import { FC } from 'react';

const ProductLoader = dynamic(() => import('./ProductLoader'), {
    ssr: false,
});

export const Product: FC = () => {
    return <ProductLoader />;
};
