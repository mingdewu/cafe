Vue.createApp({
  data: function () {
    return {
      thumbnails: [
        {
          id: 1,
          src: "https://placehold.jp/300x300.png"
        },
        {
          id: 2,
          src: "https://placehold.jp/3d4070/ffffff/300x300.png"
        },
        {
          id: 3,
          src: "https://placehold.jp/b32020/ffffff/300x300.png"
        }
      ],
      selectedThumbnailId: undefined,
      imageTransitionName: "prev",
      isVisible: false,
      thumbnailHeight: 0,
      isThumbnailLoaded: false
    }
  },
  watch: {
    selectedThumbnailId: function () {
      this.isThumbnailLoaded = false
    }
  },
  computed: {
    currentThumbnail: function () {
      const self = this
      return _.find(self.thumbnails, function (thumb) {
        return thumb.id === self.selectedThumbnailId
      })
    },
    currentThumbnailIndex: function () {
      const self = this
      return _.findIndex(self.thumbnails, function (thumb) {
        return thumb.id === self.selectedThumbnailId
      })
    },
    nextThumbnail: function () {
      const nextIndex = this.currentThumbnailIndex + 1
      return this.thumbnails[
        nextIndex > this.thumbnails.length - 1 ? 0 : nextIndex
      ]
    },
    prevThumbnail: function () {
      const prevIndex = this.currentThumbnailIndex - 1
      return this.thumbnails[
        prevIndex < 0 ? this.thumbnails.length - 1 : prevIndex
      ]
    },
    containerStyle: function () {
      return {
        height: this.thumbnailHeight + "px"
      }
    }
  },
  methods: {
    openModal: function (thumb) {
      this.isVisible = true
      this.selectedThumbnailId = thumb.id
    },
    closeModal: function () {
      this.isVisible = false
      this.selectedThumbnailId = undefined
    },
    onClickPrev: function () {
      this.selectedThumbnailId = this.prevThumbnail.id
    },
    onClickNext: function () {
      this.selectedThumbnailId = this.nextThumbnail.id
    },
    onLoad: function (event) {
      this.thumbnailHeight =
        event.target.naturalHeight > 300 ? 300 : event.target.naturalHeight
      this.isThumbnailLoaded = true
    }
  }
}).mount("#app")
