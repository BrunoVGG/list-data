const Actions = {
  getTranscriptions({ dispatch }) {
    return new Promise((resolve, reject) => {
      axios
      .get('http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c')
        .then(response => {
          dispatch('setTranscriptions', response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error)
        });
    })
  },
  sendTranscriptions({ state, dispatch }) {
    return new Promise((resolve, reject) => {
      axios
      .get('http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c', state.transcriptions)
        .then(response => {
          // dispatch('setTranscriptions', response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error)
        });
    })
  },
  setTranscriptions({ commit }, data) {
    commit('setTranscriptions', data)
  },
  addTranscription({ commit }) {
    commit('addTranscription')
  },
  deleteTranscriptions({ commit }) {
    commit('addTranscription')
  }
}

export default Actions;