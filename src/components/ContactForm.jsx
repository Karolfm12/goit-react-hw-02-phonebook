import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleOnChange = (e, type) => {
    if (type === 'text') {
      this.setState({ name: e.target.value });
    }
    if (type === 'tel') {
      this.setState({ number: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    // Assuming 'contacts' is defined in the parent component's state
    this.props.onSubmit({ name: this.state.name, tel: this.state.number });

    // Reset the form fields after submission
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <h3>Name</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={e => this.handleOnChange(e, 'text')}
            // required
          />
          <h3>Phone</h3>
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={e => this.handleOnChange(e, 'tel')}
            required
          ></input>
          <br></br>
          <button type="submit">Add Contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
