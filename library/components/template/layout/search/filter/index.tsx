import { Suspense } from 'react';
import { SortFilterItem } from 'library/shopify/constants';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';

export type PathFilterItem = { title: string; path: string };
export type ListItem = SortFilterItem | PathFilterItem;

function FilterItemList({ list }: { list: ListItem[] }) {
    return (
        <>
            {list.map((item: ListItem, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <FilterItem key={i} item={item} />
            ))}
        </>
    );
}

export default function FilterList({
    list,
    title,
}: {
    list: ListItem[];
    title?: string;
}) {
    return (
        <nav>
            {title ? (
                <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400">
                    {title}
                </h3>
            ) : null}
            <ul className="hidden md:block">
                <Suspense fallback={null}>
                    <FilterItemList list={list} />
                </Suspense>
            </ul>
            <ul className="md:hidden">
                <Suspense fallback={null}>
                    <FilterItemDropdown list={list} />
                </Suspense>
            </ul>
        </nav>
    );
}
