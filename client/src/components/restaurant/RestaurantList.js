import * as React from 'react'
import { RestaurantCard } from './RestaurantCard'

export const RestaurantList = (props) =>
	props.list.map(rest => (
	        <RestaurantCard 
            name={rest.name}
            diningType={rest.diningType}
            hours={rest.hours}
            priceRange={rest.priceRange}
            offersDelivery={ rest.delivery }
            outdoors={ rest.outdoors }
            email={rest.email}
            phone={rest.phone}
            streetNo={ rest.streetNo }
            streetName={rest.streetName}
            city={rest.city}
            state={rest.state}
            zip={rest.zip}
        />
	)
)