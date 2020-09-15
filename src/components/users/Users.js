import React, { useContext } from 'react';
import UserItem from './UserItem';
import GithubContext from '../../context/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;

  if (loading) {
    return <div className="lds-hourglass"></div>;
  } else {
    return (
      <div style={usersStyle} className="row">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const usersStyle = {
  display: 'flex',
};

export default Users;
