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
	
	componentDidMount = () => {
		fetch('/Review')
	}
	
    getButtons = () => [
        <RaisedButton label='Cancel' onClick={ this.props.handleClose }/>,
        <RaisedButton label='Submit' primary={ true } style={{ marginLeft: '1vw' }} onClick={ () => {} }/>
    ]

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
            />
	    </Dialog>
    )
}