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
  methods: {
    countUp: function (volume) {
      this.count += volume
    },
  },
}).mount('#app')
