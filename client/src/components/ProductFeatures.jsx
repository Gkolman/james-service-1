import React from 'react';


const ProductFeatures = (props) => {
  const { currentComponentDetails, style } = props;
  return currentComponentDetails ?
    (
      <div className={`${style.teaserRoot} ${style.featuresRoot}`}>
        <div className={style.featuresDescription}>
          <div>
            <span className={style.featuresTitle}>
              Product Features
              </span>
            <ul className={style.features}>
              {currentComponentDetails.map((feature, index) => {
                return feature ?
                  <li key={index}>{feature}</li> : null;
              })}
            </ul>
          </div>
        </div>
    </div>
    ) : null
}

export default ProductFeatures;