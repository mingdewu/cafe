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
    categoryText: function () {
      return '選択されているカテゴリー: ' + this.joinedToDoCategories
    },
  },
}).mount('#app')
