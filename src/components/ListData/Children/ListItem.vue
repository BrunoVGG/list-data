<template>
  <li class="data-list__item" role="listitem">
    <div class="data-list__item__checkarea">
      <CheckboxCustom v-model="checked" :name="`checkbox-${item.id}`" />
    </div>
    <picture class="data-list__item__avatar">
      <img alt="Avatar Default" src="@/assets/img/person.svg" />
    </picture>
    <div class="data-list__item__content">
      <div class="data-list__item__content__title">
        <div v-show="!showEditVoice" @click.prevent="toEditMode('voice')">{{ item.voice }}</div>
        <input
          v-show="showEditVoice"
          v-model="item.voice"
          @blur="doneEdit('voice')"
          @keydown.enter.prevent="doneEdit({ref:'voice', setFocus: true})"
          @keyup.esc.prevent="doneEdit('voice')"
          ref="voice"
          type="text"
          max="50"
          placeholder="Voice"
        />
      </div>
      <div class="data-list__item__content__text">
        <textarea-autosize
          placeholder="Text"
          ref="text"
          v-model="item.text"
          :min-height="20"
          :max-height="350"
          @click.native="toEditMode({ref:'text'})"
          @blur.native="doneEdit('text')"
          :class="{ 'plan-text': !showTextVoice }"
        ></textarea-autosize>
      </div>
    </div>
    <div class="delete-item">
      <button 
        @click.prevent="deleteItem" 
        data-message="Delete transcription"
        class="btn-simple"
      >
        <i class="ico-delete"></i>
      </button>
    </div>
  </li>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CheckboxCustom from '@/components/CheckboxCustom/';

export default {
  name: 'ListItem',
  components: {
    CheckboxCustom
  },
  data() {
    return {
      editMode: {
        voice: false,
        text: false
      },
      checked: false
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState('transcriptions', ['transcriptions']),
    dataList: {
      get() {
        return this.transcriptions;
      },
      set(newValue) {
        this.setTranscriptions(newValue);
      }
    },
    itemData: {
      get() {
        return this.item;
      },
      set(newValue) {
        this.$emit('update:item', newValue);
      }
    },
    showEditVoice() {
      if (this.editMode.voice || this.itemData.voice === "") {
        return true;
      }
      return false;
    },
    showTextVoice() {
      if (this.editMode.text || this.itemData.text === "") {
        return true;
      }
      return false;
    }
  },
  mounted() {
    if (!this.item.id) {
      this.editMode.voice = true;
      this.editMode.text = true;
    }
  },
  methods: {
    ...mapActions('transcriptions', [
      'updateTranscriptions',
      'deleteTranscriptions',
      'setTranscriptions'
    ]),
    // Set edit mode to selected element
    toEditMode({ ref = 'voice', setFocus = false }) {
      this.editMode[ref] = true;
      if (setFocus) this.setFocus(ref);
    },
    // Focus element
    setFocus(ref = 'voice') {
      const element = this.$refs[ref];
      element.style.display = 'block';
      element.focus();
    },
    // When the user leave the field
    doneEdit(ref = 'voice') {
      this.editMode[ref] = false;
    },
    deleteItem() {
      this.$emit('on-delete');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/css/patterns.scss";

.data-list__item {
  margin-bottom: 3px;
  min-height: 60px;
  background-color: $white;
  padding: 30px 0 20px 20px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;

  @media screen and (min-width: $screen-md) {
    padding: 30px 0 20px 30px;
  }

  .delete-item {
    width: 30px;
    padding-right: 10px;
    button {
      display: none;
    }
  }

  &:hover {
    transition: display 1s ease;
    .delete-item {
      transition: display 1s ease;
      button {
        display: block;
      }
    }
  }

  &__checkarea {
    width: 60px;
    display: flex;
    align-content: center;
    justify-items: center;
    justify-content: center;
    align-items: flex-start;
    margin-top: 8px;

    @media screen and (max-width: $screen-sm) {
      width: 35px;
    }
  }

  &__avatar {
    width: 60px;
    display: flex;
    align-content: center;
    justify-items: center;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: $screen-sm) {
      width: 35px;
    }

    img {
      width: 30px;
    }
  }

  &__content {
    width: 60px;
    flex-grow: 1;

    &__title {
      text-align: left;
      padding: 5px 10px;
      color: $gray-650;
      font-weight: bold;
      font-family: "Montserrat", sans-serif, Arial, Helvetica;
      font-weight: SemiBold;
      font-size: 16px;
      width: 95%;

      @media screen and (max-width: $screen-sm) {
        width: 80%;
      }

      input {
        color: $gray-650;
        font-weight: bold;
        font-family: "Montserrat", sans-serif, Arial, Helvetica;
        font-weight: SemiBold;
        font-size: 16px;
      }
    }

    &__text {
      text-align: left;
      padding: 5px 10px;
      color: $gray-550;
      font-family: "Open Sans", sans-serif, Arial, Helvetica;
      font-weight: Regular;
      font-size: 16px;
      width: 95%;

      @media screen and (max-width: $screen-sm) {
        width: 90%;
      }

      textarea {
        color: $gray-550;
        font-family: "Open Sans", sans-serif, Arial, Helvetica;
        font-weight: Regular;
        font-size: 16px;
      }
    }
  }
}
</style>
