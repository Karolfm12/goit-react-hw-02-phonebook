import { Component } from 'react';

class App extends Component {
  state = { contacts: [], name: '', number: '' };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, this.state.name],
    }));
  };

  handleOnChange = e => {
    this.setState({ name: e.target.value });
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
            onChange={this.handleOnChange}
            // required
          />
          <input type="tel"></input>

          <button type="submit">Add Contact</button>
        </form>

        <h1>Contacts</h1>
        <ul>
          {this.state.contacts.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
