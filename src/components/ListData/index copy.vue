<template>
  <div>
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <header>
      <div class="header-content content">
        <span class="header-content__title">Transcriptons</span>
        <span class="header-content__actions">
          <button @click.prevent="callSendTranscriptions" class="btn-simple">
            <i class="ico-upload"></i>
          </button>
          <button @click.prevent="callGetTranscriptions" class="btn-simple">
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
            @on-delete="() => { deleteTranscription(item) }"
            class="data-list__item"
          />
        </ul>
      </div>
      <footer>
        <button @click.prevent="addTranscription" class="btn-simple">
          <i class="ico-plus-circle"></i>
        </button>
      </footer>
    </main>
    <div class="bottom-line"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CheckboxCustom from "@/components/CheckboxCustom/";
import ListItem from "./Children/ListItem";
import Loading from "vue-loading-overlay";

export default {
  name: "ListData",
  components: {
    CheckboxCustom,
    ListItem,
    Loading
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      msg: 'TESTING OK'
    };
  },
  computed: {
    ...mapState("transcriptions", ["transcriptions"]),
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
    ...mapActions("transcriptions", [
      "getTranscriptions",
      "addTranscription",
      "setTranscriptions",
      "sendTranscriptions"
    ]),
    callGetTranscriptions() {
      this.isLoading = true;
      this.getTranscriptions()
        .then(() => {
          this.isLoading = false;
        })
        .catch(() => {});
    },
    callSendTranscriptions() {
      this.isLoading = true;
      this.sendTranscriptions()
        .then(() => {
          this.isLoading = false;
        })
        .catch(() => {});
    },
    deleteTranscription(item) {
      this.dataList.splice(this.dataList.indexOf(item), 1)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
