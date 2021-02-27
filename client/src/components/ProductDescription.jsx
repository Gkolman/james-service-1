import React from 'react';

const ProductDescription = (props) => {
  const { style } = props;
  return (
    <div className={style.teaserRoot + ' ' + style.descriptionRoot}>
      <span className={style.descriptionTitle}>Product Description</span>
      <div className={style.descriptionContent}>
        <div className={style.description}>
          <div className={style.descriptionText}>
            Hip-length, lightly padded winter jacket in G-1000 with fixed adjustable hood. A perfect outdoor garment for the colder months of the year, it resists wind and stays dry during short showers, at the same time as it ventilates out body moisture that builds up when you are active. The synthetic padding G-Loft Supreme gives extra warmth, even in damp conditions, and the jacket is easy to move about in, with or without a backpack. The sleeves are pre-shaped and the cuffs are adjusted with velcro. The zipper is two-way, it is covered with a protective flap with press buttons at the chin, chest and hem. Practical storage in several pockets: two vertical pockets on the chest, and two at the sides – all with zippers that have oversized pullers so they can easily be opened and closed with gloves on. In addition, there are two spacious mesh pockets on the inside, perfect for storing gloves or a hat. A drawcord can be used to adjust the hem.
          </div>
        </div>
        <div className={style.descriptionSpec}>
          <div className={style.descriptionText}>
            <span className={style.descriptionItem}>
              <strong className={style.descriptionItemLabel}>
                Article number:
            </strong>
               F82279
              <br />
            </span>
            <span className={style.descriptionItem}>
              <strong className={style.descriptionItemLabel}>Activity:</strong>
              Everyday outdoor
              <br />
            </span>
            <span className={style.descriptionItem}>
              <strong className={style.descriptionItemLabel}>
                Family:
              </strong>
              Ovik
              <br />
            </span>
            <span className={style.descriptionItem}>
              <strong className={style.descriptionItemLabel}>
                Gender:
              </strong>
              Men's
              <br />
            </span>
            <span className={style.descriptionItem}>
              <strong className={style.descriptionItem}>
                Enviromental Info:
              </strong>
              Flurocarbon-free impregnation
              <br />
            </span>
            <span className={style.descriptionItem}>
              <strong className={style.descriptionInfo}>
                Features:
              </strong>
              Adaptable with Greenland Wax, Durable, Insulating, Leightweight, Water-resistant, Wind resistant
            </span>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ProductDescription;