import * as React from 'react';
import { Container } from '@mui/material';
import { Carousel } from '../components';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)({
  position: 'relative',
  height: 'auto',
  backgroundColor: 'antiquewhite',
  width: 1000,
});

export default class App extends React.Component {
  render() {
    return (
      <StyledContainer maxWidth="lg">
        <Carousel>
          <img src="https://picsum.photos/id/237/1000/600" />
          <img src="https://picsum.photos/id/238/1000/600" />
          <img src="https://picsum.photos/id/239/1000/600" />
          <img src="https://picsum.photos/id/240/1000/600" />
          <img src="https://picsum.photos/id/241/1000/600" />
          <img src="https://picsum.photos/id/242/1000/600" />
          <img src="https://picsum.photos/id/243/1000/600" />
          <img src="https://picsum.photos/id/244/1000/600" />
          <img src="https://picsum.photos/id/247/1000/600" />
          <img src="https://picsum.photos/id/248/1000/600" />
          <img src="https://picsum.photos/id/249/1000/600" />
          <img src="https://picsum.photos/id/250/1000/600" />
          <img src="https://picsum.photos/id/251/1000/600" />
          <img src="https://picsum.photos/id/252/1000/600" />
          <img src="https://picsum.photos/id/253/1000/600" />
          <img src="https://picsum.photos/id/254/1000/600" />
        </Carousel>
      </StyledContainer>
    );
  }
}
