import React from 'react'
import { 
    Card, 
    CardTitle, 
    CardText, 
    CardActions, 
    RaisedButton } from 'material-ui'

export const MenuItem = (props) => (
    <Card style={{ width: '80vw', marginLeft: '10vw', marginBottom: '3vh' }}>
        <CardTitle 
            title={ props.title }
            subtitle={ `$ ${props.price.toString()}` }
        />
        <CardText> { props.description } </CardText>
        <CardActions>
            <RaisedButton label='Order' onClick={ () => props.handleOrder(props.id) }/>
        </CardActions>
    </Card>
)