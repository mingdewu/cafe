const ANSWER = { YES: 1, NO: 0 }
const CORRECT = { CD:1,VALUE:"o"}
const INCORRECT = {CD:0,VALUE:"X"}
const MAX_POINT = 100


const app = Vue.createApp({
    data:function(){
        return {
            questions:[
                {
                    text: "v-on:click の省略記法は #click である",
                    answer: ANSWER.NO
                },
                {
                    text:
                        "単一要素にトランジション効果を付与するのは aniamtion コンポーネントである",
                    answer: ANSWER.NO
                },
                {
                    text: "v-for の区切り文字として in の他に of を使用できる",
                    answer: ANSWER.YES
                },
                {
                    text:
                      "app.component で定義したコンポーネントを使う場合は、定義した後に Vue.createApp() の components オプション内で再度定義する必要がある",
                    answer: ANSWER.NO
                },
                {
                    text: "Vue.js をもっと書きたい",
                    answer: ANSWER.YES
                }
            ],
            currentIndex:0,
            yourAnswers:[]
        }
    },
    computed: {
        currentQuestion:function(){
            return this.questions[this.currentIndex]
        },
        correntAnswers:function(){
            const self = this
            return this.questions.filter(function(ques){
                return question.answer === self.yourAnswers[index]
            })
        },
        totalScore:function(){
            const score = MAX_POINT /this.questions.length
            return Math.floor(score * this.correntAnswers.length)
        }
    },
    methods:{
        doAnsewer:function(answer){
            this.yourAnswers[this.currentIndex] = answer
            this.nextQuestion()
        },
        nextQuestion: function () {
            if (this.currentIndex < this.questions.length) {
              this.currentIndex += 1
            }
          },
          doRestart: function () {
            this.currentIndex = 0
            this.initYourAnswersArray()
          },
          initYourAnswersArray: function () {
            this.yourAnswers = Array(this.questions.length)
          }
        },
        mounted: function () {
            this.initYourAnswersArray()
          }
})
app.component("qa-template", {
    props: {
      // ②問題文
      questionText: String
    },
    template: "#qa-template",
    methods: {
        onClickYesBtn: function () {
            this.$emit("click-yes-btn", ANSWER.YES)
    },
    onClickNoBtn: function () {
        this.$emit("click-no-btn", ANSWER.NO)
    }
  }
})

app.component("result-template",{
    props:{
        totalScore:{
            type:Number,
            required:true
        },
        questions: Array,
        yourAnswers: Array
    },
    template: "#result-template",
    computed: {
        corrects: function () {
            const self = this
            return this.questions.map(function (q, i) {
              if (q.answer === self.yourAnswers[i]) {
                return { cd: CORRECT.CD, value: CORRECT.VALUE }
              }else{
                return {cd:INCORRECT.CD,value:INCORRECT.VALUE}
              }
            })
        },
        maxPoint:function(){
            return MAX_POINT
        },
        isPerfect:function(){
            return this.totalScore === this.maxPoint
        }
    },
    methods:{
        onClick:function () {
            this.$emit("click")
        },
        getCorrectClassName:function(correctCd){
            return correctCd === CORRECT.CD 
            ? "has-text-weight-bold has-text-white has-backgroud-success"
            :""
        }
    }
})
app.mount("#app")