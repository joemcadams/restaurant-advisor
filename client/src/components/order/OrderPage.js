import * as React from 'react'
import { RaisedButton } from 'material-ui'

const sendOrder = (restaurant, order, backToRestaurants) => {
	fetch(
			`/Order/${restaurant}`, 
			{
				method:'POST', 
				body: order,
				headers: {
					"Content-Type": "application/json"
				}
			})
	backToRestaurants()		
}

export const OrderPage = (props) => (
	<div>
		{props.order.order.map(item => <div>{item.name} - {item.price}</div>)}
		<div>{props.totalPrice}</div>
		<RaisedButton label={'Place Order'} onClick={() => {sendOrder(props.restaurant, JSON.stringify(props.order), props.backToRestaurants)}} />
	</div>
)