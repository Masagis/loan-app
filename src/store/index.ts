import Vue from 'vue'
import Vuex from 'vuex'
import { IApplicationState } from './modules/application'

Vue.use(Vuex)

export interface IRootState {
  user: ''
  application: IApplicationState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
