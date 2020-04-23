import React from 'react';

export const User = props => {
  const { name, age , email } = props;
  return(
    <div className='user-card'>
      <h2>Its!!! {name}!!!</h2>
      <p>Age: {age}</p>
      <p>FakeNews: {email}</p>
    </div>
  )
}