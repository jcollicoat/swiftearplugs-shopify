import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import AmEx from './Logos/AmEx.svg';
import ApplePay from './Logos/ApplePay.svg';
import GooglePay from './Logos/GooglePay.svg';
import MasterCard from './Logos/MasterCard.svg';
import PayPal from './Logos/PayPal.svg';
import ShopPay from './Logos/ShopPay.svg';
import UnionPay from './Logos/UnionPay.svg';
import Visa from './Logos/Visa.svg';
import styles from './Payments.module.scss';

export const Payments: FC = () => {
    const methods = [
        { name: 'MasterCard', logo: MasterCard },
        { name: 'Visa', logo: Visa },
        { name: 'AmEx', logo: AmEx },
        { name: 'ApplePay', logo: ApplePay },
        { name: 'GooglePay', logo: GooglePay },
        { name: 'PayPal', logo: PayPal },
        { name: 'ShopPay', logo: ShopPay },
        { name: 'UnionPay', logo: UnionPay },
    ];

    return (
        <div className={styles.payments}>
            {methods.map((method) => (
                <div
                    key={method.name}
                    className={classNames(styles.payment, styles[method.name])}
                >
                    <Image src={method.logo} alt="" fill />
                </div>
            ))}
        </div>
    );
};
