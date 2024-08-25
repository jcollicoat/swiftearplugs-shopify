import { FC } from 'react';
import { ProductProvider } from 'components/template/product/product-context';
// import { ProductDescription } from 'components/template/product/product-description';
import { getProduct } from 'lib/shopify';
import { ProductImages } from './components/Product.Images';
import { ProductSelector } from './components/Product.Selector';
import styles from './Product.module.scss';

export const Product: FC = async () => {
    const product = await getProduct('swift-earplugs');

    if (!product) {
        return null;
    }

    const productJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.featuredImage.url,
        offers: {
            '@type': 'AggregateOffer',
            availability: product.availableForSale
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
            priceCurrency: product.priceRange.minVariantPrice.currencyCode,
            highPrice: product.priceRange.maxVariantPrice.amount,
            lowPrice: product.priceRange.minVariantPrice.amount,
        },
    };

    return (
        <ProductProvider>
            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(productJsonLd),
                }}
            />
            <div className={styles.product}>
                <ProductImages product={product} />
                <ProductSelector
                    variants={product.variants}
                    images={product.images}
                />
                {/* <ProductDescription product={product} /> */}
            </div>
        </ProductProvider>
    );
};
