Vue.createApp({
  data: function () {
    return {
      items: [
        {
          id: 1,
          name: 'item-1',
        },
        {
          id: 2,
          name: 'item-2',
        },
      ],
    }
  },
}).mount('#app')
