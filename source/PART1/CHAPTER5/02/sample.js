const myTitle = {
  props: {
    name: {
      type: String,
      default: '',
      validator: function (value) {
        return value.length > 0
      },
      required: true,
    },
  },
  computed: {
    upperCaseName: function () {
      return this.name.toUpperCase()
    },
  },
  template: '#title-template',
}
Vue.createApp({
  data: function () {
    return {
      authorName: 'yamada',
    }
  },
  components: {
    'my-title': myTitle,
  },
}).mount('#app')
