import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Orquestación Centralizada',
    description: (
      <>
        Gestión completa del ciclo de vida de máquinas virtuales mediante 
        una interfaz unificada, permitiendo un control total de la infraestructura.
      </>
    ),
  },
  {
    title: 'Arquitectura Multi-host',
    description: (
      <>
        Capacidad de administrar múltiples nodos físicos de cómputo, 
        optimizando recursos y facilitando el escalamiento horizontal.
      </>
    ),
  },
  {
    title: 'Seguridad y Auditoría',
    description: (
      <>
        Integración nativa con Keycloak para gestión de identidades y 
        control de acceso basado en roles (RBAC).
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}