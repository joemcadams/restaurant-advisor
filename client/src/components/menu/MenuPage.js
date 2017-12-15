import React from 'react'
import { clone, cloneDeep } from 'lodash'
import { cloneStateWith, group } from '../../utils'
import { RestaurantTitle } from '../restaurant/RestaurantTitle'
import { MenuOrderDialog } from './MenuOrderDialog'
import { MenuItem } from './MenuItem'

export class MenuPage extends React.Component {
    
    constructor(props) {
        super()
        this.state = {
            orderItemModalOpen: false,
            editItemModalOpen: false,
            menuID: NaN,
            menu: [],
            order: {
                items: [],
                totalPrice: 0.0
            }
        }
    }

    componentDidMount = async () => {
    	
    	let response = await fetch('/Restaurants')
    	let restaurants = await response.json()
    	let restaurant = restaurants.find(rest => rest.name === this.props.restaurant)
    	
        this.setState({
            orderItemModalOpen: this.state.orderItemModalOpen,
            editItemModalOpen: this.state.editItemModalOpen,
            menuID: this.state.menuID,
            menu: restaurant.menu.food.map((item, i) => {
                return {
                    id: i,
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    category: item.category
                }
            }),
            order: this.state.order
        })
    }

    openDialog = id => this.setState(cloneStateWith(this.state, { orderItemModalOpen: true, menuID: id }))

    handleOrderClick = (quantity, isDelivery) => {
        const newOrderItem = cloneStateWith(cloneDeep(this.state.menu[this.state.menuID]), { quantity: quantity, delivery: isDelivery })
        let orderItems = cloneDeep(this.state.order.items)
        orderItems.push(newOrderItem)
        let updatedPrice = clone(this.state.order.totalPrice) 
        updatedPrice += (newOrderItem.price * quantity)
        this.setState(cloneStateWith(this.state, {
            orderItemModalOpen: false,
            menuID: this.state.menuID,
            menu: this.state.menu,
            order: {
                items: orderItems,
                totalPrice: updatedPrice 
            }
        }))
        this.props.updateOrderPage(orderItems, updatedPrice)
    }

    getMenu = () => group(this.state.menu).by('category').map((item, i) => {
        const menuItem = 
            <MenuItem
                key={ i }
                id={ item.id }
                title={ item.name }
                price={ item.price }
                description={ item.description }
                handleOrder={ this.openDialog }
            />
        return i === 0 || item.category !== this.state.menu[i - 1].category // Item is first in menu or has different category from previous item
            ? (
                <div key={ i }>
                    <h1 style={{ textAlign: 'center' }}>{ item.category }</h1>
                    { menuItem }
                </div>
            )
            : menuItem
    })

    render = () => (
        <div>
            <RestaurantTitle name={this.props.restaurant}/>
            { this.getMenu() }
            { this.state.orderItemModalOpen 
                ?  <MenuOrderDialog
                        title={ this.state.menu[this.state.menuID].title }
                        price={ this.state.menu[this.state.menuID].price }
                        handleOrderClick={ this.handleOrderClick.bind(this) }
                        handleClose={ () => this.setState(cloneStateWith(this.state, { orderItemModalOpen: false })) }
                        isOpen={ this.state.orderItemModalOpen }
                        onRequestClose={ () => this.setState(cloneStateWith(this.state, { orderItemModalOpen: false })) }
                        description={ this.state.menu[this.state.menuID].description }
                    />
                :   <div/>
            }
        </div>
    )
}