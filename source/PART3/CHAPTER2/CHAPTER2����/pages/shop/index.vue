<template>
  <div class="wrapper">
    <layout-visual title="Shop" :height="40" visual="visual-shop" />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <table class="table-auto w-full mb-10">
        <tbody>
          <tr>
            <td class="border px-4 py-2">店舗名</td>
            <td class="border px-4 py-2">MdNカフェ</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">店舗住所</td>
            <td class="border px-4 py-2">
              〒101-0051<br />
              東京都千代田区神田神保町1-105<br />
              神保町三井ビルディング22F
            </td>
          </tr>
          <tr>
            <td class="border px-4 py-2">座席数</td>
            <td class="border px-4 py-2">50席</td>
          </tr>
          <tr>
            <td class="border px-4 py-2">アクセス</td>
            <td class="border px-4 py-2">◯◯駅5番出口から徒歩1分</td>
          </tr>
        </tbody>
      </table>
      <div class="mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2991058333905!2d139.7580929152592!3d35.69425648019131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1049646ffb%3A0x7abe3f67bddf1a86!2z44CSMTAxLTAwNTEg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy656We55Sw56We5L-d55S677yR5LiB55uu77yR77yQ77yV!5e0!3m2!1sja!2sjp!4v1593965393195!5m2!1sja!2sjp"
          frameborder="0"
          class="w-full h-64"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <div class="mx-auto mb-10 text-center">
        <nuxt-link
          to="/"
          class="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-white hover:bg-gray-200 md:text-lg xl:text-base text-gray-800 font-semibold leading-tight shadow-md"
          >トップへ戻る</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '店舗情報',
    }
  },
}
</script>
