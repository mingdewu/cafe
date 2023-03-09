const countUpButton = {
  template: '#btn-template',
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onClick: function () {
      this.$emit('update:count', this.count + 3)
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
