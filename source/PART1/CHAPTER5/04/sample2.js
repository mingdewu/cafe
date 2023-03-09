Vue.createApp({
  data: function () {
    return {
      filterDone: false,
      items: [
        {
          title: 'タイトル - 1',
          done: false,
        },
        {
          title: 'タイトル - 2',
          done: true,
        },
        {
          title: 'タイトル - 3',
          done: true,
        },
        {
          title: 'タイトル - 4',
          done: false,
        },
      ],
    }
  },
  computed: {
    filteredItems: function () {
      if (this.filterDone) {
        return this.items.filter(function (item) {
          return item.done
        })
      }
      return this.items
    },
  },
}).mount('#app')
