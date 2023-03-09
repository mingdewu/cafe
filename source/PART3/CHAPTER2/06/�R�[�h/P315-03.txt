<template>
  <layout-wrapper>
    <layout-visual title="Menu" :height="40" visual="visual-menu" />
    <div class="container w-full mx-auto pt-20 pb-20 px-6 md:px-0">
      <div class="mb-20">
        <div class="w-full mb-10 shadow-lg">
          <div
            class="w-full bg-gray-200 flex flex-wrap justify-between px-4 py-4"
          >
            <img
              src="~/assets/img/menu04.jpg"
              alt="MdNオリジナルパンケーキ"
              class="w-2/5"
            />
            <div class="w-7/12">
              <div class="font-bold text-xl mb-2">MdNオリジナルパンケーキ</div>
              <p class="text-base mb-2">
                MdNカフェオリジナルパンケーキ。
                自然素材にこだわったパンケーキです。
              </p>
              <p class="text-gray-700 text-base mb-4">300円（税込）</p>
            </div>
          </div>
        </div>
        <div class="w-full mb-10 shadow-lg">
          <div
            class="w-full bg-gray-200 flex flex-wrap justify-between px-4 py-4"
          >
            <img src="~/assets/img/menu03.jpg" alt="カプチーノ" class="w-2/5" />
            <div class="w-7/12">
              <div class="font-bold text-xl mb-2">カプチーノ</div>
              <p class="text-base mb-2">
                MdNカフェオリジナルのカプチーノです。
              </p>
              <p class="text-gray-700 text-base mb-4">500円（税込）</p>
            </div>
          </div>
        </div>
        <div class="w-full mb-10 shadow-lg">
          <div
            class="w-full bg-gray-200 flex flex-wrap justify-between px-4 py-4"
          >
            <img
              src="~/assets/img/menu02.jpg"
              alt="モーニングセット：ベーコンとサラダと目玉焼きトーストセット"
              class="w-2/5"
            />
            <div class="w-7/12">
              <div class="font-bold text-xl mb-2">
                モーニングセット：ベーコンとサラダと目玉焼きトーストセット
              </div>
              <p class="text-base mb-2">
                モーニングセットメニューです。
                ベーコンとサラダと目玉焼きトーストセットで8時〜10時までのメニューです。
              </p>
              <p class="text-gray-700 text-base mb-4">500円（税込）</p>
            </div>
          </div>
        </div>
        <div class="w-full mb-10 shadow-lg">
          <div
            class="w-full bg-gray-200 flex flex-wrap justify-between px-4 py-4"
          >
            <img
              src="~/assets/img/menu01.jpg"
              alt="アメリカンコーヒー"
              class="w-2/5"
            />
            <div class="w-7/12">
              <div class="font-bold text-xl mb-2">アメリカンコーヒー</div>
              <p class="text-base mb-2">アメリカンコーヒーです</p>
              <p class="text-gray-700 text-base mb-4">450円（税込）</p>
            </div>
          </div>
        </div>
      </div>
      <base-button name="トップへ戻る" link="/" />
    </div>
  </layout-wrapper>
</template>
