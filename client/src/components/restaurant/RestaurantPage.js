import { AutoComplete, Paper } from 'material-ui'
import * as React from 'react'
import { RestaurantList } from './RestaurantList'
import { cloneStateWith } from '../../utils'

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
    		<Paper zDepth={ 1 } style={{ minHeight: '100vh', width: '90vw', marginLeft: '5vw', padding: '5em', marginTop: '5vh' }}>
    			<h1 style={{ textAlign: 'center' }}> Restaurants </h1>
	    		<AutoComplete 
	    			floatingLabelText={"Restaurant Name"}
	    			filter={AutoComplete.caseInsensitiveFilter}
	    			dataSource={this.state.restaurants.map(rest => rest.name)}
	    			maxSearchResults={ 2 }
	    			onUpdateInput={this.updateSearchTerms}
	    			menuStyle={{ width: '80vw' }}
	    			listStyle={{ width: '80vw' }}
	    			textFieldStyle={{ width: '80vw', marginBottom: '10vh' }}
	    		/>
	    		<RestaurantList list={this.state.restaurants.filter(rest => rest.name.toLowerCase().includes(this.state.searchTerms.toLowerCase()))} />
    		</Paper>
    	)
    }
}
