import React from 'react';

const ProductDescription = (props) => {
  const { style, currentComponentDetails, material_specification, careInstructions, selector, descriptor } = props;

  const { teaserRoot, descriptionRoot, descriptionTitle, descriptionContent, description, descriptionText, descriptionSpec, descriptionItem, descriptionItemLabel, descriptionInfo } = style;

  return currentComponentDetails !== undefined ? (
    <div className={`${teaserRoot} ${descriptionRoot}`}>
      <span className={descriptionTitle}>{selector}</span>
      <div className={descriptionContent}>
        {descriptor !== undefined && selector === `product description` ?
          <div className={description}>
            <div className={descriptionText}>
              {`${descriptor}`}
            </div>
          </div> : null
        }

        <div className={descriptionSpec}>
          <div className={descriptionText}>
            {currentComponentDetails.map((item, index) => {
              const value = Object.values(item)[0];
              let title = Object.keys(item)[0];
              if (title !== undefined) {
                title = title.replaceAll('_', ' ');
                title = `${title[0].toUpperCase()}${title.slice(1)}: `;
              }
              return value !== undefined && !(selector === `product description` && index === 0) ?
                (<span key={index} className={descriptionItem}>
                  <strong className={descriptionItemLabel}>
                    {`${title}`}
                  </strong>
                  {value}
                  <br />
                </span>)
                : null
            })}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ProductDescription;