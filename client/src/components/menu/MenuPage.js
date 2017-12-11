import React from 'react'
import { clone, cloneDeep } from 'lodash'
import { cloneStateWith, group } from '../../utils'
import { RestaurantTitle } from '../restaurant/RestaurantTitle'
import { MenuOrderDialog } from './MenuOrderDialog'
import { MenuItem } from './MenuItem'
import * as MENU_ITEMS from '../../SAMPLE_MENU.json'

export class MenuPage extends React.Component {
    
    constructor() {
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

    componentDidMount() {
        this.setState({
            orderItemModalOpen: this.state.orderItemModalOpen,
            editItemModalOpen: this.state.editItemModalOpen,
            menuID: this.state.menuID,
            menu: MENU_ITEMS.items.map((item, i) => {
                return {
                    id: i,
                    title: item.title,
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
    }

    getMenu = () => group(this.state.menu).by('category').map((item, i) => {
        const menuItem = 
            <MenuItem
                key={ i }
                id={ item.id }
                title={ item.title }
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
            <RestaurantTitle />
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