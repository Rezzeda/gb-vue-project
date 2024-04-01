<template>
  <div id="app">
    <AppHeader />
    <!-- <HomePage /> -->
    <!-- <BlogPage /> -->
    <ProductDetails />
    <BlogDetailsPage />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
// import HomePage from './components/HomePage.vue'
// import BlogPage from './components/BlogPage.vue'
import ProductDetails from './components/ProductDetails.vue'
import BlogDetailsPage from './components/BlogDetailsPage.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    BlogDetailsPage,
    ProductDetails
    // HomePage
    // BlogPage
  }
}
</script>

<style>

</style>
