import axios from 'axios'
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { SET_COUNTRIES } from '../store/mutations-types';
import { Country } from '../types/country';

export const useCountryApi = (endpoint?: string) => {

    const url = 'https://restcountries.eu/rest/v2/all';
    let allCountry: Country[] = [];

    const store = useStore();

    onMounted(async () => {
      const data = await all();
      store.dispatch('setCountries', data)
    });

    const all = async () => {
        const response = await axios.get(url);
        const data = response.data;
        return data;
    }
}