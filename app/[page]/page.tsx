import { getPage } from 'shopify/index';
import styles from './page.module.scss';

export default async function Page({
    params: { page },
}: {
    params: { page: string };
}) {
    const pageData = await getPage(page);

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>{pageData.title}</h1>
            <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: pageData.body }}
                className={styles.content}
            ></div>
        </section>
    );
}
