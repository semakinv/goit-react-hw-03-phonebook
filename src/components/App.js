import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => {
      const inputedName = contact.name;
      if (inputedName) {
        function isNamePresent(element) {
          if (element.name === inputedName) {
            return true;
          }
          return false;
        }

        if (this.state.contacts.find(isNamePresent)) {
          return alert(`${inputedName} is alredy in contacts.`);
        }

        return {
          contacts: [...prevState.contacts, contact],
        };
      }
    });
  };

  removeContact = ContactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== ContactId),
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { shell } = styles;
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <div className={shell}>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.addContact} />
          <h2>Contacts</h2>
          {this.state.contacts.length > 1 && (
            <Filter value={filter} onChangeFilter={this.changeFilter} />
          )}
          {visibleContacts.length > 0 && (
            <ContactList
              contacts={visibleContacts}
              onRemoveContact={this.removeContact}
            />
          )}
        </div>
      </>
    );
  }
}
