Vue.createApp({
  data: function () {
    return {
      // 商品一覧
      items: []
    }
  },
  methods: {
    // 商品一覧をjsonから取得する
    fetchItem: function () {
      const self = this
      axios.get("./item.json").then(function (response) {
        self.items = response.data
        console.log(response) //コンソールに出力
      })
    }
  },
  mounted: function () {
    // アプリケーションが立ち上がったら商品一覧を取得する
    this.fetchItem()
  }
}).mount("#app")
