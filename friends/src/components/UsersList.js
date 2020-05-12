import React, { useState, useEffect }  from 'react';
import { User } from './User';
import AddUser from './AddUser'
import axiosWithAuth from '../utils/axiosWithAuth';

export const UsersList = props => {
  const [ users, setUsers ] = useState([]);
  console.log('fidfhsdkafj',users)
 
  useEffect(() => {
    axiosWithAuth()
    .get('/api/users')
    .then((res) => {
      setUsers(...users, res.data)
      console.log('idkkkkkkk',res.data)
    })
  },[])
  return (
    <>
    <div className='addFormWrap'>
      <AddUser setUsers={setUsers} />
    </div>
    <div className='Users-list'>
      {users.map(user => <User key={user.id} name={user.username} age={user.age} email={user.email} />)}
    </div>
    </>
  )
}