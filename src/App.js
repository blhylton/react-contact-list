import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './ListContacts';
import CreateContact from './createContact';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount () {
    ContactsAPI.getAll().then((contacts) =>
     this.setState({ contacts })
    )
  }

  removeContact = (contact) => {
    ContactsAPI.remove(contact)
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }));
  }

  render() {
    return (
      <div>
        <Route path="/" exact render={() => (
          <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
        )} />
        
        <Route path="/create" component={CreateContact}/>    
        
      </div>
    );
  }
}

export default App;
