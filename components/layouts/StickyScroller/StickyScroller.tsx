import { ComponentType, FC, PropsWithChildren } from 'react';
import styles from './StickyScroller.module.scss';

interface Props {
    stickyComponent: ComponentType;
}

export const StickyScroller: FC<PropsWithChildren<Props>> = ({
    children,
    stickyComponent: StickyComponent,
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sticky}>
                <StickyComponent />
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    );
};
