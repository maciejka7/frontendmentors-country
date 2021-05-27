import { Mutation, MutationTree } from 'vuex'
import { State } from '.'
import { SET_SELECTED_FILTERS } from './mutations-types'

export const mutations:MutationTree<State> = {
    [SET_SELECTED_FILTERS]( state, payload ) {
        state.selectedRegion = payload;        
    }
}