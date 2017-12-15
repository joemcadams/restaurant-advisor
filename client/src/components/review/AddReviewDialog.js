import * as React from 'react'
import { Dialog, RaisedButton, RadioButtonGroup, RadioButton, TextField } from 'material-ui'
import { cloneStateWith } from '../../utils'

const postReview = (restaurant, review) => {
	fetch(
		`Review/${restaurant}`, 
		{
			method:'POST', 
			body: review,
			headers: {
				"Content-Type": "application/json"
			}
		})
}

export class AddReviewDialog extends React.Component {
    
	constructor(props){
		super()
		this.state = {
				title:'',
				description:'',
				rating:0,
		}
	}

	sendReview = () => {
		let review = {
				customer: this.props.customer,
				title: this.state.title,
				description: this.state.description,
				date: new Date(),
				xzrating:this.state.rating,
		}
		postReview(this.props.restaurant, JSON.stringify(review))
		this.props.handleClose()
	}
	
    getButtons = () => [
        <RaisedButton label='Cancel' onClick={ this.props.handleClose }/>,
        <RaisedButton label='Submit' primary={ true } style={{ marginLeft: '1vw' }} onClick={ this.sendReview }/>
    ]

    updateTitle = (title) => this.setState(cloneStateWith(this.state, {title:title.target.value}))
    updateDesc = (desc) => this.setState(cloneStateWith(this.state, {description:desc.target.value}))
    
    handleRadioButtonClick = (event, value) => {
    	let radix = 10
    	this.setState(cloneStateWith(this.state, {rating:parseInt(value, radix)}))
    }
    
    render = () => (
        <Dialog
            title={ this.props.restaurant }
            actions={ this.getButtons() }
            modal={ false }
            open={ this.props.isOpen }
            onRequestClose={ this.props.handleClose }
        >
            <TextField
                floatingLabelText='Title'
                value={this.state.title}
                style={{marginBotton:'1vh'}}
            	onChange={this.updateTitle}
            />
            <RadioButtonGroup 
            onChange={ this.handleRadioButtonClick } 
            defaultSelected='0'
            name='rating'
        >
            <RadioButton
                value='0'
                label='0'
                style={{ marginBottom: '2vh' }}
            />
            <RadioButton
                value='1'
                label='1'
                style={{ marginBottom: '2vh' }}
            />
            <RadioButton
                value='2'
                label='2'
                style={{ marginBottom: '2vh' }}
            />
            <RadioButton
                value='3'
                label='3'
                style={{ marginBottom: '2vh' }}
            />
            <RadioButton
                value='4'
                label='4'
                style={{ marginBottom: '2vh' }}
            />
            <RadioButton
                value='5'
                label='5'
            />
        </RadioButtonGroup>
            <TextField
            	floatingLabelText='Description'
            	value={this.state.description}
            	style={{marginBotton:'1vh'}}
        		onChange={this.updateDesc}
            />
        </Dialog>
    )
}