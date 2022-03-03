import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './login.css';
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      //padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        //margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        //margin: theme.spacing(2),
      },
    },
  }));
  
export default function Login() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {}
    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </div>
        </form>
    )
}