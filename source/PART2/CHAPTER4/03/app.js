//ステップ③　methodsプロパティを指定
function nextFrame(cb) {
  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(cb)
  })
}

//ステップ①　コンポーネントとして登録
const app = Vue.createApp({})

app.component("my-sample-accordion", {
  template: "#my-sample-accordion",
  //ステップ②　propsを指定
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      isShown: false
    }
  },
  //ステップ③　methodsプロパティを指定
  methods: {
    enter: function (el) {
      el.style.overflow = "hidden" //overflowをhiddenに設定
      const height = el.scrollHeight //高さを取得して変数heightに保存
      el.style.height = "0"
      // nextFrame(cb)関数でアニメーションを設定
      nextFrame(function () {
        el.style.height = height + "px"
      })
    },
    leave: function (el) {
      el.style.overflow = "hidden" //overflowをhiddenに設定
      el.style.height = el.scrollHeight + "px"
      // nextFrame(cb)関数でアニメーションを設定
      nextFrame(function () {
        el.style.height = "0"
      })
    },
    afterTransition: function (el) {
      //④style属性を初期化
      el.style.overflow = ""
      el.style.height = ""
    }
  }
})

app.mount("#app")
