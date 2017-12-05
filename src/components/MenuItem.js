import React from 'react'
import { 
    Card, 
    CardTitle, 
    CardText, 
    CardActions, 
    RaisedButton } from 'material-ui'

export const MenuItem = (props) => (
    <Card>
        <CardTitle 
            title={ props.title }
            subtitle={ `$ ${props.price.toString()}` }
        />
        <CardText> { props.description } </CardText>
        <CardActions>
            <RaisedButton label="Order" onClick={ () => props.handleOrder(props.id) }/>
        </CardActions>
    </Card>
)