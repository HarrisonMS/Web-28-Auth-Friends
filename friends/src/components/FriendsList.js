import React, { useState, useEffect }  from 'react';
import { Friend } from './Friend';
import axiosWithAuth from '../utils/axiosWithAuth';

export const FriendsList = props => {
  const [ friends, setFriends ] = useState([]);
 
  useEffect(() => {
    axiosWithAuth()
    .get('/api/friends')
    .then((res) => {
      setFriends(...friends, res.data)
      console.log('idkkkkkkk',res.data)
    })
  },[])
  return (
    <div className='friends-list'>
      {friends.map(friend => <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />)}
    </div>
  )
}