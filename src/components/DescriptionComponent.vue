<template>
    <section class="description">
            <div class="description__container">
                <h2 class="description__title">{{ title }}</h2>
                <p class="description__text">{{ text }}</p>
            </div>
        </section>
</template>

<script>
export default {
  name: 'DescriptionComponent',
  props: {
    title: String,
    text: String
  }
}

</script>
