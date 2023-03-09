<template>
  <div
    class="relative pt-16 pb-32 flex content-center items-center justify-center z-10"
    :style="`min-height: ${height}vh;`"
  >
    <div :class="`absolute top-0 w-full h-full bg-center bg-cover ${visual}`">
      <span id="blackOverlay" class="w-full h-full absolute opacity-75"></span>
    </div>
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div>
            <h1 class="text-white font-semibold text-5xl text-shadow">
              {{ title }}
            </h1>
            <p v-if="message" class="mt-4 text-lg text-white text-shadow-md">
              {{ message }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style="height: 70px; transform: translateZ(0px)"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-white fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutVisual',
  props: {
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    visual: {
      type: String,
      default: 'visual-home',
    },
    height: {
      type: Number,
      default: 75,
    },
  },
}
</script>

<style scoped>
.visual-home {
  background-image: url('~@/assets/img/visual-home.jpg');
}
.visual-concept {
  background-image: url('~@/assets/img/visual-concept.jpg');
}
.visual-shop {
  background-image: url('~@/assets/img/visual-shop.jpg');
}
.visual-menu {
  background-image: url('~@/assets/img/visual-menu.jpg');
}
.visual-information {
  background-image: url('~@/assets/img/visual-information.jpg');
}
.visual-error {
  background-image: url('~@/assets/img/visual-error.jpg');
}
</style>
