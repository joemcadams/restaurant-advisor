import React from 'react'
import { clone, cloneDeep } from 'lodash'
import { cloneStateWith, group } from '../utils'
import { RestaurantTitle } from '../components/RestaurantTitle'
import { MenuOrderDialog } from '../components/MenuOrderDialog'
import { MenuItem } from '../components/MenuItem'
import * as MENU_ITEMS from '../SAMPLE_MENU.json'

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

    handleAddOrder = quantity => {
        const currentMenuItem = cloneStateWith(cloneDeep(this.state.menu[this.state.menuID]), { quantity: quantity })
        let updatedOrderItem = cloneDeep(this.state.order.items)
        updatedOrderItem.push(currentMenuItem)
        let updatedPrice = clone(this.state.order.totalPrice) 
        updatedPrice+= (currentMenuItem.price * quantity)
        this.setState(cloneStateWith(this.state, {
            modalOpen: false,
            menuID: this.state.menuID,
            menu: this.state.menu,
            order: {
                items: updatedOrderItem,
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
                        handleOrderClick={ this.handleAddOrder.bind(this) }
                        handleClose={ () => this.setState(cloneStateWith(this.state, { modalOpen: false })) }
                        isOpen={ this.state.orderItemModalOpen }
                        onRequestClose={ () => this.setState(cloneStateWith(this.state, { modalOpen: false }))  }
                        description={ this.state.menu[this.state.menuID].description }
                    />
                :   <div/>
            }
        </div>
    )


}