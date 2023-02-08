import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const item = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [item, ...contacts],
    }));
  };

  render() {
    return (
      <Box width="500px" mx="auto" p={4}>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <ContactList contacts={this.state.contacts} />
        </Section>
      </Box>
    );
  }
}
