import axios from 'axios'
import { onMounted, } from 'vue';
import { useStore } from 'vuex';

import { Country } from '../types/country';

export const useCountryApi = (endpoint?: string) => {

    const url = 'https://restcountries.eu/rest/v2/all';
    
    const store = useStore();

    store.dispatch('setIsLoading', true)

    onMounted(async () => {
      const data = await all();
      store.dispatch('setCountries', data)
      store.dispatch('setIsLoading', false)
    });

    const all = async () => {
        const response = await axios.get<Country[]>(url);
        const data = response.data;
        return data;
    }
}