<template>
  <div id="app">
    <main-table :rows="rows" :cols="cols"/>
  </div>
</template>

<script>
import MainTable from '@/components/MainTable.vue';

export default {
  name: 'App',
  components: {
    MainTable,
  },
  data: () => ({
    rows: [
      { text: 'Наименование', value: 'fullName' },
      { text: 'Название', value: 'name' },
      { text: 'Заголовок строки', value: 'titleRow' },
      { text: 'Порядковый номер', value: 'number' },
    ],
    cols: [
      {
        fullName: '', name: '', titleRow: '', number: '1',
      },
      {
        fullName: '', name: '', titleRow: '', number: '2',
      },
      {
        fullName: '', name: '', titleRow: '', number: '3',
      },
      {
        fullName: '', name: '', titleRow: '', number: '4',
      },
      {
        fullName: '', name: '', titleRow: '', number: '5',
      },
      {
        fullName: '', name: '', titleRow: '', number: '6',
      },
      {
        fullName: '', name: '', titleRow: '', number: '7',
      },
      {
        fullName: '', name: '', titleRow: '', number: '8',
      },
      {
        fullName: '', name: '', titleRow: '', number: '9',
      },
      {
        fullName: '', name: '', titleRow: '', number: '10',
      },
      {
        fullName: '', name: '', titleRow: '', number: '11',
      },
      {
        fullName: '', name: '', titleRow: '', number: '12',
      },
      {
        fullName: '', name: '', titleRow: '', number: '13',
      },
      {
        fullName: '', name: '', titleRow: '', number: '14',
      },
      {
        fullName: '', name: '', titleRow: '', number: '15',
      },
      {
        fullName: '', name: '', titleRow: '', number: '16',
      },
      {
        fullName: '', name: '', titleRow: '', number: '17',
      },
      {
        fullName: '', name: '', titleRow: '', number: '18',
      },
      {
        fullName: '', name: '', titleRow: '', number: '19',
      },
      {
        fullName: '', name: '', titleRow: '', number: '20',
      },
      {
        fullName: '', name: '', titleRow: '', number: '21',
      },
      {
        fullName: '', name: '', titleRow: '', number: '22',
      },
      {
        fullName: '', name: '', titleRow: '', number: '23',
      },
      {
        fullName: '', name: '', titleRow: '', number: '24',
      },
    ],
  }),
};
</script>

<style lang="scss">
#app {
}
</style>
