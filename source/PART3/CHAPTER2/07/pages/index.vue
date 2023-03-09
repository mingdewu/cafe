<template>
  <layout-wrapper>
    <layout-visual
      title="NUXT SMAPLE SITE DEMO"
      message="お知らせやメニューをmicroCMSを導入したDEMOサイトになります。"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <base-heading>MdN Cafeのおすすめメニュー</base-heading>
      <layout-menu-list
        wrap-class="flex md:flex-wrap justify-between mb-20 md:mb-0"
        item-class="md:w-56 mb-20 shadow-lg bg-gray-200"
        block-class="max-w"
        image-class="w-full"
        data-class="px-6 py-4"
        :flag-body="false"
      />
      <base-button name="メニューの一覧" link="/menu" />
      <base-heading>MdN Cafeのお知らせ</base-heading>
      <layout-information-list />
      <base-button name="お知らせの一覧" link="/information" />
    </div>
  </layout-wrapper>
</template>

<style>
.visual-home {
  background-image: url('~@/assets/img/visual-home.jpg');
}
</style>
