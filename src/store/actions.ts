import { ActionTree } from "vuex";
import { NetworkError, State } from ".";
import { Country } from "../types/country";
import { Filters } from "../types/filters";
import { SET_SELECTED_FILTERS, SET_COUNTRIES, SEARCH_FOR_COUNTIRES, SET_SEARCH_QUERY, SET_IS_LOADING, SET_SELECTED_COUNTRY, SET_NETWORK_ERROR } from './mutations-types'

export const actions: ActionTree<State, any> = {
    changeSelectedFilter( { commit }, payload: Filters  ) {
        commit(SET_SELECTED_FILTERS, payload)
    },
    setCountries({commit}, payload: Country[]) {
        commit(SET_COUNTRIES, payload)
    },
    setSelectedCountry({commit}, payload: Country){
        commit(SET_SELECTED_COUNTRY, payload)
    },
    setSearchQuery({commit}, query:string){
        commit(SET_SEARCH_QUERY, query);
    },
    setIsLoading({commit}, isLoading: boolean){
        commit(SET_IS_LOADING, isLoading)
    },
    searchForCountries({commit}, query:string) {
        commit(SEARCH_FOR_COUNTIRES, query);
    },
    setError({commit}, payload: NetworkError) {
        commit(SET_NETWORK_ERROR, payload)
    }
}