Vue.createApp({
  data: function () {
    return {
      // 商品一覧
      items: [],
      // 絞り込みテキスト
      filterText: ""
    }
  },
  computed: {
    filteredItems: function () {
      const self = this
      if (this.filterText) {
        return this.items.filter(function (item) {
          return item.name.indexOf(self.filterText) !== -1
        })
      } else {
        return this.items
      }
    }
  },
  methods: {
    // 商品一覧をjsonから取得する
    fetchItem: function () {
      const self = this
      axios.get("./item.json").then(function (response) {
        self.items = response.data
      })
    }
  },
  mounted: function () {
    // アプリケーションが立ち上がったら商品一覧を取得する
    this.fetchItem()
  }
}).mount("#app")
