import React from 'react';

const ProductMaterial = (props) => {
  const { currentProductDetails, style } = props;
  const { teaserRoot, descriptionTitle, descriptionRoot, descriptionContent, description, descriptionText, descriptionItem, descriptionItemLabel } = style;
  return (
    <div id={style.productMaterial} className={teaserRoot + ' ' + descriptionRoot}>
      <span className={descriptionTitle}>Material specification</span>
      <div className={descriptionContent}>
        <div className={description}>
          <p className={descriptionText}>
            {currentProductDetails.map((item, index) => {
              const value = Object.values(item)[0];
              let title = Object.keys(item)[0];
              title = title.replaceAll('_', ' ');
              title = `${title[0].toUpperCase()}${title.slice(1)}: `;
              return value !== undefined ?
                <span key={index} className={descriptionItem}>
                  <strong className={descriptionItemLabel}>
                    {`${title}`}
                  </strong>
                  {value}
                  <br />
                </span>
                : null
            })}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductMaterial;