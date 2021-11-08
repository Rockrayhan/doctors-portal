import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import login from '../../../../images/login.png';

const Register = () => {

    const [loginData, setLoginData] = useState({})
    const location = useLocation();
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = e => {
        e.preventDefault();
        // console.log(loginData.password , loginData.password2);
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did Not Match');
            return
        }
        // console.log(loginData.email);
        registerUser(loginData.email, loginData.password , loginData.name , history  );

    };

    return (
        <Container>
<Grid container spacing={2}>
    <Grid sx={{ mt: 20, boxShadow: 3, height: '400px', boxShadow: '5px 3px 6px 6px #00e5ff' }} item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
            Register
        </Typography>

{!isLoading && <form onSubmit={handleLoginSubmit}>
    <TextField
        sx={{ width: '75%', m: 1 }}
        id="standard-basic"
        label="Your Name"
        variant="standard"
        name="name"
        onBlur={handleOnBlur}
    /> <br />
    <TextField
        sx={{ width: '75%', m: 1 }}
        id="standard-basic"
        label="Your Email"
        type="email"
        variant="standard"
        name="email"
        onBlur={handleOnBlur}
    /> <br />

    <TextField
        sx={{ width: '75%', m: 1 }}
        id="standard-basic"
        label="Your password"
        type="password"
        variant="standard"
        name="password"
        onBlur={handleOnBlur}
    />
    <TextField
        sx={{ width: '75%', m: 1 }}
        id="standard-basic"
        label="Confirm Your password"
        type="password"
        variant="standard"
        name="password2"
        onBlur={handleOnBlur}
    />


    <br />
    <Button sx={{ width: '75%', mt: 3 }} variant="contained" type="sumbit">Register</Button>
    <br />
    <NavLink style={{ textDecoration: "none" }} to="/login"> <Button variant="text"> Already Registered ? Please Login</Button> </NavLink>
        </form>}

        {isLoading && <CircularProgress />}
        {user?.email && <Alert severity="success">Successfully Registered...!!!</Alert>
        }

        {authError && <Alert severity="error">{authError}</Alert>
        }

    </Grid>
    <Grid item xs={12} md={6}>
        <img src={login} alt="" style={{ width: "100%" }} />
    </Grid>

            </Grid>
        </Container>
    );
};

export default Register;