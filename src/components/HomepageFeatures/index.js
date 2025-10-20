import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="feature.redeemable.title">Redeemable</Translate>,
    Svg: require('@site/img/orange_no_bg.png').default,
    description: (
      <>
        <Translate id="feature.redeemable.desc">Each stablecoin issued by Mustang Finance is redeemable for $1 of collateral in the system.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="feature.streamable.title">Streamable</Translate>,
    Svg: require('@site/img/purple_no_bg.png').default,
    description: (
      <>
        <Translate id="feature.streamable.desc">MUST is a streaming super-token stablecoin built with the Superfluid protocol.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="feature.sustainable.title">Sustainable</Translate>,
    Svg: require('@site/img/yellow_no_bg.png').default,
    description: (
      <>
        <Translate id="feature.sustainable.desc">MUST yield is sustainable and comes from multiple sources. 100% of protocol revenue is directed towards users.</Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} role="img" />
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
