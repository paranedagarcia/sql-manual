import type {ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type RasterImageFormat = 'png' | 'jpg' | 'webp';

type FeatureImage =
  | {
      format: 'svg';
      src: React.ComponentType<React.ComponentProps<'svg'>>;
    }
  | {
      format: RasterImageFormat;
      src: string;
      alt?: string;
    };

type FeatureItem = {
  title: string;
  image: FeatureImage;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fundamentos de SQL',
    image: {
      format: 'png',
      src: require('@site/static/img/respaldo.png').default,
    },
    description: (
      <>
        Aprende los conceptos básicos de SQL, incluyendo cómo crear y manipular bases de datos, realizar consultas y comprender la estructura de los datos.
      </>
    ),
  },
  {
    title: 'SQL Avanzado',
    image: {
      format: 'webp',
      src: '/img/sql_avanzado.webp',
      alt: 'SQL avanzado',
    },
    description: (
      <>
        Conoce y aplica técnicas avanzadas de SQL, incluyendo subconsultas, uniones, índices, vistas, creación de funciones y procedimientos almacenados.
      </>
    ),
  },
  {
    title: 'Análisis de Datos con SQL',
    image: {
      format: 'jpg',
      src: require('@site/static/img/sql-analisis.jpg').default,
      alt: 'Análisis de datos con SQL',
    },
    description: (
      <>
        Analiza datos utilizando SQL, incluyendo cómo realizar agregaciones, filtrado, ordenamiento y creación de informes a partir de bases de datos.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  const imageSrc = image.format === 'svg' ? undefined : useBaseUrl(image.src);

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {image.format === 'svg' ? (
          <image.src className={styles.featureSvg} role="img" />
        ) : (
          <img
            src={imageSrc}
            className={clsx(styles.featureSvg, styles.featureImage)}
            alt={image.alt ?? title}
          />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
