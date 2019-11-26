import React, {Component} from 'react';


class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            number: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Number</label>
                <input
                    type="text"
                    name="number"
                    value={number}
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
