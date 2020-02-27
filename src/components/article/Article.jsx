import React, {Component} from 'react';
import './article.scss';


class Article extends Component{
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.likeClick = this.likeClick.bind(this)
    }

    likeClick() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            <article className="article">
                <h2 className="article--title">{ this.props.title }</h2>
                <p className="article--date">{ this.props.date }</p>
                <p>Like: {this.state.counter}</p>
                <a onClick={this.likeClick} href="#">Like</a>
                <p className="article--content">{ this.props.content }</p>
                <a href="#"> Read more...</a>
            </article>
        )
    }

}

export default Article;