import State from './state';
import Mutations from './mutations';
import Actions from './actions';

const Transcriptions = {
  namespaced: true,
  state: State,
  mutations: Mutations,
  actions: Actions
}

export default Transcriptions