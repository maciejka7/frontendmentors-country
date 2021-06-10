import { createLogger, createStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Country } from '../types/country'
import { Filters } from '../types/filters'

import { actions } from './actions'
import { mutations } from './mutations'

export interface State {
    countries: Country[],
    allCountires:  Country[],
    selectedCountry: Country | null,
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
            selectedCountry: null,
            filterQuery: '',
            isLoading: false,
        }
    },
    getters: {
        countires(state) {
            return state.countries
        },
        countriesByCode: (state) => (code: string) => {
            const countryByCode = state.allCountires.filter(country => country.alpha3Code === code)
            return countryByCode.length !== 0 ? countryByCode : null ;
        },
        selectedCountry(state){
            return state.selectedCountry
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