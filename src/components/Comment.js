import React from 'react';

import '../styles/Comment.css';

function Comment({ data }) {
  return(
    <li className="comment-item">
      <div className="comment-container">
        <img className="comment-avatar" src={data.author.avatar}/>
        <div className="comment">
          <p>
            <strong>{data.author.name}</strong>
            {data.content}
            </p>
        </div>
      </div>
    </li>
  );
}

export default Comment;