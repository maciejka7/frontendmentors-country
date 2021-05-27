import axios from 'axios'
import { onMounted, ref } from 'vue';

export const useCountryApi = (endpoint?: string) => {

    const url = 'https://restcountries.eu/rest/v2/all';
    const allCountry = ref([])

    onMounted(async () => {
      const data = await all();
      allCountry.value = data;      
    });



    const all = async () => {
        const response = await axios.get(url);
        const data = response.data;
        return data;
    }

    return {
        allCountry
    }
}