import { ImUserMinus } from 'react-icons/im';
import { List, Item } from './ContactList.styled';
import { Button } from 'components/Button/Button';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button icon={ImUserMinus} onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
