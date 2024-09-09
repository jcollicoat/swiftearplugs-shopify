import classNames from 'classnames';
import Image from 'next/image';
import { ComponentProps, FC } from 'react';
import { Child } from './Child/Child';
import styles from './ContentSection.module.scss';

interface Props {
    heading: string;
    content: ComponentProps<typeof Child>[];
    image?: ComponentProps<typeof Image>;
    reversed?: boolean;
}

export const ContentSection: FC<Props> = ({
    heading,
    content,
    image,
    reversed,
}) => {
    return (
        <div
            className={classNames(
                styles.container,
                reversed && styles.reversed,
            )}
        >
            <div className={styles.image}>
                {image ? (
                    <Image
                        src={image.src}
                        sizes="(max-width: 799px) 100vw, 66vw"
                        placeholder="empty"
                        alt=""
                        fill
                    />
                ) : (
                    <div className={styles.placeholder}></div>
                )}
                <div className={styles.placeholder}></div>
            </div>
            <div className={styles.content}>
                <h2>{heading}</h2>
                {content.map((section) => (
                    <Child key={section.heading} {...section} />
                ))}
            </div>
        </div>
    );
};
