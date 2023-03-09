Vue.createApp({
  components: {
    'my-title': {
      data: function () {
        return {
          title: '',
        }
      },
      template: '#title-template',
    },
  },
}).mount('#app')
