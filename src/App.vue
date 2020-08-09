<template>
  <div id="app">
    <div class="navigation">
      <div
        v-for="(page, index) in pages"
        :key="index"
        class="navigation__button elevation"
        :class="currentPageIdx === index ? 'active' : ''"
        @click="currentPageIdx = index"
      >
        {{ page.text }}
      </div>
    </div>
    <component :is="pages[currentPageIdx].value" />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    FirstPage: () => import('@/components/pages/First.vue'),
    SecondPage: () => import('@/components/pages/Second.vue'),
  },
  data: () => ({
    currentPageIdx: 0,
    pages: [
      { text: 'Первая страница', value: 'first-page' },
      { text: 'Вторая страница', value: 'second-page' },
    ],
  }),
};
</script>

<style lang="scss">
#app {
  .navigation {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5vw, min-content));
    grid-gap: 1vw;
    &__button {
      min-width: 5vw;
      min-height: 3vw;
      display: flex;
      padding: 1vw;
      white-space: nowrap;
      background: #3b3bf1;
      cursor: pointer;
      border-radius: 10px;
      color: #e2e2e2;
      align-items: center;
      margin-bottom: 2vw;
      text-transform: uppercase;
      user-select: none;
      &:hover { opacity: .7; }
    }
    .active { background: gray; }
  }
  .elevation {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
}
</style>
