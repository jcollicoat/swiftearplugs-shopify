import Image from 'next/image';
import { FC } from 'react';
import { Icon } from '@Generic/Icon/Icon';
import styles from './Testimonials.module.scss';

interface Props {
    heading: string;
    content: {
        image: string;
        quote: string;
        name: string;
    }[];
}

export const Testimonials: FC<Props> = ({ heading, content }) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.heading}>{heading}</h2>
            <div className={styles.content}>
                {content.map((testimonial) => (
                    <div key={testimonial.name} className={styles.testimonial}>
                        <div className={styles.image}>
                            <Image src={testimonial.image} alt="" fill />
                        </div>
                        <div className={styles.card}>
                            <span className={styles.quote}>
                                {testimonial.quote}
                            </span>
                            <span className={styles.name}>
                                <Icon icon="Smile" />
                                {testimonial.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
