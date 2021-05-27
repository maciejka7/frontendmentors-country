import { Action, ActionHandler, ActionTree } from "vuex";
import { State } from ".";
import { Country } from "../types/country";
import { Filters } from "../types/filters";
import { SET_SELECTED_FILTERS, SET_COUNTRIES, SEARCH_FOR_COUNTIRES } from './mutations-types'

export const actions: ActionTree<State, any> = {
    changeSelectedFilter( { commit }, payload  ) {
        commit(SET_SELECTED_FILTERS, payload)
    },
    setCountries({commit}, payload: Country[]) {
        commit(SET_COUNTRIES, payload)
    },
    searchForCountries({commit}, query:string) {
        commit(SEARCH_FOR_COUNTIRES, query);
    }
}