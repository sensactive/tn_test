<template>
  <div class="table-sc">
    <div
      v-for="header in headers"
      :key="header.value"
      class="table-header"
      :class="header.value === 'title' ? 'first-col' : ''"
    >
      {{ header.text }}
    </div>
    <template v-for="(item) in items">
      <div
        v-for="header in headers"
        class="table-cell"
        :class="header.value === 'title' ? 'first-col' : ''"
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
          <component
            :is="header.contentCellType"
            v-else
          />
        </slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MainTable',
  components: {
    InputCell: () => import('@/components/table_cells/InputCell.vue'),
    IconCell: () => import('@/components/table_cells/Icon.vue'),
  },
  props: {
    headers: { type: Array, default: () => [] },
    items: { type: Array, default: () => [] },
  },
  mounted() {
    const el = document.querySelector('.table-sc');
    if (el) {
      el.style.gridTemplateColumns = `repeat(${this.headers.length}, max-content)`;
    }
  },
};
</script>

<style lang="scss">
  .table-sc {
    box-sizing: border-box;
    width: 1000px;
    height: 500px;
    display: grid;
    border: 1px solid rgba(0,0,0,.2);
    overflow: auto;
    grid-template-rows: repeat(auto-fit, minmax(1px, max-content));
    .first-col {
      background: #e2e2e2;
      position: sticky;
      left: 0;
      z-index: 10;
    }
    .table {
      &-header.first-col { z-index: 12; }
      &-header {
        position: sticky;
        top: 0;
        background: #e2e2e2;
        z-index: 10;
      }
      &-cell {
      }
    }
    & > div {
      text-align: center;
      border: 1px solid rgba(0,0,0,.2);
    }
  }
</style>
