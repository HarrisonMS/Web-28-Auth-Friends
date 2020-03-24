import React from 'react';

export const Friend = props => {
  const { name, age , email } = props;
  return(
    <div className='friend-card'>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  )
}