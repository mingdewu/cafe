Vue.createApp({
  data: function () {
    return {
      todoCategories: [],
    }
  },
  computed: {
    joinedToDoCategories: function () {
      return this.todoCategories.join(' / ')
    },
  },
}).mount('#app')
