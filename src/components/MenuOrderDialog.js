import React, { Component } from 'react'
import { RaisedButton, Dialog, TextField } from 'material-ui'
import { cloneStateWith } from '../utils'
export class MenuOrderDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            orderCost: this.props.price
        }
    }

    handleQuantityChange = (value) => {
        const radix = 10
        const inputStringAsInt = parseInt(value.target.value, radix)
        isNaN(inputStringAsInt) 
            ? this.setState(cloneStateWith(this.state, { quantity: '', orderCost: 0 })) 
            : this.setState(cloneStateWith(this.state, { quantity: inputStringAsInt, orderCost: inputStringAsInt * this.props.price }))
    }
    
    getButtons = () => [
        <RaisedButton label="Cancel" onClick={ this.props.handleClose }/>,
        <RaisedButton label="Add" primary={ true } style={{ marginLeft: '.5vw' }} onClick={ () => this.props.handleOrderClick(this.state.quantity) }/>
    ]

    render = () => (
        <Dialog
            title={ this.props.title }
            actions={ this.getButtons() }
            modal={ false }
            open={ this.props.isOpen }
            onRequestClose={ this.props.handleClose }
        >
            { this.props.description } 
            
            <br/>
            <br/>

            <p>
                <span style={{ textStyle: 'bold' }}> Total Price: $</span>
                { this.state.orderCost }
            </p>

            <br/>
            <br/>
            
            <TextField
                value={ this.state.quantity }
                floatingLabelText='How many?'
                onChange={ this.handleQuantityChange }
            />
        </Dialog>
    )
}