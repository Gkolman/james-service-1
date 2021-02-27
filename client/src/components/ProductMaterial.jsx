import React from 'react';

const ProductMaterial = (props) => {
  const { style } = props;
  const { teaserRoot, descriptionTitle, descriptionRoot, descriptionContent, description, descriptionText, descriptionItem, descriptionItemLabel } = style;
  return (
    <div id={style.productMaterial} className={teaserRoot + ' ' + descriptionRoot}>
      <span className={descriptionTitle}>Material specification</span>
      <div className={descriptionContent}>
        <div className={description}>
          <p className={descriptionText}>
            <span className={descriptionItem}>
              <strong className={description}>
                Material:
              </strong>
              G1000 Original: 65% polyester, 35% cotton
            </span>
            <br />
            G1000 Lite: 65% polyester, 35% cotton
            <br />
            <span className={descriptionItem}>
              <strong className={description}>
                Lining:
              </strong>
              100% polyamide
              <br />
            </span>
            <span className={descriptionItem}>
              <strong className={descriptionItemLabel}>
                Filling:
              </strong>
              G-Loft Supreme: 100% polyester
              <br />
            </span>
            <span className={descriptionItem}>
              <strong className={descriptionItemLabel}>
                Fill Weight:
              </strong>
              145 g/m2
              <br />
            </span>
            <span className={descriptionItem}>
              <strong className={descriptionItemLabel}>
                Legal notice:
            </strong>
            Contains non-textile elements of animal origin.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductMaterial;