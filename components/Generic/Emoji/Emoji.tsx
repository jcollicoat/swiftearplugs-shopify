import { FC, PropsWithChildren } from 'react';

export const Emoji: FC<PropsWithChildren> = ({ children }) => (
    <span style={{ color: 'black' }}>{children}</span>
);
