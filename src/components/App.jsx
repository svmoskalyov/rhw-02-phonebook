import { Component } from 'react';
import { Box } from './Box';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Box width="420px" mx="auto" p={4}>
        React homework template
      </Box>
    );
  }
}
