<template>
  <layout-wrapper>
    <layout-visual title="PAGE NOT FOUND" :height="40" visual="visual-error" />
    <div class="container w-full mx-auto pt-20 pb-20 px-6 md:px-0">
      <div class="mb-20">
        <p class="text-center text-lg font-medium text-gray-900">
          お探しのページは存在しません。
        </p>
      </div>
      <base-button name="トップページに戻る" link="/" />
    </div>
  </layout-wrapper>
</template>

<script>
export default {
  head() {
    return {
      title: 'PAGE NOT FOUND',
    }
  },
}
</script>
