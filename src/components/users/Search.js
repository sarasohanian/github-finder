import React, { useState, useContext } from 'react';
import GithubContext from '../../context/githubContext';

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const onChangeHandler = (e) => setText(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setText('');
    if (text.trim() !== '') {
      githubContext.searchUsers(text);
      setShowAlert(false);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {showAlert && (
        <div className="alert alert-danger">
          <i className="fa fa-info-circle mr-2"></i>
          Please enter something
        </div>
      )}
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for users"
          value={text}
          name="text"
          onChange={onChangeHandler}
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          className="btn btn-dark btn-block"
          value="Search"
        />
      </div>
      {githubContext.users.length > 0 && (
        <div className="form-group">
          <button
            onClick={() => githubContext.clearUsers()}
            type="button"
            className="btn btn-light btn-block"
          >
            Clear Users
          </button>
        </div>
      )}
    </form>
  );
};

export default Search;
