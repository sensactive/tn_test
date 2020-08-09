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
  name: 'Second',
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
    for (let i = 1; i < 31; i += 1) {
      this.headers.push({
        text: `${i} д.`,
        value: i,
        contentCellType: 'icon-cell',
      });
      // eslint-disable-next-line no-return-assign,no-param-reassign
      this.items.forEach((item) => { item[i] = ''; });
    }
  },
};
</script>

<style scoped>

</style>
