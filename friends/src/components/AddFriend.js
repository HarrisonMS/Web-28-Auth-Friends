import React, { useState } from 'react';
import  axiosWithAuth  from '../utils/axiosWithAuth';

const AddFriend = ({ setFriends }) =>{
  const [ newFriend, setNewFriend ] = useState({
    name  : '',
    age   : '',
    email : '',
  })
 console.log(newFriend)
  const handleChanges = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    })
  }

  const postFriend = (data) => {
    console.log('?????',data)
    axiosWithAuth()
    .post('/api/friends', data)
    .then((res) =>{
      console.log('!!!!!!',res)
      setFriends(res.data)
      console.log('added friend', res)
    })
    .catch((err) => {
      console.log('could not add friend', err);
    });
    setNewFriend({
      name  : '',
      age   : '',
      email : ''
    })
  }

  return (
    <div className='addForm'>
      <input type='text' name='name' value={newFriend.name} onChange={handleChanges} placeholder='Name' />
			<input type='text' name='age' value={newFriend.age} onChange={handleChanges} placeholder='Age' />
			<input type='text' name='email' value={newFriend.email} onChange={handleChanges} placeholder='Email' />
			<button onClick={() => postFriend(newFriend)}>Add Friend</button>
    </div>
  )
}

export default AddFriend;