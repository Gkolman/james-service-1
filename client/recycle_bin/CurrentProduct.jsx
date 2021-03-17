import React from 'react';
const CurrentProduct = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type='text' size='2'></input>
      </form>
    </div>
  )
}

export default CurrentProduct