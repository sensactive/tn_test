<template>
  <div class="table-sc elevation pull-down">
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
            class="first-col__content"
            @click="openCloseNeededChildren($event, itemIdx)"
          >
            {{ item[header.value] }}
            <span v-if="item.children">
              {{ !needToShowChildren(itemIdx) ? '▼' : '▲' }}
            </span>
          </div>
          <component
            :is="header.contentCellType"
            v-else
          />
        </slot>
      </div>
      <template
        v-if="needToShowChildren(itemIdx)"
      >
        <template
          v-for="child in item.children"
        >
          <div
            v-for="(header, headerIdx) in headers"
            class="table-cell children pull-down"
            :class="{
              'first-col': headerIdx === 0,
            }"
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
    openCloseNeededChildren(e, childrenIdx) {
      const idx = this.showingChildrenIdxs.indexOf(childrenIdx);
      if (idx !== -1) this.showingChildrenIdxs.splice(idx, 1);
      else this.showingChildrenIdxs.push(childrenIdx);
    },
    needToShowChildren(childrenIdx) {
      return this.showingChildrenIdxs.indexOf(childrenIdx) !== -1;
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
    grid-template-rows: repeat(auto-fit, minmax(47px, max-content));
    .first-col {
      display: flex;
      background: #e2e2e2;
      position: sticky;
      left: 0;
      z-index: 10;
      &.children {
        background: #f8efff;
      }
      &__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 5px;
        span { cursor: pointer; }
      }
    }
    .table {
      &-header.first-col { z-index: 12; }
      &-header {
        position: sticky;
        top: 0;
        background: #e2e2e2;
        z-index: 10;
      }
    }
    & > div {
      text-align: center;
      border: 1px solid rgba(0,0,0,.2);
    }
    .pull-down{ animation: pull-down .3s ease-in-out; transform-origin: 50% 0;}
    @keyframes pull-down {
      0% {
        transform: scaleY(0.1);
      }
      100% {
        transform: scaleY(1);
      }
    }

    @-webkit-keyframes pull-down {
      0% {
        -webkit-transform: scaleY(0.1);
      }
      100% {
        -webkit-transform: scaleY(1);
      }
    }
  }
</style>
