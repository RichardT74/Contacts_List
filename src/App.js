import React, {Component} from 'react';
import Contacts from './components/contacts';
import Form from './Form';

class App extends Component {
  render() {
      return (
        <div className="container">
          <Contacts contacts={this.state.contacts} />
          <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
        </div>
      )
  }

  state = {
      contacts: []
  };

  componentDidMount() {
      fetch('http://localhost:3000/posts/')
          .then(res => res.json())
          .then((data) => {
              this.setState({ contacts: data })
          })
          .catch(console.log)
  }
}

export default App;
