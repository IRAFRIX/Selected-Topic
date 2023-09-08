import React, { useContext, useState } from 'react';
import { userContext } from './context';

export default function UserProfile() {
  const { user, setUser } = useContext(userContext);

  const contentStyle = {
    backgroundColor: '#ddd',
    textAlign: 'center',
    margin: 10,
    padding: 10
  };

  const onClickSignin = (event) => {
    event.preventDefault();
    setUser('YourUsername'); // Replace 'YourUsername' with the desired username
  };

  return (
    <div style={contentStyle}>
      {user ? (
        <span>Hello {user}</span>
      ) : (
        <span>
          Please{' '}
          <a href=" " onClick={onClickSignin}>
            Sign in
          </a>
        </span>
      )}
    </div>
  );
}
