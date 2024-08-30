import { FC } from 'react';
import { Icon } from '@components/generics/Icon/Icon';
import { Logo } from '@components/generics/Logo/Logo';
import styles from './Features.module.scss';

const content = {
    heading: 'Why buy from us?',
    items: [
        'Built-in 17dB noise protection',
        'Secure and comfortable fit',
        'Free shipping',
        'Money back guarantee',
        'Re-usable + Eco-friendly',
        'Durable design & materials',
        'Easy to clean',
        '100% Kiwi owned',
    ],
};

export const Features: FC = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.card}>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <h2>Why buy from us?</h2>
                            </td>
                            <td>
                                <Logo />
                            </td>
                            <td>Others</td>
                        </tr>
                    </thead>
                    <tbody>
                        {content.items.map((item) => (
                            <tr key={item}>
                                <td>{item}</td>
                                <td>
                                    <Icon icon="Check" />
                                </td>
                                <td>X</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
