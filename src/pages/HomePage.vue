<template>
    <div>
        <IntroBox />
        <DescriptionComponent :title="description[0].title" :text="description[0].text"/>
        <GalleryComponent />
        <NumbersComponent />
        <DescriptionComponent :title="description[1].title" :text="description[1].text"/>
        <BlogComponent />
    </div>
</template>

<script>
import IntroBox from '../components/IntroBox.vue'
import DescriptionComponent from '../components/DescriptionComponent.vue'
import BlogComponent from '../components/BlogComponent.vue'
import GalleryComponent from '../components/GalleryComponent.vue'
import NumbersComponent from '../components/NumbersComponent.vue'

export default {
  name: 'HomePage',
  components: {
    IntroBox,
    DescriptionComponent,
    BlogComponent,
    GalleryComponent,
    NumbersComponent
  },
  data () {
    return {
      description: [
        {
          title: 'Follow Our Projects',
          text: 'It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.'
        },
        {
          title: 'Articles & News',
          text: 'It is a long established fact that a reader will be distracted lookings.'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
