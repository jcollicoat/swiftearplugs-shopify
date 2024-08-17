import { ComponentProps, FC } from 'react';
import { Icon } from 'components/generics/Icon/Icon';
import styles from './IconContent.module.scss';

interface Props {
    icon: ComponentProps<typeof Icon>['icon'];
    heading: string;
    content: string;
    style?: 'above' | 'inline';
}

export const IconContent: FC<Props> = ({
    icon,
    heading,
    content,
    style = 'above',
}) => {
    return (
        <div className={styles.item}>
            {style === 'above' && <Icon icon={icon} />}
            <h3>
                {style === 'inline' && <Icon icon={icon} />}
                {heading}
            </h3>
            <p>{content}</p>
        </div>
    );
};
