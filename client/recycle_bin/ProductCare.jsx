import React from 'react';

const ProductCare = (props) => {
  const { currentProductDetails, style } = props;
  const { productCare, teaserRoot, descriptionTitle, descriptionRoot, descriptionContent, description, descriptionText, descriptionItem, descriptionItemLabel, descriptionSpec } = style;
  return (
    <div id={productCare} className={`${teaserRoot} ${descriptionRoot}`} >
      <div className={descriptionTitle}>
        Care Instructions
        </div>
      <div className={descriptionContent}>
        <div className={description}>
          <p className={descriptionText}>
            {currentProductDetails.map((item, index) => {
              let title = Object.keys(item)[0];
              title = title.replaceAll('_', ' ');
              title = `${title[0].toUpperCase()}${title.slice(1)}: `;
              const value = Object.values(item);
              return (
                <span key={index} className={descriptionItem}>
                  <strong className={descriptionItemLabel}>
                    {`${title}`}
                  </strong>
                  {value}
                  <br />
                </span>
              )
            })}
          </p>
        </div>
      </div>
    </div >
  )
}
export default ProductCare;