<template>
  <div class="table-sc">
    <div class="table__header"></div>
    <div class="table__rows">
      <div class="table__rows__first-col">
        <div
          v-for="(row, index) in rows"
          :key="index + 'title'"
          class="table__rows__first-col__cell"
        >
          {{ row.text }}
        </div>
      </div>
      <div class="table__rows__content" ref="content">
        <div v-for="(col, colIdx) in cols" :key="colIdx" class="table__rows__content-row">
          <div
            v-for="(row, rowIdx) in rows"
            :key="rowIdx + 'cell'"
            class="table__rows__content-row__cell"
          >
          <!--            <input type="text">-->
            {{ col[row.value] }}
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'MainTable',
  computed: {
  },
  props: {
    rows: { type: Array, default: () => [] },
    cols: { type: Array, default: () => [] },
  },
  mounted() {
    this.$refs.content.style.gridTemplateColumns = `repeat(${this.cols.length}, max-content)`;
  },
};
</script>

<style lang="scss">
  .table {
    &-sc {
      width: 1000px;
      height: 500px;
    }
    &__rows {
      display: grid;
      grid-template-columns: 10vw max-content;
      width: inherit;
      &__content {
        display: grid;
        overflow: auto;
        width: inherit;
      }
    }
  }
</style>
