'use client';

import { FC } from 'react';

export const ClientLogger: FC<{ data: unknown }> = ({ data }) => {
    console.log(data);

    return null;
};
