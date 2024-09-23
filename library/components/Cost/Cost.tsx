import { FC } from 'react';
import styles from './Cost.module.scss';

interface Props {
    value?: string;
    currency?: string;
}

export const Cost: FC<Props> = ({ value, currency }) => {
    if (!value || !currency) return null;

    const dollars = value.split('.')[0];
    let cents = value.split('.')[1];
    if (cents.length > 2) {
        cents = Math.round(Number(cents)).toString();
    }
    if (cents.length === 1) {
        cents = cents + '0';
    }

    const formattedValue = dollars + '.' + cents;

    return (
        <span className={styles.cost}>
            ${formattedValue}
            <span> {currency === 'XXX' ? 'NZD' : currency}</span>
        </span>
    );
};
