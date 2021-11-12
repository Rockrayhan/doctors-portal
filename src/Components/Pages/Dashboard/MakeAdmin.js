import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';


const MakeAdmin = () => {
        const [email , setEmail] = useState('') ;
        const [success, setSuccess] = useState(false) ;

        const handleOnBlur = e => {
            setEmail(e.target.value);
        }
    
        const handleAdminSubmit = e => {
            const user = {email};
            fetch('https://infinite-refuge-00897.herokuapp.com/users/admin', {
                method: 'PUT' ,
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res=> res.json())
            .then(data => {
               if (data.modifiedCount) {
                   console.log(data);
                   setSuccess(true) 
               }
                console.log(data);
            })
            e.preventDefault()
        }
    return (
        <div>
            <h2> Make an Admin </h2>
            <form onSubmit={handleAdminSubmit}> 
            <TextField sx={{width:"50%"}}
             id="standard-basic" 
            label="Email" 
            onBlur ={handleOnBlur}
            variant="standard" />
            <Button variant="contained"
             type="submit"
             >Make Admin</Button>

            </form>
            {success && <Alert severity="success">Admin made Successfully </Alert>
    }
        </div>
    );
};

export default MakeAdmin;