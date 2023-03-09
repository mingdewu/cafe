const countUpButton = {
  template: '#btn-template',
}
Vue.createApp({
  data: function () {
    return {
      count: 0,
    }
  },
  components: {
    'count-up-button': countUpButton,
  },
}).mount('#app')
