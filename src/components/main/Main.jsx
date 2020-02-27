import React from 'react';
import Article from '../article/Article';
import posts from '../../data/posts';
import './main.scss';

function Main() {
    const postData = posts.map(post => <Article key={post.id} title={post.title} content={post.content}
                                                date={post.date}/>);
    return (
        <main>
            {postData}
        </main>
    );
}

export default Main;