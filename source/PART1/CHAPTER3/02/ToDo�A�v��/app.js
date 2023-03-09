Vue.createApp({
  data: function () {
    return {
      todoTitle: '',
      todoDescription: '',
      todoCategories: [],
      hideDoneTodo: false,
      searchWord: '',
    }
  },
}).mount('#app')
