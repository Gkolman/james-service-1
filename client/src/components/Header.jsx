import React from 'react';

const Header = (props) => {
  const {style} = props;
  return (
    <div className={style.app}>
      React Skeleton
    </div>
  )
}

export default Header;