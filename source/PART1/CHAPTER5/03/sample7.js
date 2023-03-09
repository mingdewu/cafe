const updateAuthor = {
  template: '#update-author-template',
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onClickAge: function () {
      this.$emit('update:age', this.age + 1)
    },
    onInput: function ($event) {
      this.$emit('update:name', $event.target.value)
    },
  },
}
Vue.createApp({
  data: function () {
    return {
      author: {
        name: 'Yamada',
        age: 40,
      },
    }
  },
  components: {
    'update-author': updateAuthor,
  },
}).mount('#app')
