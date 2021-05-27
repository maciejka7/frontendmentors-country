import { Action, ActionHandler, ActionTree } from "vuex";
import { State } from ".";
import { SET_SELECTED_FILTERS } from './mutations-types'

export const actions: ActionTree<State, any> = {
    changeSelectedFilter( { commit }, payload  ) {
        commit(SET_SELECTED_FILTERS, payload)
    }
}