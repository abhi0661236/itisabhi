import React from 'react';
import { TextField, Button } from '@mui/material';
import {Link} from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';


import './styles/Login.css';




function Login() {
    return (
        <form>
            <TextField label='Username' variant='filled' required />
            <TextField label='Password' variant='filled' type='password' required />
            <div>
                <Button type="submit" variant="contained" color="success">
                    Login
                </Button>
                <p>Or</p>
                <Button variant="contained" startIcon={<GoogleIcon />} color="error">
                    Continue with Google
                </Button>
                <p>Don't have an account <Link path='/signup'>Create One</Link></p>
            </div>
        </form>
    )
}

export default Login;