<template>
  <layout-wrapper>
    <layout-visual
      title="Information"
      :height="40"
      visual="visual-information"
    />

    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <h2 class="text-xl pb-5 border-b border-gray-500 border-solid font-bold">
        お知らせタイトル
      </h2>
      <div class="pt-4 mb-4">
        <time class="text-gray-700 text-base">2020.08.15</time>
      </div>
      <div class="mb-20">
        <h3>見出しが入ります見出しが入ります見出しが入ります。</h3>
        <p>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
        </p>
        <ul>
          <li>リストリストリスト</li>
          <li>リストリストリスト</li>
          <li>リストリストリスト</li>
        </ul>
      </div>
      <base-button name="お知らせへ戻る" link="/information/" />
    </div>
  </layout-wrapper>
</template>

<script>
export default {
  head() {
    return {
      title: 'お知らせ詳細タイトル',
    }
  },
}
</script>
