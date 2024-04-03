import { Component } from 'react';
class App extends Component {
  state = { contacts: [], filter: '', name: '', number: '' };

  handleSubmit = e => {
    e.preventDefault();

    const isDuplicate = this.state.contacts.some(
      contact => contact.name === this.state.name
    );
    if (!isDuplicate) {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { name: this.state.name, tel: this.state.number },
        ],
        name: '',
        number: '',
        filter: '',
      }));
    } else {
      alert('Ten kontakt już istnieje');
    }
  };

  handleOnChange = (e, type) => {
    if (type === 'text') {
      this.setState({ name: e.target.value });
    }
    if (type === 'tel') {
      this.setState({ number: e.target.value });
    }
    if (type === 'filter') {
      this.setState({ filter: e.target.value });
    }
  };

  handleDelete = index => {
    const updatedContacts = [...this.state.contacts];
    updatedContacts.splice(index, 1);

    // Update the state with the new contacts array
    this.setState({ contacts: updatedContacts });
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
        <ul>
          {this.state.contacts.map((value, index) => (
            <li key={index}>
              {value.name}: {value.tel}
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          value={this.state.filter}
          onChange={e => this.handleOnChange(e, 'filter')}
        />
        {this.state.filter && (
          <ul>
            {this.state.contacts
              .filter(value =>
                value.name
                  .toLowerCase()
                  .includes(this.state.filter.toLowerCase())
              )
              .map((value, index) => (
                <li key={index}>
                  {value.name}: {value.tel}
                  <button onClick={() => this.handleDelete(index)}>
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        )}
      </>
    );
  }
}

export default App;
