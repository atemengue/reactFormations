import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Private() {
  const [message, setMessage] = useState('');
  const { getAccessTokenSilently } = useAuth0();

  useEffect( () => {
    async function getAccessToken() {
      const accessToken =  await getAccessTokenSilently();

      console.log(accessToken, 'ACCESS TOKEN');

      await fetch('/private', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error('Network response was not ok.');
        })
        .then((response) => setMessage(response.message))
        .catch((error) => setMessage(error.message));
    };

    getAccessToken();

  }, [getAccessTokenSilently]);

  return <p>{message}</p>;
}
