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
  updateDataItem(state, translate) {
    let itemData = state.data.find((item) => {
        return item.id = translate.id
    });
  }
}

export default Mutations;