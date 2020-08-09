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
      {
        title: 'Наименование',
        children: [
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
        ],
      },
      {
        title: 'Название',
        children: [
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
        ],
      },
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
      this.items.map((item) => {
        if (item.children) item.children.map((child) => child[i] = '');
        return item[i] = '';
      });
    }
  },
};
</script>

<style scoped>

</style>
