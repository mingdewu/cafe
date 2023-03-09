Vue.createApp({
  data: function () {
    return {
      count: 0,
    }
  },
  methods: {
    onClickCountUp: function (event) {
      this.count += 1
    },
  },
}).mount('#app')
