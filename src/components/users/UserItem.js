import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card align-items-center">
        <img
          className="my-2 rounded-circle"
          src={avatar_url}
          alt={login}
          style={{ width: '60px' }}
        />
        <h2 className="h5">{login}</h2>
        <div>
          <Link className="btn btn-dark my-2" to={`/user/${login}`}>
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
