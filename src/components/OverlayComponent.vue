<template>
    <section class="overlay">
        <figure class="overlay__bg">
            <img :src="image" :alt="title">
            <!-- <img src="../assets/images/articles-bg.png" alt="room white design"> -->
            <figcaption class="overlay__container" v-if="title.trim() !== '' || text.trim() !== ''">
                <h1 class="overlay__title">{{ title }}</h1>
                <p class="overlay__subtitle">{{ text }}</p>
            </figcaption>
        </figure>
    </section>
</template>

<script>
export default {
  name: 'OverlayComponent',
  props: {
    title: String,
    text: String,
    image: String
  }
}
</script>
