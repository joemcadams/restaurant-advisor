import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' // configures the default styling of material-ui 
                                                                   // components further down the component tree
import { NavBar } from './NavBar'
import { LoginPage } from './LoginPage'
import { MenuPage } from './menu/MenuPage'
import { RestaurantPage } from './restaurant/RestaurantPage'
import { OrderPage } from './order/OrderPage'
import { match, cloneStateWith } from '../utils'

export class App extends React.Component{

	constructor(){
		super()
		this.state = { 
			page: 'Login', 
			restaurant: '',
			customer:'',
			order: {
				date: new Date(),
				isDelivery: false,
				isTakeOut: false,
				order: []
			},
			price: 0,
		}
	}
	
	changePage = (page) => {
		this.setState(cloneStateWith(this.state, {page: page}))
	}
	
    passthroughLogin = (customer) => {
    	this.changePage('Restaurant')
    	this.setState(cloneStateWith(this.state, {customer: customer}))
    }
    
    logout = async () => { 
        let response = await fetch('Restaurants')
        let restaurants = await response.json()
        console.log(restaurants)
        this.changePage('Login') 
    }
	
    openMenuForRestaurant = (rest) => {
    	this.setState(cloneStateWith(this.state, {page: 'Menu', restaurant: rest}))
    }
    
    goToOrderPage = () =>{
    	this.setState(cloneStateWith(this.state, {page: 'Order'}))
    }

	backToRestaurants = () => {
		this.setState(cloneStateWith(this.state, {page: 'Restaurant'}))
	}

	updateOrderPage = (items, price, takeout, delivery) => {
		this.setState(cloneStateWith(this.state, {order: cloneStateWith(this.state.order, {order:items, isDelivery:delivery, isTakeOut:takeout}), price: price}))
	}
    
	render = () => (
			<MuiThemeProvider>
				<div>
					{this.state.page === 'Login' 
						? <div /> 
						: <NavBar 
							onLogout={ () => this.logout.bind(this) } 
							menuPage={this.state.page === 'Menu'}
							goToOrderPage={this.goToOrderPage}
						/>
					}
					{match(this.state.page)
						.addCase('Login', <LoginPage passthrough={this.passthroughLogin} />)
						.addCase('Menu', <MenuPage restaurant={this.state.restaurant} updateOrderPage={this.updateOrderPage}/>)
						.addCase('Restaurant', <RestaurantPage openMenu={this.openMenuForRestaurant} customer={this.state.customer}/>)
						.addCase('Order', <OrderPage totalPrice={this.state.price} order={this.state.order} restaurant={this.state.restaurant} backToRestaurants={this.backToRestaurants}/>)
						.setDefault(<div />)
						.result()
					}
				</div>
			</MuiThemeProvider>
	)
}