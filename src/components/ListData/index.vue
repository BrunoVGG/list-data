<template>
  <div>
    <loading :active.sync="isLoading" :is-full-page="true"></loading>
    <notifications group="foo" />
    <header>
      <div class="header-content content">
        <span class="header-content__title">Transcriptons</span>
        <span class="header-content__actions">
          <button 
            @click.prevent="callSendTranscriptions" 
            data-message="Upload transcriptions to update"
            class="btn-simple"
          >
            <i class="ico-upload"></i>
          </button>
          <button 
            @click.prevent="callGetTranscriptions"
            class="btn-simple"
            data-message="Download transcriptions"
          >
            <i class="ico-plus-box"></i>
          </button>
        </span>
      </div>
    </header>
    <main class="content">
      <div class="body">
        <ul v-if="dataList.length" class="data-list">
          <ListItem
            v-for="(item, i) in dataList"
            :key="item.id"
            :index="i"
            :item.sync="item"
            @on-delete="() => { callDeleteTranscriptions(item) }"
            class="data-list__item"
          />
        </ul>
      </div>
      <footer>
        <button
          @click.prevent="addTranscription" 
          data-message="Add new transcription"
          class="btn-simple">
          <i class="ico-plus-circle"></i>
        </button>
      </footer>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ListItem from './Children/ListItem';
import Loading from 'vue-loading-overlay';

export default {
  name: 'ListData',
  components: {
    ListItem,
    Loading
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    ...mapState('transcriptions', [
      'transcriptions'
    ]),
    // Use the state to set value and 
    // call action to update state
    dataList: {
      get() {
        return this.transcriptions;
      },
      set(newValue) {
        this.setTranscriptions(newValue);
      }
    }
  },
  methods: {
    ...mapActions('transcriptions', [
      'getTranscriptions',
      'addTranscription',
      'setTranscriptions',
      'sendTranscriptions',
      'deleteTranscriptions'
    ]),
    // Call action to get transcriptions
    callGetTranscriptions() {
      this.isLoading = true;
      this.getTranscriptions()
        .then(() => {
          this.$notify({
            group: 'foo',
            title: 'Success',
            text: 'Downloaded Transcriptions'
          });
          this.isLoading = false;
        })
        .catch(() => {
          this.$notify({
            group: 'foo',
            type: 'warn',
            title: 'Error',
            text: 'Sorry, I crash when downloading Transcriptions'
          });
          this.isLoading = false;
        });
    },
    // Update data: Send data to backend server
    callSendTranscriptions() {
      this.isLoading = true;
      this.sendTranscriptions()
        .then(() => {
          this.$notify({
            group: 'foo',
            title: 'Success',
            text: 'Uploaded Transcriptions'
          });
          this.isLoading = false;
        })
        .catch(() => {
          this.$notify({
            group: 'foo',
            type: 'warn',
            title: 'Error',
            text: 'Sorry, I crash when sending Transcriptions'
          });
          this.isLoading = false;
        });
    },
    // Delete item. Use index, but in "real life", 
    // could use id with ".find" 
    callDeleteTranscriptions(item) {
      this.deleteTranscriptions(this.dataList.indexOf(item));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/css/patterns.scss";

header {
  overflow: hidden;
  margin-top: 0px;
  background-color: $white;
  border-bottom: 2px solid $gray-450;
  padding: 20px 0;
  font-weight: bold;

  .header-content {
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: space-between;

    &__title {
      color: $gray-750;
      font-family: 'Montserrat', sans-serif, Arial, Helvetica;
      font-weight: Medium;
      font-size: 18px;

        @media screen and (max-width: $screen-lg) {
          padding: 0px 10px;
        }
    }
    &__actions {
      button {
        @media screen and (max-width: $screen-md) {
          padding: 0px 20px;
        }
      }
    }
  }
}

.body {
  flex-grow: 1;
  margin-top: 20px;
  display: flex;
  align-items: left;
  flex-flow: row wrap;

  .data-list {
    width: 100%;
    list-style: none;
    padding-left: 0px;
  }
}

footer {
  text-align: center;
}
</style>
