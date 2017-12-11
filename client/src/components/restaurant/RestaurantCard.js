import React from 'react'
import { Card, CardHeader, CardText, Divider, List, ListItem } from 'material-ui'
import MdEventSeat from 'react-icons/lib/md/event-seat'
import FaDollar from 'react-icons/lib/fa/dollar'
import MdAirportShutte from 'react-icons/lib/md/airport-shuttle'
import MdAccessTime from 'react-icons/lib/md/access-time'
import MdEmail from 'react-icons/lib/md/email'
import MdLocalPhone from 'react-icons/lib/md/local-phone'

export const RestaurantCard = (props) => (
    <Card style={{ width: '80vw', marginLeft: '10vw', marginBottom: '3vh' }}>
        <CardHeader
            title={ props.name }
            subtitle={ props.diningType }
            actAsExpander={ true }
            showExpandableButton={ true }
        />
        <CardText expandable={ true }>
            <ListItem style={{ cursor: 'context-menu' }} primaryText={ `Hours: ${props.hours}` } leftIcon={ <MdAccessTime size={ 20 } /> } />
            <ListItem style={{ cursor: 'context-menu' }} primaryText={ `Price Range: $${props.priceRange}` } leftIcon={ <FaDollar size={ 20 } /> } />
            <ListItem style={{ cursor: 'context-menu' }} primaryText={ `Offers Delivery: ${props.offersDelivery === true ? 'Yes' : 'No'}` } leftIcon={ <MdAirportShutte size={ 20 } /> } />
            <ListItem style={{ cursor: 'context-menu' }} primaryText={ `Outdoor Seating: ${props.outdoors === true ? 'Yes' : 'No' }` } leftIcon={ <MdEventSeat size={ 20 } /> } />
            <Divider/>
            <h2>Contact Details</h2>
            <ListItem style={{ cursor: 'context-menu' }} primaryText={ `Email: ${props.email}` } leftIcon={ <MdEmail size={ 20 } /> } />
            <ListItem style={{ cursor: 'context-menu' }} primaryText={ `Phone: ${props.phone}` } leftIcon={ <MdLocalPhone size={ 20 } /> } />
            <Divider/>
            <h2>Address</h2>
            <h4>{ `${props.streetNo} ${props.streetName}` }</h4>
            <h4>{ `${props.city}, ${props.state}` }</h4>
            <h4>{ `${props.zip}` }</h4>
        </CardText>
    </Card>
)