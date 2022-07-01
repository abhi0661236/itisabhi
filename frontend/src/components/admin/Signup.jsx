import React from 'react';
import {TextField, Button} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';


import './styles/Signup.css';

function Signup() {
  return (
    <div className='signup-form-wrapper'>
        <form>
            <TextField label='Email' variant='filled' type='email' required />
            <TextField label='Username' variant='filled' required />
            <TextField label='Password' variant='filled' type='password' required />
            <TextField label='Confirm Password' variant='filled' type='password' required />
            <div>
                <Button type="submit" variant="contained" color="success">
                    Create Account
                </Button>
                <p>Or</p>
                <Button variant="contained" startIcon={<GoogleIcon />} color="error">
                    Continue with Google
                </Button>
                <p>Already have an account ? <Button component={Link} to='/admin' >Login</Button></p>
            </div>
        </form>
        </div>
  )
}

export default Signup