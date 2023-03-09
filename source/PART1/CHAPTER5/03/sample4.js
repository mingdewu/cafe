const countUpButton = {
  template: '#btn-template',
  methods: {
    onClick: function () {
      this.$emit('count-up', 3)
    },
  },
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
