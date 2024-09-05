import { FC } from 'react';
import styles from './Cost.module.scss';

interface Props {
    value: string;
    currency: string;
}

export const Cost: FC<Props> = ({ value, currency }) => {
    let formattedValue = value;
    if (formattedValue.split('.')[1].length === 1) {
        formattedValue = value + '0';
    }

    return (
        <div className={styles.cost}>
            ${formattedValue}
            <span> {currency === 'XXX' ? 'NZD' : currency}</span>
        </div>
    );
};
