Vue.createApp({
  data: function () {
    return {
      isActive: false,
    }
  },
  computed: {
    className: function () {
      return {
        'is-active': this.isActive,
        'is-inactive': !this.isActive,
      }
    },
  },
}).mount('#app')
