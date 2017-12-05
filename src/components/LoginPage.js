import React from 'react'
import { Paper, RaisedButton, TextField } from 'material-ui'

export const LoginPage = () =>  (
    <div>
        <Paper zDepth={ 1 } style={{ width: '30vw', marginLeft: '35vw', marginTop: '30vh', padding: '2em' }}>
            <TextField
                fullWidth={ true }
                floatingLabelText={ "Username" }
            />
            <TextField
                fullWidth={ true }
                floatingLabelText={ "Password" }
            />
            <RaisedButton label={ "Sign in" } primary={ true } fullWidth={ true }/>
            <RaisedButton label={ "New User" } secondary={ true } fullWidth={ true }/>
        </Paper>
    </div>
)