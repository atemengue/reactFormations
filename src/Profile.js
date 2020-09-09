/** @format */

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();

  return (
    <div>
      <h1>Profile</h1>
      <img
        style={{ maxWidth: 50, maxHeight: 50 }}
        src={user.picture}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Profile;
