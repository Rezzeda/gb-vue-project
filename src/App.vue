<template>
  <div id="app">
    <AppHeader />
    <!-- <HomePage /> -->
    <!-- <BlogPage /> -->
    <BlogDetailsPage />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
// import HomePage from './components/HomePage.vue'
// import BlogPage from './components/BlogPage.vue'
import BlogDetailsPage from './components/BlogDetailsPage.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    BlogDetailsPage
    // HomePage
    // BlogPage
  }
}
</script>

<style>

</style>
