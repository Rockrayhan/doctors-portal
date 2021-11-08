import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../../images/doctor.png';
import bg from '../../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';
import { color } from '@mui/system';

const appointmentbanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(56, 60, 100, 0.859)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150

};

const AppointmentBanner = () => {
    return (
        <Box style={appointmentbanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: "-110px" }} src={doctor} alt="" />
                </Grid>
                
                    <Grid item xs={12} md={6} sx={{
                         
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        textAlign:'left' 
                    }} >

                        <Box>
                        <Typography variant="h5" sx={{ color: 'info.main', fontWeight: 900
                    }}>
                            Appointment
                        </Typography>
                        <Typography sx={{ mt: 3, mb:3 }} variant="h4" style={{ fontWeight: '900', color: 'white' }}>
                            Make an appointment Today
                        </Typography>
                        <Typography variant="p" style={{ color: 'white' }}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium recusandae dignissimos commodi iusto ea incidunt rem blanditiis rerum ratione quam necessitatibus aperiam vel, tempora natus.
                        </Typography>
                        <br />
                        <Button sx={{ mt: 6 ,backgroundColor: 'info.main', fontWeight: 900}} variant="contained">Learn more</Button>
                    
                    </Box>
                    </Grid>
               

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;