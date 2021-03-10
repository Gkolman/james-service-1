import React from 'react';

const ProductDescription = (props) => {
  const { style, currentComponentDetails, material_specification, careInstructions, selector, descriptor } = props;

  const { teaserRoot, descriptionRoot, descriptionTitle, descriptionContent, description, descriptionText, descriptionSpec, descriptionItem, descriptionItemLabel, descriptionInfo, materialSpecification } = style;
  let currentRootId = selector.split(' ');
  currentRootId[1] = currentRootId[1][0].toUpperCase() + currentRootId[1].slice(1);
  currentRootId = currentRootId.join('');

  return currentComponentDetails !== undefined ? (

    <div id={style[currentRootId]} className={`${teaserRoot} ${descriptionRoot}`}>
      <span className={descriptionTitle}>{selector}</span>
      <div className={descriptionContent}>
        {
          <div className={description}>
            <p className={descriptionText}>
              {

                selector === 'material specification' ?
                  currentComponentDetails.map((item, index) => {
                    const value = Object.values(item)[0];
                    let title = Object.keys(item)[0];
                    if (title !== undefined) {
                      title = title.replace(/_/g, " ");
                      title = `${title[0].toUpperCase()}${title.slice(1)}: `;


                    }
                    return value !== undefined ?
                      (<span key={index} className={descriptionItem}>
                        <strong className={descriptionItemLabel}>
                          {`${title}`}
                        </strong>
                        {value}
                        <br />
                      </span>)
                      : null
                  })
                  : selector === 'product description' ?
                    <span className={descriptionItem}>
                      {currentComponentDetails[0][0].product_description}
                      <br />
                    </span>
                    :
                    currentComponentDetails[0].map((item, index) => {
                      const value = Object.values(item)[0];
                      let title = Object.keys(item)[0];
                      if (title !== undefined) {
                        title = title.replace(/_/g, ' ');
                        title = `${title[0].toUpperCase()}${title.slice(1)}: `;
                      }
                      return value !== undefined ?
                        (<span key={index} className={descriptionItem}>
                          <strong className={descriptionItemLabel}>
                            {`${title}`}
                          </strong>
                          {value}
                          <br />
                        </span>)
                        : null;

                    })

              }
            </p>
          </div>
        }

        {selector !== `material specification` ?
          <div className={descriptionSpec}>
            <p className={descriptionText}>
              {
                currentComponentDetails[1].map((item, index, arr) => {
                  // if (selector === 'product description') {
                  const value = Object.values(item)[0];
                  let title = Object.keys(item)[0];
                  if (title !== undefined) {
                    title = title.replace(/_/g, ' ');
                    title = `${title[0].toUpperCase()}${title.slice(1)}: `;
                  }
                  return value !== undefined ?
                    (<span key={index} className={descriptionItem}>
                      <strong className={descriptionItemLabel}>
                        {`${title}`}
                      </strong>
                      {value}
                      <br />
                    </span>)
                    : null
                  // }
                })}
            </p>

          </div> : null}


      </div>
    </div>
  ) : null;
}

export default ProductDescription;