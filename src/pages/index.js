import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)} style={{backgroundColor: '#1b1b1d', color: 'white'}}>
      <div className="container">
        <img 
          src="img/Rack VR RGB-01.png" 
          alt="RackVR Logo" 
          style={{ width: '220px', marginBottom: '20px' }} 
        />
        <h1 className="hero__title" style={{color: '#e67e22', fontWeight: 'bold'}}>
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle" style={{fontSize: '1.5rem', opacity: '0.9'}}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            style={{backgroundColor: '#e67e22', border: 'none', padding: '12px 30px'}}
            to="/docs/intro">
            Explorar Documentación
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
      title={siteConfig.title}
      description="Documentación técnica de la plataforma de orquestación RackVR">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}