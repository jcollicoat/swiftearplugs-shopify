import { getPage } from '@shopify/index';

export default async function Page({
    params: { page },
}: {
    params: { page: string };
}) {
    const pageData = await getPage(page);
    console.log(pageData);

    return (
        <main>
            <div></div>
        </main>
    );
}
