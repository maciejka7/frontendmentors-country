import { onBeforeMount, watch, Ref } from 'vue'
import { Todos } from '../types/todos';

const initialTodos: Todos[] = [
  {
    id: 1,
    text: "learn composition API",
    status: "incomplete",
  },
  {
    id: 2,
    text: "learn vue 3",
    status: "complete",
  },
];

export const useLocalStorage = (key: string, ref: Ref) => {

    onBeforeMount(() => {
        const item = localStorage.getItem(key);
        return item ? ref.value = JSON.parse(item) : ref.value = initialTodos;
    })
    
    watch(ref, () => {      
        localStorage.setItem(key, JSON.stringify(ref.value))
    })

    const clearLocalStorage = (name: string) => {
        localStorage.removeItem(name)
    }

    return {
        clearLocalStorage
    }

}