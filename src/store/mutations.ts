import { Mutation, MutationTree } from 'vuex'
import { State } from '.'
import { Country } from '../types/country';
import { Filters } from '../types/filters';
import { SEARCH_FOR_COUNTIRES, SET_COUNTRIES, SET_SEARCH_QUERY, SET_SELECTED_FILTERS, SET_IS_LOADING } from './mutations-types'

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
    [SET_SEARCH_QUERY](state, query: string){
        state.filterQuery = query;
    },
    [SET_IS_LOADING](state, isLoading: boolean) {
        state.isLoading = isLoading;
    },
    [SEARCH_FOR_COUNTIRES](state, query: Filters | ''){
        if(query === '') {
            state.countries = state.allCountires
        } else {
            state.countries = state.allCountires.filter( country => country.name.toLowerCase().includes(query.toLowerCase()))
        }
    }
}