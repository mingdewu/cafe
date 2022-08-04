<template>
  <layout-wrapper>
    <layout-visual
      title="Information"
      :height="40"
      visual="visual-information"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
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
      <base-button name="トップへ戻る" link="/" />
    </div>
  </layout-wrapper>
</template>

<script>
export default {
  head() {
    return {
      title: 'お知らせ',
    }
  },
}
</script>
