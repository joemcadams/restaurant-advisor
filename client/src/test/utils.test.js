import * as _ from 'lodash'
import { cloneStateWith, group } from '../utils'

describe('cloneStateWith tests', () => {

    it('can shallow clone an object without modifying its initial state', () => {
        let initialState = { a: 'a', b: 'b' }
        let desiredChange = { b: 'c' }
        let alteredState = cloneStateWith(initialState, desiredChange)
        expect(initialState).toEqual({ a: 'a', b: 'b'})
        expect(alteredState).toEqual({ a: 'a', b: 'c'})
    })

    it('can deeply clone a complex object without modifying its initial state', () => {
        let initialState = { a: { deepA: 'a', deepB: { deepestA: 'a' }, deepC: 'c' }, b: [ 1, 2, 3 ] }
        let desiredChange = { a: { deepB: { deepestA: 455 }}}
        let alteredState = cloneStateWith(initialState, desiredChange)
        expect(initialState).toEqual({ a: { deepA: 'a', deepB: { deepestA: 'a' }, deepC: 'c' }, b: [ 1, 2, 3 ] })
        expect(alteredState).toEqual({ a: { deepA: 'a', deepB: { deepestA: 455 }, deepC: 'c' }, b: [ 1, 2, 3 ] })
    })
})

describe('group tests', () => {

    const menuOrders = [
        { food: 'burger', drink: 'soda' }, 
        { food: 'pasta', drink: 'coffee' }, 
        { food: 'burger', drink: 'coffee' }, 
        { food: 'pasta', drink: 'soda' }
    ]

    it('throws an error if you pass an object that is not an array', () => {
        expect(() => group(1).by(2)).toThrowError()
        expect(() => group('').by(2)).toThrowError()
        expect(() => group(true).by(2)).toThrowError()
        expect(() => group({}).by(2)).toThrowError()
    })

    it('throws an error if the group member variable does not exist on each item in the array', () => {
        let menuOrdersWithBadItem = _.clone(menuOrders)
        menuOrdersWithBadItem.push({ a: 'a'})
        expect(() => group(menuOrdersWithBadItem).by('food')).toThrowError()
    })

    it('can group by the provided member variable', () => {
        const expectedFoodGroup = [
            { food: 'burger', drink: 'soda' }, 
            { food: 'burger', drink: 'coffee' }, 
            { food: 'pasta', drink: 'coffee' }, 
            { food: 'pasta', drink: 'soda'}
        ]
        const alteredFoodGroup = group(_.clone(menuOrders)).by('food')
        expect(alteredFoodGroup).toEqual(expectedFoodGroup)

        const expectedDrinkGroup = [
            { food: 'burger', drink: 'soda' }, 
            { food: 'pasta', drink: 'soda' }, 
            { food: 'pasta', drink: 'coffee' }, 
            { food: 'burger', drink: 'coffee'}
        ]
        const alteredDrinkGroup = group(_.clone(menuOrders)).by('drink')
        expect(alteredDrinkGroup).toEqual(expectedDrinkGroup)
    })
})