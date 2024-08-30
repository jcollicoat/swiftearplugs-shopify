import { FC } from 'react';
import { Icon } from '@components/generics/Icon/Icon';
import styles from './WhyChoose.module.scss';

export const WhyChoose: FC = () => {
    return (
        <section className={styles.wrapper}>
            <h2>
                Why choose
                <br />
                Swift&nbsp;Earplugs?
            </h2>
            <ul className={styles.grid}>
                <li className={styles.item}>
                    <Icon icon="Shipping" strokeWidth="1.5" />
                    <h3>Free shipping</h3>
                    <p>
                        Get your Swift Earplugs delivered directly to your door
                        at no extra cost, anywhere in New Zealand.
                    </p>
                </li>
                <li className={styles.item}>
                    <Icon icon="Returns" strokeWidth="1.5" />
                    <h3>Hassle-free returns</h3>
                    <p>
                        We’re confident you’ll love your Swift Earplugs, but if
                        they don’t meet your expectations, return them within 30
                        days for a hassle-free refund.
                    </p>
                </li>
                <li className={styles.item}>
                    <Icon icon="HighFive" strokeWidth="1.5" />
                    <h3>100% Kiwi-owned</h3>
                    <p>
                        When you choose Swift Earplugs, you’re not just buying
                        earplugs; you’re investing in New Zealand’s creative
                        economy and helping us bring that success globally.
                    </p>
                </li>
                <li className={styles.item}>
                    <Icon icon="Record" strokeWidth="1.5" />
                    <h3>Dance with us</h3>
                    <p>
                        Join us in a celebration of sound and safety. Dance with
                        Swift Earplugs, where every beat is clear, and every
                        night out is safe. Follow our journey, connect with our
                        community, and see how together, we make every gig or
                        concert unforgettable.
                    </p>
                </li>
            </ul>
        </section>
    );
};
