import { FC } from 'react';
import styles from './Cost.module.scss';

interface Props {
    value: string;
    currency: string;
}

export const Cost: FC<Props> = ({ value, currency }) => (
    <div className={styles.cost}>
        ${value}
        <span> {currency}</span>
    </div>
);
