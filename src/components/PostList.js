import React, { Component } from 'react';

import Post from './Post';

import '../styles/PostList.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Lucas Calixto',
          avatar: 'https://avatars1.githubusercontent.com/u/52639831?v=4'
        },
        date: '04 Jun 2019',
        content: 'A terra é plana mesmo?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Plínio Helpa',
              avatar: 'https://avatars1.githubusercontent.com/u/17049866?v=4'
            },
            content: "Liguei para o meu amigo, mas ele não estava em casa. Seu cachorro também não pode atender pois estava ocupado com seus afazeres."
          },
          {
            id: 2,
            author: {
              name: 'Plínio Helpa',
              avatar: 'https://avatars1.githubusercontent.com/u/17049866?v=4'
            },
            content: "Mas tudo bem, ele é um bom amigo."
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Lucas Calixto',
          avatar: 'https://avatars1.githubusercontent.com/u/52639831?v=4'
        },
        content: "O que é um pato com tendencias assassinas?",
        date: '10 Jun 2019',
        comments: [
          {
            id: 1,
            author: {
              name: 'Lucas Calixto',
              avatar: 'https://avatars1.githubusercontent.com/u/52639831?v=4'
            },
            content: "Um psicopato"
          },
        ],
      },
    ]
  };

  render() {
    return(
      <>
      <div className="post-list-container">
        <div className="post-list">
          <ul className="list">
            {this.state.posts.map(post => 
              <Post 
                key={post.id}
                data={post}
              /> 
            )}
          </ul>
        </div>
      </div>
      </>
    );
  }
}

export default PostList;