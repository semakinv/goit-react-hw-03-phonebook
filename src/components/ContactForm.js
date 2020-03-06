import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputCange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { inputForm } = styles;
    return (
      <>
        <form className={inputForm} onSubmit={this.handleSubmit}>
          <label>
            {' '}
            <p>Name</p>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInputCange}
              name="name"
            />
          </label>
          <label>
            {' '}
            <p>Number</p>
            <input
              type="text"
              value={this.state.number}
              onChange={this.handleInputCange}
              name="number"
            />
          </label>
          <section>
            <button type="submit">Add contact</button>
          </section>
        </form>
      </>
    );
  }
}
