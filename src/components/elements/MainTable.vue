<template>
  <div class="table-sc elevation">
    <div
      v-for="header in headers"
      :key="header.value"
      class="table-header"
      :class="header.value === 'title' ? 'first-col' : ''"
    >
      {{ header.text }}
    </div>
    <template v-for="(item, itemIdx) in items">
      <div
        v-for="(header, headerIdx) in headers"
        class="table-cell"
        :class="headerIdx === 0 ? 'first-col' : ''"
      >
        <slot
          :name="`item.${header.value}`"
          :item="item"
        >
          <div
            v-if="header.value === 'title'"
            @click="openNeededChildren($event, itemIdx)"
          >
            {{ item[header.value] }}
          </div>
          <component
            :is="header.contentCellType"
            v-else
          />
        </slot>
      </div>
      <template v-if="item.children && showingChildrenIdxs.indexOf(itemIdx) !== -1">
        <template
          v-for="child in item.children"
        >
          <div
            v-for="(header, headerIdx) in headers"
            class="table-cell"
            :class="headerIdx === 0 ? 'first-col' : ''"
          >
            <slot
              :name="`item.child.${header.value}`"
              :item="child"
            >
              <div
                v-if="header.value === 'title'"
              >
                {{ child[header.value] }}
              </div>
              <component
                :is="header.contentCellType"
                v-else
              />
            </slot>
          </div>
        </template>
      </template>
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
  data: () => ({
    showingChildrenIdxs: [],
  }),
  mounted() {
    const el = document.querySelector('.table-sc');
    if (el) {
      el.style.gridTemplateColumns = `repeat(${this.headers.length}, max-content)`;
    }
  },
  methods: {
    openNeededChildren(e, childrenIdx) {
      const idx = this.showingChildrenIdxs.indexOf(childrenIdx);
      if (idx !== -1) this.showingChildrenIdxs.splice(idx, 1);
      else this.showingChildrenIdxs.push(childrenIdx);
    },
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
    grid-template-rows: repeat(auto-fit, minmax(30px, max-content));
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
