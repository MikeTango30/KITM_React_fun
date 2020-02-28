import React, {Component} from 'react';
import './search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Keyword: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Search:
                    <input type="text" value={this.state.search} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Go!" />
            </form>
        );
    }
}

export default Search;