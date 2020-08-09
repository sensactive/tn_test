<template>
  <div>
    <main-table
      :headers="headers"
      :items="items"
    />
  </div>
</template>

<script>
export default {
  name: 'First',
  data: () => ({
    headers: [
      { value: 'title' },
    ],
    items: [
      { title: 'Наименование' },
      { title: 'Название' },
      { title: 'Заголовок строки' },
      { title: 'Порядковый номер' },
    ],
  }),
  created() {
    for (let i = 1; i < 25; i += 1) {
      this.headers.push({
        text: `${i} ч.`,
        value: i,
        contentCellType: 'input-cell',
      });
      // eslint-disable-next-line no-return-assign,no-param-reassign
      this.items.forEach((item) => { item[i] = ''; });
    }
  },
};
</script>

<style scoped>

</style>
