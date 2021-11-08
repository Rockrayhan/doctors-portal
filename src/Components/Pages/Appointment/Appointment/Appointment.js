import React from 'react';
import Navigation from '../../../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            
            <AvailableAppointments date={date} setDate={setDate}></AvailableAppointments>
            <AppointmentHeader date={date}></AppointmentHeader>
            
        </div>
    );
};

export default Appointment;