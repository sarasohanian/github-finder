import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Repos from './Repos';

import GithubContext from '../../context/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, getRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    login,
    bio,
    blog,
    name,
    company,
    avatar_url,
    hireable,
    html_url,
    location,
    followers,
    following,
    public_gists,
    public_repos,
  } = user;

  if (loading) {
    return <div className="lds-hourglass"></div>;
  }
  return (
    <Fragment>
      <Link className="btn btn-light" to="/">
        Back To Search
      </Link>
      <span className="ml-3">
        Hireable :{' '}
        {hireable ? (
          <i className="fa fa-check text-success"></i>
        ) : (
          <i className="fa fa-times text-danger"></i>
        )}
      </span>
      <div className="card py-4 mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="flex-column d-flex align-items-center">
              <img
                className="rounded-circle"
                src={avatar_url}
                alt={`${login} img`}
                style={{ width: '150px' }}
              />
              <span className="my-2">{name}</span>
              {location ? <span>{location}</span> : null}
            </div>
          </div>
          <div className="col-md-6">
            {bio && (
              <div>
                <strong>Bio :</strong>
                <p>{bio}</p>
              </div>
            )}
            <a className="btn btn-dark" href={html_url}>
              Visit Github Page
            </a>
            <p className="mb-1 mt-3">
              <strong>Login : </strong> {login}
            </p>
            <p className="mb-1">
              <strong>Company : </strong> {company}
            </p>
            <p className="mb-1">
              <strong>Website : </strong> {blog}
            </p>
          </div>
        </div>
      </div>
      <div className="card py-3 mt-2">
        <div className="d-flex justify-content-center">
          <span className="badge badge-danger mx-2 p-2">
            Followers : {followers}
          </span>
          <span className="badge badge-success mx-2 p-2">
            Following : {following}
          </span>
          <span className="badge badge-primary mx-2 p-2">
            Public Repos : {public_repos}
          </span>
          <span className="badge badge-dark mx-2 p-2">
            Public Gists : {public_gists}
          </span>
        </div>
      </div>
      <Repos />
    </Fragment>
  );
};

export default User;
