import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' // configures the default styling of material-ui 
                                                                   // components further down the component tree
import { NavBar } from './NavBar'
import { LoginPage } from './LoginPage'
import { MenuPage } from './menu/MenuPage'
import { RestaurantCard } from './restaurant/RestaurantCard'
import { RestaurantPage } from './restaurant/RestaurantPage'

export const App = () => (
    <div>
        <MuiThemeProvider>
            <NavBar/>
            <LoginPage/>
            <MenuPage/>
            <RestaurantPage />
        </MuiThemeProvider>
    </div>
)