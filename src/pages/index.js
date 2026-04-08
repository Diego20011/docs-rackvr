import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// src/pages/index.js
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // Quitamos hero--primary para usar un estilo personalizado
    <header className={clsx('hero', styles.heroBanner)} style={{backgroundColor: '#242526', color: 'white'}}>
      <div className="container">
        <img 
          src="img/Rack VR RGB-01.png" 
          alt="RackVR Logo" 
          style={{ width: '200px', marginBottom: '20px', filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.5))' }} 
        />
        <h1 className="hero__title" style={{color: '#e67e22'}}>
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/instalacion-sistema">
            Empezar Instalación 
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
