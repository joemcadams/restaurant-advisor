import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' // configures the default styling of material-ui 
                                                                   // components further down the component tree
import { NavBar } from './NavBar'
import { LoginPage } from './LoginPage'
import { MenuPage } from './menu/MenuPage'
import { RestaurantPage } from './restaurant/RestaurantPage'

export class App extends React.Component{

	constructor(){
		super()
		this.state = { page: 'Login' }
	}
	
	changePage = (page) => {
		this.setState({page: page})
	}
	
	passthroughLogin = () => {this.setState({page:'Restaurant'})}
	
	render(){
		return(
			<MuiThemeProvider>
				{this.state.page === 'Login' ? <div /> : <NavBar />}
				{(this.state.page === 'Login') 
					? <LoginPage passthrough={this.passthroughLogin}/>
					: (this.state.page === 'Menu')
						? <MenuPage/>
						: (this.state.page === 'Restaurant')
							? <RestaurantPage />
							: <div />
				}
			</MuiThemeProvider>
	)}
}