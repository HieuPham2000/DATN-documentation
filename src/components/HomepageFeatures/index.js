import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({
      id: "homepageFeatures.featureList.freeToUse.title",
      message: 'Free to Use'
    }),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate
        id="homepageFeatures.featureList.freeToUse.content"
      >
        HUST PVO is built for learning purposes only, so it's free for anyone to use.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepageFeatures.featureList.easyToUse.title",
      message: 'Easy to Use'
    }),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate
        id="homepageFeatures.featureList.easyToUse.content"
      >
        HUST PVO is designed with a user-friendly interface and easy-to-learn and easy-to-use functions.
      </Translate>
    ),
  },
  {
    title: translate({
      id: "homepageFeatures.featureList.manyDevices.title",
      message: 'Compatible with Many Devices'
    }),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate
        id="homepageFeatures.featureList.manyDevices.content"
      >
        HUST PVO is a Progressive Web App that can be used on a variety of devices such as laptops, tablets, smartphones...
      </Translate>
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
