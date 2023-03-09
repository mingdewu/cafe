// ①定数
const ANSWER = { YES: 1, NO: 0 }

const CORRECT = { CD: 1, VALUE: "○" }
const INCORRECT = { CD: 0, VALUE: "×" }
const MAX_POINT = 100

const app = Vue.createApp({})

// 問題表示＆解答コンポーネント
app.component("qa-template", {
  props: {
    // 問題文
    questionText: String
  },
  template: "#qa-template",
  methods: {
    onClickYesBtn: function () {
      // YESボタンをクリックし、YES用の値とイベントを親コンポーネントへ返す
      this.$emit("click-yes-btn", ANSWER.YES)
    },
    onClickNoBtn: function () {
      // NOボタンをクリックし、NO用の値とイベントを親コンポーネントへ返す
      this.$emit("click-no-btn", ANSWER.NO)
    }
  }
})

// 結果表示コンポーネント
app.component("result-template", {
  props: {
    // ②
    // 合計得点
    totalScore: {
      type: Number,
      required: true
    },
    // 問題文配列
    questions: Array,
    // 自分の解答配列
    yourAnswers: Array
  },
  template: "#result-template",
  computed: {
    // ③ 解答の正解 or 不正解の配列
    corrects: function () {
      const self = this
      return this.questions.map(function (q, i) {
        if (q.answer === self.yourAnswers[i]) {
          // 正解
          return { cd: CORRECT.CD, value: CORRECT.VALUE }
        } else {
          // 不正解
          return { cd: INCORRECT.CD, value: INCORRECT.VALUE }
        }
      })
    },
    // ④ 最高得点
    maxPoint: function () {
      return MAX_POINT
    },
    // ⑤ 満点を取れているかを真偽値で返す
    isPerfect: function () {
      return this.totalScore === this.maxPoint
    }
  },
  methods: {
    // ⑥ 最初からやり直すボタンのクリックイベントを親コンポーネントへ返す
    onClick: function () {
      this.$emit("click")
    },
    // ⑦ 問題の正解と自分の解答が一致した場合にclassを追加する
    getCorrectClassName: function (correctCd) {
      return correctCd === CORRECT.CD
        ? "has-text-weight-bold has-text-white has-background-success"
        : ""
    }
  }
})

// アプリケーションを #app へマウント
app.mount("#app")
