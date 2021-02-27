import React from 'react';

const ProductDetails = (props) => {
  const { style } = props;
  return (
    <div className={style.teaserRoot}>
      <span className={style.featuresTitle}>
        Details
      </span>

      <span className={style.shortDescription}>
        Lightweight and convenient winter jacket in G-1000 with synthetic padding that keeps warmth in even when damp. Fixed, snug-fitting hood, several practical pockets and easily gripped details.
        </span>
    </div>
  )
}

export default ProductDetails;