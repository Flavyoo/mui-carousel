import * as React from 'react';
import { Container, Typography } from '@mui/material';
import { Carousel } from '../components';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)({
  position: 'relative',
  height: 'auto',
  backgroundColor: 'antiquewhite',
});

export default class App extends React.Component {
  render() {
    return (
      <StyledContainer maxWidth="lg">
        <Carousel>
          <img src="https://picsum.photos/id/237/500/300" />
          <img src="https://picsum.photos/id/238/500/300" />
          <img src="https://picsum.photos/id/239/500/300" />
          <img src="https://picsum.photos/id/240/500/300" />
        </Carousel>
      </StyledContainer>
    );
  }
}
