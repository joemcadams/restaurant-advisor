import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' // configures the default styling of material-ui 
                                                                   // components further down the component tree
import { NavBar } from '../components/NavBar'
import { LoginPage } from '../components/LoginPage'
import { MenuPage } from '../containers/MenuPage'
import { RestaurantCard } from '../components/RestaurantCard'
import { RestaurantPage } from '../containers/RestaurantPage'

export const App = () => (
    <MuiThemeProvider>
        <NavBar/>
        <LoginPage/>
        <MenuPage/>
        <RestaurantPage />
    </MuiThemeProvider>
)