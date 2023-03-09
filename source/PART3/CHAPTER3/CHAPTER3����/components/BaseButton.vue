<template>
  <div :class="`mb-10 mx-auto ${classPosition}`">
    <a
      :href="link"
      :class="`font-semibold md:text-lg xl:text-base px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 leading-tight shadow-md ${classShape} ${classBackGroundColor} ${classBackGroundHoverColor} ${classTextColor}`"
    >
      {{ name }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    classPosition: {
      type: String,
      default: 'text-center',
    },
    classShape: {
      type: String,
      default: 'rounded-lg',
    },
    classBackGroundColor: {
      type: String,
      default: 'bg-white',
    },
    classBackGroundHoverColor: {
      type: String,
      default: 'hover:bg-gray-200',
    },
    classTextColor: {
      type: String,
      default: 'text-gray-800',
    },
  },
}
</script>
