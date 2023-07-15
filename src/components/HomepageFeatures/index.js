import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Free to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        HUST PVO is built for learning purposes only, so it's free for anyone to use.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        HUST PVO is designed with a user-friendly interface and easy-to-learn and easy-to-use functions.
      </>
    ),
  },
  {
    title: 'Compatible with Many Devices',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        HUST PVO is a Progressive Web App that can be used on a variety of devices such as laptops, tablets, smartphones...
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
