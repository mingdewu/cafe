Vue.createApp({
  data: function () {
    return {
      todos: [
        {
          title: 'タスク 1',
        },
        {
          title: 'タスク 2',
        },
      ],
    }
  },
  watch: {
    todos: {
      handler: function (next, prev) {
        console.log('todosに変更がありました')
      },
      deep: true,
    },
  },
  methods: {
    onClick: function (event) {
      this.todos[1].title = 'たすく 2'
    },
  },
}).mount('#app')
