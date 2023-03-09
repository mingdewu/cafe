Vue.createApp({
  data: function () {
    return {
      todoTitle: '',
    }
  },
  watch: {
    todoTitle: function (next, prev) {
      console.log('next: ' + next)
      console.log('prev: ' + prev)
    },
  },
}).mount('#app')
