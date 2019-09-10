import React from 'react';

import Comment from './Comment';

import '../styles/Post.css';

function Post({ data }) {
    return(
      <li>
        <div className="post">
          <div className="user-data">
            <img className="avatar" src={data.author.avatar} />
            <div className="user-date">
              <strong className="user-name">{data.author.name}</strong>
              <p className="date">{data.date}</p>
            </div>
          </div>
            <div className="content">
              <p>{data.content}</p>
            </div>
          <div className="comments" >
            <ul className="comment-list">
              {data.comments.map(comment => 
                <Comment 
                  key={comment.id}
                  data={comment}
                />
              )}
            </ul>
          </div>
        </div>
      </li>
    );
}

export default Post;