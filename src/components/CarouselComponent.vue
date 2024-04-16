<template>
  <div class="container">
    <div class="slider">
        <div class="carousel">
          <div v-for="(image, index) in images" :key="index">
            <img class="img" :src="image" v-show="currentIndex === index">
          </div>
        </div>
        <div class="indicators">
          <span class="indicator" v-for="(image, index) in images" :key="index" @click="changeSlide(index)" :class="{ 'active': currentIndex === index }"></span>
        </div>
    </div>
    <nav class="slider-nav">
        <ul>
            <li class="arrow">
                <button class="previous" @click="prevSlide">
                    <span class="ion-arrow-left-c">&#8592;</span>
                </button>
            </li>
            <li class="arrow">
                <button class="next" @click="nextSlide">
                    <span class="ion-arrow-right-c">&#8594;</span>
                </button>
            </li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  props: {
    images: Array
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    nextSlide () {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    prevSlide () {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    changeSlide (index) {
      this.currentIndex = index
    }
  }
}
</script>
