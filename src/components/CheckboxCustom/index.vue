<template>
  <div>
    <input class="styled-checkbox" :id="`styled-checkbox-${name}`" type="checkbox" value="value1">
    <label :for="`styled-checkbox-${name}`"></label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxCustom',
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/css/patterns.scss";

$checkbox-size: 16px;  

.styled-checkbox {
  width: 50px;
  border: 1px solid red;
  position: absolute; // take it out of document flow
  opacity: 0; // hide it

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  & + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: $checkbox-size;
    height: $checkbox-size;
    background: white;
    border: 1px solid $purple;
  }

  // Box hover
  &:hover + label:before {
    background: $purple;
  }
  
  // Box focus
  &:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  // Box checked
  &:checked + label:before {
    background: $purple;
  }
  
  // Disabled state label.
  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  // Checkmark. Could be replaced with an image
  &:checked + label:after {
    content: '';
    position: absolute;
    left: 4px;
    top: 8px;
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 
      2px 0 0 white,
      4px 0 0 white,
      4px -2px 0 white,
      4px -4px 0 white,
      4px -6px 0 white,
      4px -8px 0 white;
    transform: rotate(45deg);
  }
}
</style>
