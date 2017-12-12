import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' // configures the default styling of material-ui 
                                                                   // components further down the component tree
import { NavBar } from './NavBar'
import { LoginPage } from './LoginPage'
import { MenuPage } from './menu/MenuPage'
import { RestaurantPage } from './restaurant/RestaurantPage'
import { match, cloneStateWith } from '../utils'

export class App extends React.Component{

	constructor(){
		super()
		this.state = { page: 'Login', restaurant: '' }
	}
	
	changePage = (page) => {
		this.setState(cloneStateWith(this.state, {page: page}))
	}
	
    passthroughLogin = () => this.changePage('Restaurant')
    
    logout = () => this.changePage('Login') 
	
    openMenuForRestaurant = (rest) => {
    	this.setState(cloneStateWith(this.state, {page: 'Menu', restaurant: rest}))
    }
    
	render(){
		return(
			<MuiThemeProvider>
			<div>
				{this.state.page === 'Login' ? <div /> : <NavBar onLogout={ () => this.logout.bind(this) }/>}
				{match(this.state.page)
					.addCase('Login', <LoginPage passthrough={this.passthroughLogin} />)
					.addCase('Menu', <MenuPage restaurant={this.state.restaurant} />)
					.addCase('Restaurant', <RestaurantPage openMenu={this.openMenuForRestaurant}/>)
					.setDefault(<div />)
					.result()
				}
				</div>
			</MuiThemeProvider>
	)}
}