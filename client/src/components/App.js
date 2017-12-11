import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' // configures the default styling of material-ui 
                                                                   // components further down the component tree
import { NavBar } from './NavBar'
import { LoginPage } from './LoginPage'
import { MenuPage } from './menu/MenuPage'
import { RestaurantCard } from './restaurant/RestaurantCard'

export const App = () =>  (
    <MuiThemeProvider>
        <div>
            <NavBar/>
            <LoginPage/>
            <MenuPage/>
            <RestaurantCard 
                name="Tony's Balogna Pony"
                diningType="Fast Food"
                hours="9AM-5PM"
                priceRange="5-35"
                offersDelivery={ true }
                outdoors={ true }
                email="tony@bologna.pony"
                phone="414-323-4444"
                streetNo={ 42 }
                streetName="W. Wisconsin Ave."
                city="Milwaukee"
                state="Wisconsin"
                zip="53233"
            />
        </div>
    </MuiThemeProvider>
)