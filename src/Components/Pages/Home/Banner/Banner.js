import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../../images/chair.png';
import bg from '../../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerbg = {
  background: `url(${bg})`,

}


const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 400
}



const Banner = () => {
  return (
    <Container style={bannerbg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item style={{ ...verticalCenter ,textAlign: 'left' }} xs={12} md={6}>
          <Box>
            <Typography variant="h3">
              Your New Smile  <br />
              Starts Here
            </Typography>
            <Typography variant="h6" sx={{ fontSize: 14, color: 'grey', fontWeight: 300, my: 5 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quis vero dicta eaque, voluptatibus facere ipsa asperiores, voluptates numquam, laudantium illum.
            </Typography>
            <Button sx={{ backgroundColor: 'info.main', fontWeight: 900, color: 'white', mt: 3 }}>Get Appointment</Button>
          </Box>
        </Grid>
        <Grid style={verticalCenter} item xs={12} md={6}>
          <img style={{ width: '350px' }} src={chair} alt="" />
        </Grid>

      </Grid>
    </Container>
  );
};

export default Banner;