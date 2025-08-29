import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.centerWrapper}>
          <div className={styles.buttonsPretty}>
            <Link
              className="button button--secondary button--lg"
              to="https://tomascorreia.net">
              My Website
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://cv.tomascorreia.net">
              My CV
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://blog.tomascorreia.net">
              My Blog
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://docs.tomascorreia.net">
              My Docs
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/corrreia/docs-blog">
              GitHub
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
