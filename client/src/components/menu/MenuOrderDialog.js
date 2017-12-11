import React, { Component } from 'react'
import { Dialog, RaisedButton, RadioButtonGroup, RadioButton, TextField } from 'material-ui'
import { cloneStateWith } from '../../utils'

export class MenuOrderDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            orderCost: this.props.price,
            delivery: true
        }
    }

    handleQuantityChange = (value) => {
        const radix = 10
        const inputStringAsInt = parseInt(value.target.value, radix)
        isNaN(inputStringAsInt) 
            ? this.setState(cloneStateWith(this.state, { quantity: '', orderCost: 0 })) 
            : this.setState(cloneStateWith(this.state, { quantity: inputStringAsInt, orderCost: inputStringAsInt * this.props.price }))
    }
    
    handleRadioButtonClick = (event, value) => this.setState(cloneStateWith(this.state, value === 'delivery' ? { delivery: true } : { delivery: false }))

    getButtons = () => [
        <RaisedButton label='Cancel' onClick={ this.props.handleClose }/>,
        <RaisedButton label='Add' primary={ true } style={{ marginLeft: '1vw' }} onClick={ () => this.props.handleOrderClick(this.state.quantity, this.state.delivery) }/>
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

            <RadioButtonGroup 
                onChange={ this.handleRadioButtonClick } 
                defaultSelected='delivery'
                name='deliveryOptions'
            >
                <RadioButton
                    value='pick-up'
                    label='pick-up'
                    style={{ marginBottom: '2vh' }}
                />
                <RadioButton
                    value='delivery'
                    label='delivery'
                />
            </RadioButtonGroup>
            <TextField
                value={ this.state.quantity }
                floatingLabelText='How many?'
                onChange={ this.handleQuantityChange }
            />
            <p style={{ textAlign: 'right', fontWeight: 'bold' }}> 
                Total Price: $ { this.state.orderCost }
            </p>
        </Dialog>
    )
}