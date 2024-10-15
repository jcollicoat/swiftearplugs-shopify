import classNames from 'classnames';
import { FC } from 'react';
import styles from './Cost.module.scss';

const useValue = (value?: string) => {
    if (!value) return undefined;

    const dollars = value.split('.')[0] ?? '00';
    let cents = (value.split('.')[1] ?? '00').slice(0, 1);

    if (cents.length > 2) {
        cents = Math.round(Number(cents)).toString();
    }
    if (cents.length === 1) {
        cents = cents + '0';
    }

    return dollars + '.' + cents;
};

interface Props {
    value?: string;
    promoValue?: string;
    currency?: string;
}

export const Cost: FC<Props> = ({ value, promoValue, currency }) => {
    const mainValue = useValue(value);
    const secondValue = useValue(promoValue);

    const hasPromo = mainValue && secondValue && secondValue !== mainValue;

    if (!mainValue || !currency) return null;

    return (
        <span className={styles.cost}>
            {hasPromo ? (
                <>
                    <span className={styles.strikethrough}>{mainValue}</span>
                    <span
                        className={classNames(styles.value, styles.highlight)}
                    >
                        {' '}
                        {secondValue}
                    </span>
                </>
            ) : (
                mainValue
            )}
            <span
                className={classNames(
                    styles.currency,
                    hasPromo && styles.highlight,
                )}
            >
                {' '}
                {currency === 'XXX' ? 'NZD' : currency}
            </span>
        </span>
    );
};
