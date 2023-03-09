<template>
  <div :class="wrapClass">
    <div :class="itemClass">
      <div :class="blockClass">
        <img
          src="~/assets/img/menu04.jpg"
          alt="MdNオリジナルパンケーキ"
          :class="imageClass"
        />
        <div :class="dataClass">
          <div class="font-bold text-xl mb-2">MdNオリジナルパンケーキ</div>
          <p v-if="flagBody" class="text-base mb-2">
            MdNカフェオリジナルパンケーキ。 自然素材にこだわったパンケーキです。
          </p>
          <p class="text-gray-700 text-base mb-4">300円（税込）</p>
        </div>
      </div>
    </div>
    <div :class="itemClass">
      <div :class="blockClass">
        <img
          src="~/assets/img/menu03.jpg"
          alt="カプチーノ"
          :class="imageClass"
        />
        <div :class="dataClass">
          <div class="font-bold text-xl mb-2">カプチーノ</div>
          <p v-if="flagBody" class="text-base mb-2">
            MdNカフェオリジナルのカプチーノです。
          </p>
          <p class="text-gray-700 text-base mb-4">500円（税込）</p>
        </div>
      </div>
    </div>
    <div :class="itemClass">
      <div :class="blockClass">
        <img
          src="~/assets/img/menu02.jpg"
          alt="モーニングセット：ベーコンとサラダと目玉焼きトーストセット"
          :class="imageClass"
        />
        <div :class="dataClass">
          <div class="font-bold text-xl mb-2">
            モーニングセット：ベーコンとサラダと目玉焼きトーストセット
          </div>
          <p v-if="flagBody" class="text-base mb-2">
            モーニングセットメニューです。
            ベーコンとサラダと目玉焼きトーストセットで8時〜10時までのメニューです。
          </p>
          <p class="text-gray-700 text-base mb-4">500円（税込）</p>
        </div>
      </div>
    </div>
    <div :class="itemClass">
      <div :class="blockClass">
        <img
          src="~/assets/img/menu01.jpg"
          alt="アメリカンコーヒー"
          :class="imageClass"
        />
        <div :class="dataClass">
          <div class="font-bold text-xl mb-2">アメリカンコーヒー</div>
          <p v-if="flagBody" class="text-base mb-2">アメリカンコーヒーです</p>
          <p class="text-gray-700 text-base mb-4">450円（税込）</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutMenuList',
  props: {
    wrapClass: {
      type: String,
      default: '',
    },
    itemClass: {
      type: String,
      default: 'w-full mb-10 shadow-lg',
    },
    blockClass: {
      type: String,
      default:
        'md:w-full bg-gray-200 flex flex-wrap justify-between md:px-4 md:py-4',
    },
    imageClass: {
      type: String,
      default: 'md:w-2/5',
    },
    dataClass: {
      type: String,
      default: 'w-7/12 px-6 py-4 mb:px-0 mb:px-0',
    },
    flagBody: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
