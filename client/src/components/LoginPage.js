import React from 'react'
import { Paper, RaisedButton, TextField } from 'material-ui'
import { cloneStateWith } from '../utils'

export class LoginPage extends React.Component{
	constructor(){
		super()
		this.state = { user: '', pass:'' }
	}
	
	login = async () => {
		let auth = await fetch(`/User/${this.state.user}/${this.state.pass}`)
		if(auth) this.props.passthrough()
	}
	
	updateUser = (user) => this.setState(cloneStateWith(this.state, {user:user}))
	updatePass = (pass) => this.setState(cloneStateWith(this.state, {pass:pass}))
	
	render(){
		return(<div>
        <Paper zDepth={ 1 } style={{ width: '30vw', marginLeft: '35vw', marginTop: '30vh', padding: '2em' }}>
            <TextField
                fullWidth={ true }
                floatingLabelText={ 'Username' }
            />
            <TextField
                fullWidth={ true }
                floatingLabelText={ 'Password' }
            />
            <RaisedButton label={ 'Sign in' } primary={ true } fullWidth={ true } style={{ marginBottom: '1vh' }} onClick={this.login}/>
            <RaisedButton label={ 'New User' } secondary={ true } fullWidth={ true }/>
        </Paper>
    </div>
)}