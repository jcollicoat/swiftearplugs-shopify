import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Child.module.scss';

interface Props {
    image: string;
    heading: string;
    content: string;
}

export const Child: FC<Props> = ({ image, heading, content }) => (
    <div className={classNames(styles.child, styles.reversed)}>
        <div className={styles.image}>
            {image ? (
                <Image src={image} alt="" fill />
            ) : (
                <div className={styles.placeholder}></div>
            )}
        </div>
        <div className={styles.content}>
            <h3>{heading}</h3>
            <p>{content}</p>
        </div>
    </div>
);
