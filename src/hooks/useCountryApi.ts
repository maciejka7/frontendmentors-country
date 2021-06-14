import axios from 'axios'
import { onMounted, } from 'vue';
import { useStore } from 'vuex';
import { State } from '../store';

import { Country } from '../types/country';

export type GetCountryByCode =  (code: string) => Promise<Country[]> 
export type UseCountryAPI = (code?: string) => void

export const useCountryApi:UseCountryAPI = (code) : void => {

    const url = 'https://restcountries.eu/rest/v2/';

    const ENDPOINTS = {
      all: 'all',
      byCountryCode: 'alpha/'
    }
    
    const store = useStore<State>();

    store.dispatch('setIsLoading', true)
    
    const getCountry = async (code?: string) => {

      if(code) {
        const data = await getCountryByCode(code);  
        store.dispatch('setSelectedCountry', data)
        store.dispatch('setIsLoading', false)
      } else {
        const data = await all();
        store.dispatch('setCountries', data)
        store.dispatch('setIsLoading', false)
      }
    }

    onMounted(async () => {
        
      if(store.state.allCountires.length === 0) {
        if(window.localStorage.getItem('allCountries')) {
            const data = JSON.parse( window.localStorage.getItem('allCountries') as string );
            store.dispatch('setCountries', data)
        } else {
            getCountry()
        }
      }
        
      if(code && !store.getters.selectedCountry) {
        getCountry(code)
      } else if (store.state.allCountires.length === 0) {
        getCountry()
      } else {
        store.dispatch('setIsLoading', false)
      }
    });

    const all = async () => {
        const response = await axios.get<Country[]>(`${url}${ENDPOINTS.all}`);
        const data = response.data;
        return data;
    }

    const getCountryByCode = async (code:string) => {

      if(!code) {
        console.warn('Pls provide country code - alpha2Code or alpha3Code. All countries are returned')
        return await all();
      } else {
        const response = await axios.get<Country[]>(`${url}${ENDPOINTS.byCountryCode}${code}`);
        const data = response.data;
        return data
      }
    }
}