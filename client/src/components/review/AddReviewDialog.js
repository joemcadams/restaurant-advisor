import * as React from 'react'
import { Dialog, RaisedButton, RadioButtonGroup, RadioButton, TextField } from 'material-ui'
import { cloneStateWith } from '../../utils'

const postReview = (restaurant, customer, title, description) => {
	fetch(`Review/${restaurant}/${customer}`, {method:'POST', body:{title, description}})
}

export class AddReviewDialog extends React.Component {
    
	constructor(props){
		super()
		this.state = {
				title:'',
				description:''
		}
	}

	sendReview = () => {
		postReview(this.props.restaurant, this.props.customer, this.state.title, this.state.description)
		this.props.handleClose()
	}
	
    getButtons = () => [
        <RaisedButton label='Cancel' onClick={ this.props.handleClose }/>,
        <RaisedButton label='Submit' primary={ true } style={{ marginLeft: '1vw' }} onClick={ () => {} }/>
    ]

    updateTitle = (title) => this.setState(cloneStateWith(this.state, {title:title}))
    updateDesc = (desc) => this.setState(cloneStateWith(this.state, {description:desc}))
    
    render = () => (
        <Dialog
            title={ this.props.title }
            actions={ this.getButtons() }
            modal={ false }
            open={ this.props.isOpen }
            onRequestClose={ this.props.handleClose }
        >
            <TextField
                floatingLabelText='Title'
                value={this.state.title}
                style={{marginBotton:'1vh'}}
            	onUpdate={this.updateTitle}
            />
	    </Dialog>
    )
}