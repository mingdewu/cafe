const myTitle = {
  data: function () {
    return {
      title: '',
    }
  },
  template: '#title-template',
}
Vue.createApp({
  components: {
    'my-title': myTitle,
  },
}).mount('#app')
