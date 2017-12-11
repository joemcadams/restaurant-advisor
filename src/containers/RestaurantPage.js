import AutoComplete from 'material-ui/AutoComplete'
import * as React from 'react'
import { RestaurantList } from '../components/RestaurantList'
import { cloneStateWith } from '../utils'

export class RestaurantPage extends React.Component{

    constructor(){
        super()
        this.state = {
            restaurants: [],
            searchTerms: '',
        }
    }

    componentDidMount = async () => {
        let response = await fetch('/Restaurants')
        let restaurants = await response.json()
        
        this.setState(cloneStateWith(this.state, {restaurants : restaurants}))
    }
    
    updateSearchTerms = (searchText, dataSource, params) => {
    	this.setState(cloneStateWith(this.state, {searchTerms: searchText}))
    }

    render() {
    	return(
    		<div>
	    		<AutoComplete 
	    			floatingLabelText={"Restaurant Name"}
	    			filter={AutoComplete.caseInsensitiveFilter}
	    			dataSource={this.state.restaurants.map(rest => rest.name)}
	    			maxSearchResults={5}
	    			onUpdateInput={this.updateSearchTerms}
	    		/>
	    		<RestaurantList list={this.state.restaurants.filter(rest => rest.name.contains(this.state.searchTerms))} />
    		</div>
    	)
    }
}
