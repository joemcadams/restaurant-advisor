import React from 'react'
import { Paper, RaisedButton, TextField } from 'material-ui'
import { cloneStateWith } from '../utils'

export class LoginPage extends React.Component{
	constructor(){
		super()
		this.state = { user: '', pass:'' }
	}
	
	login = async () => {
		let response = await fetch(`/Users/${this.state.user}/${this.state.pass}`, {method: 'GET'})
		let auth = await response.json()
		if(auth) this.props.passthrough(this.state.user)
	}
	
	updateUser = (user) => this.setState(cloneStateWith(this.state, {user:user.target.value}))
	updatePass = (pass) => this.setState(cloneStateWith(this.state, {pass:pass.target.value}))
	
	render = () => (<div>
        <Paper zDepth={ 1 } style={{ width: '30vw', marginLeft: '35vw', marginTop: '30vh', padding: '2em' }}>
            <TextField
                fullWidth={ true }
                floatingLabelText={ 'Username' }
            	value={this.state.user}
            	onChange={this.updateUser}
            />
            <TextField
                fullWidth={ true }
                floatingLabelText={ 'Password' }
            	value={this.state.pass}
        		onChange={this.updatePass}
            />
            <RaisedButton label={ 'Sign in' } primary={ true } fullWidth={ true } style={{ marginBottom: '1vh' }} onClick={this.login}/>
            <RaisedButton label={ 'New User' } secondary={ true } fullWidth={ true }/>
        </Paper>
    </div>
	)
}