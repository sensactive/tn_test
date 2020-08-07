<template>
  <div class="table-sc">
    <div
      v-for="header in headers"
      :key="header.value"
      class="table-header"
    >
      {{ header.text }}
    </div>
    <template v-for="(item) in items">
      <div
        v-for="header in headers"
        class="table-cell"
        :class="header.value === 'title' ? 'table-cell_first-col' : ''"
      >
        <slot
          :name="`item.${header.value}`"
          :item="item"
        >
          <div
            v-if="header.value === 'title'"
          >
            {{ item[header.value] }}
          </div>
          <label v-else>
            <input
              type="number"
              :placeholder="item[header.value]"
              max="999999"
            >
          </label>
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MainTable',
  props: {
    headers: { type: Array, default: () => [] },
    items: { type: Array, default: () => [] },
  },
  mounted() {
    const el = document.querySelector('.table-sc');
    if (el) {
      el.style.gridTemplateColumns = `repeat(${this.headers.length}, minmax(10vw, max-content))`;
    }
    const allInputs = document.querySelectorAll('input[type="number"]');
    allInputs.forEach((input) => {
      // eslint-disable-next-line no-param-reassign,func-names
      input.oninput = function () {
        if (this.value.length > 6) { this.value = this.value.slice(0, 6); }
      };
    });
  },
};
</script>

<style lang="scss">
  .table-sc {
    width: 1000px;
    height: 500px;
    display: grid;
    border: 1px solid rgba(0,0,0,.2);
    overflow: auto;
    .table {
      &-header {
        position: sticky;
        top: 0;
        background: #e2e2e2;
      }
      &-cell {
        padding: 0;
        input[type="number"] {
          padding: 0;
          margin: 0;
          max-width: 100%;
          min-height: 100%;
          box-sizing: border-box;
          font-size: 2vw;
        }
        &_first-col {
          background: #e2e2e2;
          position: sticky;
          left: 0;
        }
      }
    }
    & > div {
      text-align: center;
      border: 1px solid rgba(0,0,0,.2);
    }
  }
</style>
