import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Appointment/Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10.05 AM - 11.30 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00 PM - 6:30 PM ',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '07.00 AM - 8:30 AM',
        space: 5,
    },
    {
        id: 5,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 8,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '08.00 AM - 09.00 AM',
        space: 7,
    }
]





const AppointmentHeader = ({ date }) => {
    return (
        <Container>
            <Typography variant='h4' style={{ color: '#00e5ff', fontWeight: 600 }}> Available date {date.toDateString()} </Typography>
            <Grid container spacing={2}>
               {
                   bookings.map(booking=> <Booking
                   key={booking.id}
                   booking={booking}
                   date={date}
                   > 
                       
                        </Booking>)
               }
                
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;