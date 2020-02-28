import React, {Component} from 'react';
import Place from '../place/Place';
import Article from '../article/Article';
import posts from '../../data/posts';
import './main.scss';
import NameForm from "../form/NameForm";

class Main extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         places: []
    //     }
    // }

    // componentDidMount() {
    //     fetch("https://api.meteo.lt/v1/places")
    //         .then(response => response.json())
    //         .then(data => {
    //                 this.setState({
    //                     places: data
    //                 });
    //             }
    //         )
    // }

    render() {
        const postData = posts.map(post => <Article key={post.id} title={post.title} content={post.content}
                                                    date={post.date}/>);
        // const placeData = this.state.places.map(place => <Place name={place.name}/>);

        return (
            <main>
                {postData}
                {/*{placeData}*/}
                {/*<NameForm/>*/}
            </main>
        );
    }

}

export default Main;