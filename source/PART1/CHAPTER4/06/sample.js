Vue.createApp({
  data: function () {
    return {
      imgSrc: 'img/cat.jpg',
    }
  },
  methods: {
    onClick: function (event) {
      this.imgSrc = 'img/dog.jpg'
    },
  },
}).mount('#app')
