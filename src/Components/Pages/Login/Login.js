import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink , useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth()

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location , history  )  ;

        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location , history)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 20, boxShadow: 3, height: '400px', boxShadow: '5px 3px 6px 6px #00e5ff' }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>

    <form onSubmit={handleLoginSubmit}>
        <TextField
            sx={{ width: '75%', m: 1 }}
            id="standard-basic"
            label="Your Email"
            variant="standard"
            name="email"
            onBlur={handleOnChange}
        /> <br />

        <TextField
            sx={{ width: '75%', m: 1 }}
            id="standard-basic"
            label="Your password"
            type="password"
            variant="standard"
            name="password"
            onBlur={handleOnChange}
        />

        
        <br />
        <Button sx={{ width: '75%', mt: 3 }} variant="contained" type="sumbit">Login</Button>
        <br />
        <NavLink style={{textDecoration:"none"}} to="/register"> <Button variant="text"> New User ? please Register</Button> </NavLink>
    </form>
    <p> ================================= </p>

    <Button onClick={handleGoogleSignIn} sx={{ width: '75%', mt: 3 }} variant="contained" type="sumbit">Google Sign In</Button>

    {isLoading && <CircularProgress />}
    {user?.email && <Alert severity="success">Login Successfully </Alert>
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

export default Login;