import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const userDocsUrl = useBaseUrl('/docs/category/user-docs/');
  const techDocsUrl = useBaseUrl('/docs/category/technical-documentation/');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.title">{siteConfig.title}</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.tagline">{siteConfig.tagline}</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={userDocsUrl}>
            <Translate id="homepage.userDocs">Mustang Finance User Docs</Translate>
          </Link>
        </div>
        <br />
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={techDocsUrl}>
            <Translate id="homepage.technicalDocs">Mustang Finance Technical Docs</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Learn about Mustang Finance.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
