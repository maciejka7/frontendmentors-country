import { Mutation, MutationTree } from 'vuex'
import { State } from '.'
import { Country } from '../types/country';
import { Filters } from '../types/filters';
import { SET_COUNTRIES, SET_SELECTED_FILTERS } from './mutations-types'

export const mutations:MutationTree<State> = {
    [SET_SELECTED_FILTERS]( state, region ) {
        state.selectedRegion = region;
        
        if(region === 'World') {
            state.countries = state.allCountires;
        } else {
            state.countries = state.allCountires.filter( country => country.region === region )
        }     
    },
    [SET_COUNTRIES](state, payload: Country[]) {
        state.countries = payload;
        state.allCountires = payload;
    },
}