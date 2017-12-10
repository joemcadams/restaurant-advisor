import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' // configures the default styling of material-ui 
                                                                   // components further down the component tree
import { NavBar } from '../components/NavBar'
import { MenuPage } from '../containers/MenuPage'

export const App = () => (
    <MuiThemeProvider>
        <NavBar/>
        <MenuPage/>
    </MuiThemeProvider>
)