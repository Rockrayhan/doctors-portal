import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../../BookingModal/BookingModal';

const Booking = ({ booking , date}) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    const { name, time, space } = booking;
    return (
        <> 
        <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ py: 5 }} elevation={3}>
                <Typography gutterBottom component="div" style={{ color: '#00e5ff', fontWeight: 500 }} variant="h5">
                    {name}
                </Typography>
                <Typography gutterBottom component="div" style={{ color: '#00e5ff' }} variant="h6">
                    {time}
                </Typography>

                <Typography style={{ fontWeight: 600 }} variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
                </Typography>
                <Button onClick={handleBookingOpen} style={{ backgroundColor: '#00e5ff' , color : 'white' ,fontWeight: 800 , marginTop:'20px' }} variant="contained">Book Appointment</Button>
            </Paper>
        </Grid>
        <BookingModal
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        date={date}
        >

        </BookingModal>
         </>
    );
};

export default Booking;