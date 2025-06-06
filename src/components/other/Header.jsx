import React, { useState, useEffect } from 'react';

export const Header = (props) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser && loggedInUser.data) {
      setUsername(loggedInUser.data.name);
    } else {
      setUsername(loggedInUser.data.name);
    }
  }, []);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username}</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small'
      >
        Log Out
      </button>
    </div>
  );
};
