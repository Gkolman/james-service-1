import React from 'react';


const ProductFeatures = (props) => {
  const { productFeatures, style } = props;
  return productFeatures ?
    (<div id={style.productFeatures}>
      <div className={style.teaserRoot}>
        <div className={style.featuresDescription}>
          <div>
            <span className={style.featuresTitle}>
              Product Features
              </span>
            <ul className={style.features}>
              {productFeatures.map((feature, index) => {
                return feature ?
                  <li key={index}>{feature}</li> : null;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
    ) : null
}

export default ProductFeatures;