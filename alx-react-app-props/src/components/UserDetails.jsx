import React, { useContext } from 'react';
import UserContext from '../UserContext'

const UserDetails = () => {
    const userData = useContext(UserContext);}

function UserDetails({ userData }) {
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;