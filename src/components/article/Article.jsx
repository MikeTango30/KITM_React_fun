import React from 'react';
import './article.scss';

function article() {
    return (
        <div className="article">
            <h2 className="article article--title">Article title</h2>
            <p className="article article--content">article content</p>
            <p className="article article--date">article date</p>
        </div>
    )
}

export default article;