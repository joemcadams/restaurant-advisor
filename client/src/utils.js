import * as _ from 'lodash'

export const cloneStateWith = (state, changes) => _.merge(_.cloneDeep(state), changes)

export const group = (arr) => {
    return { 
        by: (fieldToGroupBy) => {
            if (arr.constructor !== Array) throw `Expected parameter to be an array, but got ${JSON.stringify(arr)}`
            const map = new Map()
            arr.forEach(item => {
                if (!item[fieldToGroupBy]) throw `Item in array ${JSON.stringify(arr)} does not have member variable ${fieldToGroupBy}.`
                if (map.get(item[fieldToGroupBy]) === undefined) map.set(item[fieldToGroupBy], [item])
                else {
                    const items = map.get(item[fieldToGroupBy])
                    items.push(item)
                    map.set(item[fieldToGroupBy], items)
                }
            })
            const groupedItems = []
            map.forEach((category, key) => category.forEach(item => groupedItems.push(item)))
            return groupedItems
        }
    }
}

export const match = (item) => new Match(item)

class Match{
	
	item
	listOfCases
	defaultCase
	
	constructor(item){
		this.item = item
		this.listOfCases = []
	}
	
	addCase = (conditional, result) => {
		this.listOfCases.push({conditional: conditional, result: result})
		return this
	}
	
	setDefault = (result) => {
		this.defaultCase = result
		return this
	}
	
	result = () => {
		var output
		this.listOfCases.forEach(set => { if(set.conditional === this.item) output = set.result })
		if(!output && this.defaultCase) output = this.defaultCase
		if(!output) throw 'Must have at least one true case in match'
		
		return output
	}
}
