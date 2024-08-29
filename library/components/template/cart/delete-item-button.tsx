'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { removeItem } from 'library/components/template/cart/actions';
import type { CartItem } from '@shopify/types';

export function DeleteItemButton({
    item,
    optimisticUpdate,
}: {
    item: CartItem;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    optimisticUpdate: any;
}) {
    const [message, formAction] = useFormState(removeItem, null);
    const merchandiseId = item.merchandise.id;
    const actionWithVariant = formAction.bind(null, merchandiseId);

    return (
        <form
            action={async () => {
                optimisticUpdate(merchandiseId, 'delete');
                await actionWithVariant();
            }}
        >
            <button
                type="submit"
                aria-label="Remove cart item"
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500"
            >
                <XMarkIcon className="mx-[1px] h-4 w-4 text-white dark:text-black" />
            </button>
            <p aria-live="polite" className="sr-only" role="status">
                {message}
            </p>
        </form>
    );
}
