import * as React from 'react';
import { Container, Typography } from '@mui/material';
import { Carousel } from '../components';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)({
  position: 'relative',
  backgroundColor: '#ddd',
  height: '100%',
});;

export default class App extends React.Component {
  render() {
    return (
        <StyledContainer maxWidth="lg">
          <Carousel>
            <Typography variant="h1">What</Typography>
            <Typography variant="h1">Why</Typography>
            <Typography variant="h1">When</Typography>
            <Typography variant="h1">Who</Typography>
          </Carousel>
        </StyledContainer>
    );
  }
}
