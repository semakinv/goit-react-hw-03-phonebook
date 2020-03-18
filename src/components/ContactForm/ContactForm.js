import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inputForm, addButton, inputLabel } from './ContactForm.module.css';

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
    return (
      <>
        <form className={inputForm} onSubmit={this.handleSubmit}>
          <label>
            {' '}
            <p className={inputLabel}>Name</p>
            <input
              required
              type="text"
              value={this.state.name}
              onChange={this.handleInputCange}
              name="name"
            />
          </label>
          <label>
            {' '}
            <p className={inputLabel}> Number</p>
            <input
              required
              placeholder="(097)111-11-11"
              pattern="[0-9 + -/(/)]+"
              type="text"
              value={this.state.number}
              onChange={this.handleInputCange}
              name="number"
            />
          </label>
          <section>
            <button className={addButton} type="submit">
              Add contact
            </button>
          </section>
        </form>
      </>
    );
  }
}
