<template>
  <layout-wrapper>
    <layout-visual
      title="NUXT SMAPLE SITE DEMO"
      message="お知らせやメニューをmicroCMSを導入したDEMOサイトになります。"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <base-heading>MdN Cafeのおすすめメニュー</base-heading>
      <div class="flex flex-wrap justify-between mb-20 md:mb-0">
        <div class="md:w-56 mb-20 shadow-lg bg-gray-200">
          <div class="max-w">
            <img src="~/assets/img/menu01.jpg" alt="商品名" class="w-full" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">アメリカンコーヒー</div>
              <p class="text-gray-700 text-base mb-4">480円（税込）</p>
            </div>
          </div>
        </div>
        <div class="md:w-56 mb-20 shadow-lg bg-gray-200">
          <div class="max-w">
            <img src="~/assets/img/menu01.jpg" alt="商品名" class="w-full" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">アメリカンコーヒー</div>
              <p class="text-gray-700 text-base mb-4">480円（税込）</p>
            </div>
          </div>
        </div>
        <div class="md:w-56 mb-20 shadow-lg bg-gray-200">
          <div class="max-w">
            <img src="~/assets/img/menu01.jpg" alt="商品名" class="w-full" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">アメリカンコーヒー</div>
              <p class="text-gray-700 text-base mb-4">480円（税込）</p>
            </div>
          </div>
        </div>
      </div>
      <base-button name="メニューの一覧" link="/menu" />
      <base-heading>MdN Cafeのお知らせ</base-heading>
      <div class="mb-20">
        <div
          class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md mb-5"
        >
          <a href="/information/detail" class="block px-4 py-3">
            <time class="text-gray-700 text-base mb-1 block md:w-1/6">
              2020.08.15
            </time>
            <div class="md:w-10/12">お知らせタイトル</div>
          </a>
        </div>
        <div
          class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md mb-5"
        >
          <a href="/information/detail" class="block px-4 py-3">
            <time class="text-gray-700 text-base mb-1 block md:w-1/6">
              2020.08.15
            </time>
            <div class="md:w-10/12">お知らせタイトル</div>
          </a>
        </div>
        <div
          class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 shadow-md mb-5"
        >
          <a href="/information/detail" class="block px-4 py-3">
            <time class="text-gray-700 text-base mb-1 block md:w-1/6">
              2020.08.15
            </time>
            <div class="md:w-10/12">お知らせタイトル</div>
          </a>
        </div>
      </div>
      <base-button name="お知らせの一覧" link="/information" />
    </div>
  </layout-wrapper>
</template>

<style>
.visual-home {
  background-image: url('~@/assets/img/visual-home.jpg');
}
</style>
