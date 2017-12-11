import React, { Component } from 'react'
import { FlatButton,
    RaisedButton,
    Paper, 
    Toolbar, 
    ToolbarGroup, 
    ToolbarSeparator, 
    ToolbarTitle } from 'material-ui'
import MdShoppingBasket from 'react-icons/lib/md/shopping-basket'

export class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            boring: 'boring'
        }
    }

    render = () => (
        <Paper zDepth={ 1 }>
            <Toolbar>
                <ToolbarGroup firstChild={ true }>
                    <ToolbarTitle style={{ marginLeft: '2vw' }} text='Restaurant Advisor'/>
                    <FlatButton label='Restaurants' primary={ true } />
                    <FlatButton label='Reviews' primary={ true } />
                    <FlatButton label='Orders' primary={ true } />
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton label='Current Order' primary={ true } icon={ <MdShoppingBasket size={ 20 } /> } />
                    <ToolbarSeparator/>
                    <RaisedButton label='Logout' secondary={ true } />
                </ToolbarGroup>
            </Toolbar>
        </Paper>

    )
}