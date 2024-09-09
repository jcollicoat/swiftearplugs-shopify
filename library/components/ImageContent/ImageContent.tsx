import Image from 'next/image';
import { CSSProperties, FC, PropsWithChildren } from 'react';
import styles from './ImageContent.module.scss';

interface Props {
    heading: string;
    image: string;
    imageBlur?: string;
    position?: CSSProperties['objectPosition'];
}

export const ImageContent: FC<PropsWithChildren<Props>> = ({
    heading,
    image,
    imageBlur,
    position,
    children,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                    src={image}
                    blurDataURL={imageBlur}
                    sizes="(max-width: 799px) 100vw, 66vw"
                    placeholder="blur"
                    alt=""
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: position ?? 'center',
                    }}
                />
            </div>
            <div className={styles.content}>
                <h2>{heading}</h2>
                <ul>{children}</ul>
            </div>
        </div>
    );
};
