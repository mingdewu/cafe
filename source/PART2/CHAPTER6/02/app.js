// ①定数
const ANSWER = { YES: 1, NO: 0 }

const app = Vue.createApp({})

// 問題表示＆解答コンポーネント
app.component("qa-template", {
  props: {
    // ②問題文
    questionText: String
  },
  template: "#qa-template",
  methods: {
    onClickYesBtn: function () {
      // ③YESボタンをクリックし、YES用の値とイベントを親コンポーネントへ返す
      this.$emit("click-yes-btn", ANSWER.YES)
    },
    onClickNoBtn: function () {
      // ④NOボタンをクリックし、NO用の値とイベントを親コンポーネントへ返す
      this.$emit("click-no-btn", ANSWER.NO)
    }
  }
})

// アプリケーションを #app へマウント
app.mount("#app")
