import { createLogger, createStore } from 'vuex'
import { Country } from '../types/country'
import { Filters } from '../types/filters'

import { actions } from './actions'
import { mutations } from './mutations'

export interface State {
    countries: Country[],
    selectedRegion: Filters
}


export const store = createStore<State>({
    strict: true,
    state() {
        return {
            countries: [],
            selectedRegion: 'World',
        }
    },
    actions,
    mutations,
    plugins: [
        createLogger()
    ],
})