import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Trade Now',
    Svg: require('@site/static/img/ck-moon.svg').default,
    description: (
      <>
        Trade, earn, and own crypto on the all-in-one multichain DEX.
      </>
    ),
  },
  {
    title: 'Discover the Ecosystem',
    Svg: require('@site/static/img/banner-ck-wallet.png').default,
    description: (
      <>
        Experience the power of community ownership, global governance,
        and explore infinite use cases within the CK Finance ecosystem.
      </>
    ),
  },
  {
    title: 'Join our Community',
    Svg: require('@site/static/img/banner-ck-solidity.png').default,
    description: (
      <>
        Together we can make the CK Finance community even stronger.
        Unlock the Full Potential of DeFi with <code>CK</code>.
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
