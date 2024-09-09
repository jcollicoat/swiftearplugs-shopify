import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import styles from './ContentSectionList.module.scss';

interface Props {
    heading: string;
    image: string;
    imageBlur?: string;
}

export const ContentSectionList: FC<PropsWithChildren<Props>> = ({
    heading,
    image,
    imageBlur,
    children,
}) => {
    return (
        <section className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={image}
                    blurDataURL={imageBlur}
                    sizes="(max-width: 799px) 100vw, 66vw"
                    placeholder={imageBlur ? 'blur' : 'empty'}
                    alt=""
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className={styles.content}>
                <h2>{heading}</h2>
                <ul>{children}</ul>
            </div>
        </section>
    );
};
