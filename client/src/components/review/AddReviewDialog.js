import * as React from 'react'
import { Dialog, RaisedButton, RadioButtonGroup, RadioButton, TextField } from 'material-ui'
import { cloneStateWith } from '../../utils'

export class AddReviewDialog extends React.Component {
    
	constructor(props){
		super()
		this.state = {
				title:'',
				description:''
		}
	}

	
	sendReview = () => {
		fetch(`/Review/${this.props.restaurant}/${this.props.customer}`, { method:'POST', body:{this.state.title, this.state.description}})
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