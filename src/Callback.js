import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const CallBack = (props) =>  {

  const { isLoading, isAuthenticated, error, user, logout } = useAuth0();

  useEffect(() => {
    if(isAuthenticated) {
      props.history.push('/')
    }
  }, [isAuthenticated, props.history])

     return <div>Loading...</div>;
}

export default CallBack;