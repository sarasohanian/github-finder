import React from 'react';

const ReposItem = ({ repo }) => {
  return (
    <div className="card p-3 mt-2">
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
};

export default ReposItem;
