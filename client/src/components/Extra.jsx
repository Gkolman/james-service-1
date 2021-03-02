import React from 'react';

const Extra = (props) => {
  const { style } = props;
  return (
    <div className={style.pdpArea}>
      <div className={`${style.teaserRoot} ${style.articleRoot}`}>
        <article className={style.article}>
          <a href className={style.articleMedia}>
            <picture className={style.pictureRoot}>
              <img src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.talkwalker.com%2Fblog%2Fwhat-is-image-analysis&psig=AOvVaw1acG9tfUsafBP6-OWqhM74&ust=1614803987888000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODL3eK7ku8CFQAAAAAdAAAAABAD`}></img>
            </picture>
          </a>
          <div className={style.articleContent}>
            <h2 className={style.articleTitle}>Sustainability</h2>
            <div className={style.articleExcerpt}>
              This product uses Fjällräven G-1000, our own hardwearing outdoor fabric that together with timeless design, creates products that are able to stay in use for many, many years. That’s sustainability through longevity.
          </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Extra;