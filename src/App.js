import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './createContact';

class App extends Component {
  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ],
    screen: 'list'

  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }));
  }

  onNavigate = () =>{
    this.setState({screen: 'create'})
  }

  render() {
    return (
      <div>
        {this.state.screen === 'list' && (
          <ListContacts onDeleteContact={this.removeContact} onNavigate={this.onNavigate} contacts={this.state.contacts}/>
        )}
        {this.state.screen ==='create' && (
          <CreateContact />
        )}
      
        
      </div>
    );
  }
}

export default App;
