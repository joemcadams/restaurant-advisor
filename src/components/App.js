import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' // configures the default styling of material-ui 
                                                                   // components further down the component tree
import { MenuPage } from '../containers/MenuPage'

export const App = () => (
    <MuiThemeProvider>
        <MenuPage/>
    </MuiThemeProvider>
)