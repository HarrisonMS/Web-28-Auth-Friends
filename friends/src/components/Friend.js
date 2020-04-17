import React from 'react';

export const Friend = props => {
  const { name, age , email } = props;
  return(
    <div className='friend-card'>
      <h2>Its!!! {name}!!!</h2>
      <p>Age: {age}</p>
      <p>FakeNews: {email}</p>
    </div>
  )
}