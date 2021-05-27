import { createLogger, createStore } from 'vuex'
import { Country } from '../types/country'
import { Filters } from '../types/filters'

import { actions } from './actions'
import { mutations } from './mutations'

export interface State {
    countries: Country[],
    allCountires:  Country[],
    selectedRegion: Filters,
    filterQuery: string
    isLoading: boolean
}


export const store = createStore<State>({
    strict: true,
    state() {
        return {
            countries: [],
            selectedRegion: 'World',
            allCountires: [],
            filterQuery: '',
            isLoading: false,
        }
    },
    getters: {
        countires(state) {
            return state.countries
        },
        isLoading(state){
            return state.isLoading
        },
    },
    actions,
    mutations,
    plugins: [
        createLogger()
    ],
})