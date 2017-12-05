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