import React, { Component } from 'react'
import { RaisedButton, Dialog, TextField } from 'material-ui'
import { cloneStateWith } from '../utils'

class MofifyMenuItemDialog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props && props.title ? props.title : '',
            description: props && props.description ? props.description : '',
            price: props && props.price ? props.price : 0.0
        }
    }
    
    handleTitleChange = event => {
        const titleText = value.target.value
        this.setState(cloneStateWith(this.state, { title: titleText }))
    }

    handleDescriptionChange = event => {
        const descriptionText = value.target.value
        this.setState(cloneStateWith(this.state, { description: descriptionText }))
    }

    handlePriceChange = event => {
        const priceValue = value.target.value
        const priceValueAsFloat = parseFloat(priceValue)
        if (!isNaN(priceValueAsFloat)) this.setState(cloneStateWith(this.state, { price: priceValueAsFloat }))
    }

    getButtons = () => [
        <RaisedButton label='Cancel' onClick={ this.props.handleClose }/>,
        <RaisedButton label='Add' primary={ true } style={{ marginLeft: '.5vw' }} onClick={ () => this.props.handleOrderClick(this.state.quantity) }/>
    ]

    render = () => (
        <Dialog
            title={ 'Add/Edit Menu Item' }
            actions={ this.getButtons() }
            modal={ false }
            open={ this.props.isOpen }
            onRequestClose={ this.props.handleClose }
        >
            <TextField
                value={ this.state.title }
                floatingLabelText='Title'
                onChange={ this.handleTitleChange }
            />
            <TextField
                value={ this.state.price }
                floatingLabelText='Price'
                onChange={ this.handlePriceChange }
            />
            <TextField
                value={ this.state.description }
                floatingLabelText='Description'
                onChange={ this.handleDescriptionChange }
            />
        </Dialog>
    )
}