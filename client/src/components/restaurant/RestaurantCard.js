import React from 'react'
import { Card, CardHeader, CardText, Divider, ListItem, RaisedButton } from 'material-ui'
import MdEventSeat from 'react-icons/lib/md/event-seat'
import FaDollar from 'react-icons/lib/fa/dollar'
import MdAirportShutte from 'react-icons/lib/md/airport-shuttle'
import MdAccessTime from 'react-icons/lib/md/access-time'
import MdEmail from 'react-icons/lib/md/email'
import MdLocalPhone from 'react-icons/lib/md/local-phone'
import { AddReviewDialog } from '../review/AddReviewDialog'

export class RestaurantCard extends React.Component{
	
	constructor(props){
		super()
		this.state= { reviewIsOpen: false }
	}
	
	closeReview = () => { this.setState({ reviewIsOpen: false })}
	openReview = () => { this.setState({ reviewIsOpen: true })}
	
	openMenu = () => { this.props.openMenu(this.props.name) }
	
	render(){
		return (
		    <Card style={{ width: '80vw', marginBottom: '3vh' }}>
		        <CardHeader
		            title={ this.props.name }
		            subtitle={ this.props.diningType }
		            actAsExpander={ true }
		            showExpandableButton={ true }
		        />
		        <CardText expandable={ true }>
		            <ListItem style={{ cursor: 'context-menu' }} primaryText={ `Hours: ${this.props.hours}` } leftIcon={ <MdAccessTime size={ 20 } /> } />
		            <ListItem style={{ cursor: 'context-menu' }} primaryText={ `Price Range: $${this.props.priceRange}` } leftIcon={ <FaDollar size={ 20 } /> } />
		            <ListItem style={{ cursor: 'context-menu' }} primaryText={ `Offers Delivery: ${this.props.offersDelivery === true ? 'Yes' : 'No'}` } leftIcon={ <MdAirportShutte size={ 20 } /> } />
		            <ListItem style={{ cursor: 'context-menu' }} primaryText={ `Outdoor Seating: ${this.props.outdoors === true ? 'Yes' : 'No' }` } leftIcon={ <MdEventSeat size={ 20 } /> } />
		            <Divider/>
		            <h2>Contact Details</h2>
		            <ListItem style={{ cursor: 'context-menu' }} primaryText={ `Email: ${this.props.email}` } leftIcon={ <MdEmail size={ 20 } /> } />
		            <ListItem style={{ cursor: 'context-menu' }} primaryText={ `Phone: ${this.props.phone}` } leftIcon={ <MdLocalPhone size={ 20 } /> } />
		            <Divider/>
		            <h2>Address</h2>
		            <h4>{ `${this.props.streetNo} ${this.props.streetName}` }</h4>
		            <h4>{ `${this.props.city}, ${this.props.state}` }</h4>
		            <h4>{ `${this.props.zip}` }</h4>
		            <RaisedButton label={`Review ${this.props.name}`} secondary={true} onClick={this.openReview}/>
		            <AddReviewDialog title={this.props.name} isOpen={this.state.reviewIsOpen} handleClose={this.closeReview}/>
		            <RaisedButton label={`Order from ${this.props.name}`} primary={true} style={{marginLeft:'1vw'}} onClick={this.openMenu}/>
		        </CardText>
		    </Card>
)}
}