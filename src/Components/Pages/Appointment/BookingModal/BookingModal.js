import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Booking from '../Appointment/Booking/Booking';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'whitesmoke',
    border: '2px solid #000',
    boxShadow: 50,
    p: 4,
};




const BookingModal = ({ openBooking, handleBookingClose, booking, date , setBookingSuccess }) => {
    const { user } = useAuth();
    const { name, time } = booking;

    
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value ;
        setBookingInfo(newInfo);
    }



    const handleBookingSubmitting = e => {
        
        // collect data 
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // send data to server
        fetch('https://infinite-refuge-00897.herokuapp.com/appointments', {
            method: 'POST' , 
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
            
            if (data.result.insertedId) {
                
                setBookingSuccess(true) ;
                
            }
            
        });
        handleBookingClose();
        e.preventDefault();
    }


    return (
        <Modal
            open={openBooking}
            onClose={handleBookingClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
<Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
        {name}
    </Typography>
    <form onSubmit={handleBookingSubmitting}>
        <TextField
            disabled
            sx={{ width: '95%', m: 1 }}
            id="outlined-size-small"
            defaultValue={time}
            size="small"
        />
        <TextField
            sx={{ width: '95%', m: 1 }}
            id="outlined-size-small"
            name="patientName"
            onBlur={handleOnBlur}
            defaultValue={user.displayName}
            size="small"
        />
        <TextField
            sx={{ width: '95%', m: 1 }}
            id="outlined-size-small"
            name="email"
            onBlur={handleOnBlur}
            defaultValue={user.email}
            size="small"
        />
        <TextField
            sx={{ width: '95%', m: 1 }}
            id="outlined-size-small"
            name="phone"
            onBlur={handleOnBlur}
            defaultValue="Phone Number"
            size="small"
        />
        <TextField
            disabled
            sx={{ width: '95%', m: 1 }}
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
        />
        <Button style={{ marginLeft: '30%' }} type="submit" variant="contained">Book Appointment</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;