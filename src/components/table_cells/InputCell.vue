<template>
  <label>
    <input
      ref="myInput"
      v-model="model"
      :type="type"
    >
  </label>
</template>

<script>
export default {
  name: 'InputCell',
  props: {
    type: { type: String, default: () => 'number' },
    value: { type: String, default: () => '' },
  },
  computed: {
    model: {
      get() { return this.value; },
      set(newValue) { this.$emit('input', newValue); },
    },
  },
  mounted() {
    this.$refs.myInput.oninput = function t() {
      if (this.value.length > 6) {
        this.value = this.value.slice(0, 6);
      }
    };
  },
};
</script>

<style lang="scss">
  input[type="number"] {
    width: 100%;
    height: 47px;
    box-sizing: border-box;
  }
</style>
