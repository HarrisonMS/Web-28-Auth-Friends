import React, { useState } from 'react';
import  axiosWithAuth  from '../utils/axiosWithAuth';

const AddUser = ({ setUsers }) =>{
  const [ newUser, setNewUser ] = useState({
    name  : '',
    age   : '',
    email : '',
  })
 console.log(newUser)
  const handleChanges = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  const postUser = (data) => {
    console.log('?????',data)
    axiosWithAuth()
    .post('/api/users', data)
    .then((res) =>{
      console.log('!!!!!!',res)
      setUsers(res.data)
      console.log('added User', res)
    })
    .catch((err) => {
      console.log('could not add User', err);
    });
    setNewUser({
      name  : '',
      age   : '',
      email : ''
    })
  }

  return (
    <div className='addForm'>
      <input type='text' name='name' value={newUser.name} onChange={handleChanges} placeholder='Name' />
			<input type='text' name='age' value={newUser.age} onChange={handleChanges} placeholder='Age' />
			<input type='text' name='email' value={newUser.email} onChange={handleChanges} placeholder='Email' />
			<button onClick={() => postUser(newUser)}>Add User</button>
    </div>
  )
}

export default AddUser;