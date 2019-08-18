const Mutations = {
  setTranscriptions(state, data) {
    state.transcriptions = data;
  },
  addTranscription(state) {
    const newItem = {
      id: null,
      voice: '',
      text: ''
    }

    state.transcriptions.push(newItem);
  },
  deleteTranscriptions(state, index) {
    state.transcriptions.splice(index, 1)
  }
}

export default Mutations;