import { Component } from 'react';

class App extends Component {
  state = { contacts: [], name: '', number: '', filter: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: this.state.name, tel: this.state.number },
      ],
      name: '',
      number: '',
    }));
  };

  handleOnChange = (e, type) => {
    if (type === 'text') {
      this.setState({ name: e.target.value });
    }
    if (type === 'tel') {
      this.setState({ number: e.target.value });
    }
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
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
        <h1>Contacts</h1>
        <h3>Find contacts by name</h3>
        <input type="filter" />
        <ul>
          {this.state.contacts.map((value, index) => (
            <li key={index}>
              {value.name}: {value.tel}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
