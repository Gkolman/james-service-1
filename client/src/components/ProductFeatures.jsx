import React from 'react';


const ProductFeatures = (props) => {
  const { style } = props;
  return (
    <div id={style.productFeatures}>
      <div className ={style.teaserRoot}>
        <div className= {style.featuresDescription}>
          <div>
            <span className={style.featuresTitle}>
              Product Features
            </span>
            <ul className ={style.features}>
              <li>Lightly padded jacket in G-1000 Original filled with G-Loft Supreme.</li>
              <li>Hip length with articulated cut and pre-shaped sleeves</li>
              <li>Hip length with articulated cut and pre-shaped sleeves</li>
              <li>Two-way front zipper with glove-friendly pullers.</li>
              <li>Two chest pockets and two hand pockets covered with plackets.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures;