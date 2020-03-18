import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { shell } from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const existedContactsInStorage = localStorage.getItem('contacts');
    if (existedContactsInStorage) {
      const contacts = JSON.parse(existedContactsInStorage);
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    const inputedName = contact.name;
    if (
      this.state.contacts.some(element => {
        return element.name === inputedName;
      })
    ) {
      return alert(`${inputedName} is alredy in contacts.`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
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

  removeContact = ContactId => {
    if (
      this.state.filter.length > 0 &&
      this.getVisibleContacts().length === 1
    ) {
      this.setState(() => {
        return {
          filter: '',
        };
      });
    }

    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== ContactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
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
    );
  }
}
