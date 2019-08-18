const Actions = {
  // Get transcriptions form server
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
  // Send updated transcriptions to backend
  sendTranscriptions({ state }) {
    return new Promise((resolve, reject) => {
      axios
      .get('http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c', state.transcriptions)
        .then(response => {
          // Could update state with the response:
          // dispatch('setTranscriptions', response.data);
          resolve(response.data);
        })
        .catch((error) => {
          reject(error)
        });
    })
  },
  // Call commit to commit state with transcriptions value
  setTranscriptions({ commit }, data) {
    commit('setTranscriptions', data)
  },
  // Call commit to add new item in transcriptions
  addTranscription({ commit }) {
    commit('addTranscription')
  },
  // Call commit to remove item from transcriptions
  deleteTranscriptions({ commit }, index) {
    commit('deleteTranscriptions', index)
  }
}

export default Actions;