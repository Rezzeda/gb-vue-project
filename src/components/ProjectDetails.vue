<template>
    <div>
        <div class="project-details__container centered">
            <h1 class="project-details__title">{{ projectInfo.title }}</h1>
            <p class="project-details__text" v-for="(paragraph, index) in projectInfo.paragraphs" :key="index">{{ paragraph }}</p>
        </div>
        <CarouselComponent :images="projectInfo.images" />
    </div>
</template>

<script>
import CarouselComponent from './CarouselComponent.vue'
import { mapState } from 'vuex'

export default {
  name: 'ProjectDetails',
  components: {
    CarouselComponent
  },
  computed: {
    ...mapState(['projectInfo'])
  }
}
</script>
