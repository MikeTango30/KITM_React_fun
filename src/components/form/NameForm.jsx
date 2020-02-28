import React, {Component} from 'react';
import './nameForm.scss';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(value)
        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        alert('Name: ' + this.state.name + ' Email: ' + this.state.email);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Email:
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Go!" />
            </form>
        );
    }
}


export default NameForm;