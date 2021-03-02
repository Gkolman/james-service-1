import React from 'react';

const ProductDetails = (props) => {
  const { productDetails, style } = props;
  return productDetails ?
    (
      <div className={style.teaserRoot}>
        <span className={style.featuresTitle}>
          Details
       </span>

        <span className={style.shortDescription}>
          {productDetails}
         </span>
      </div>
    ) : null
}

export default ProductDetails;