import * as React from 'react';
import { Container } from '@mui/material';
import { Carousel } from '../components';

export default class App extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Carousel>
          <h1>Hello World</h1>
        </Carousel>
      </Container>
    );
  }
}
