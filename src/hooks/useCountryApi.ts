import axios from 'axios'
import { onMounted, } from 'vue';
import { useStore } from 'vuex';

import { Country } from '../types/country';

export type GetCountryByCode =  (code: string) => Promise<Country[]> 
export type UseCountryAPI = (endpoint?: string | null, code?: string) => void

export const useCountryApi:UseCountryAPI = (endpoint, code) : void => {

    const url = 'https://restcountries.eu/rest/v2/';

    const ENDPOINTS = {
      all: 'all',
      byCountryCode: 'alpha/'
    }
    
    const store = useStore();

    store.dispatch('setIsLoading', true)

    onMounted(async () => {

      if(code && !store.getters.selectedCountry) {
        const data = await getCountryByCode(code);
        
        store.dispatch('setSelectedCountry', data)
        store.dispatch('setIsLoading', false)
      } else if (store.state.allCountires.length === 0) {
        const data = await all();
        store.dispatch('setCountries', data)
        store.dispatch('setIsLoading', false)
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