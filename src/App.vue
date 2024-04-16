<template>
  <div id="app">
    <AppHeader />
    <!-- <HomePage /> -->
    <!-- <BlogPage /> -->
    <!-- <ProductDetails /> -->
    <!-- <BlogDetailsPage /> -->
    <!-- <ProjectPage /> -->
    <ProjectDetails />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
// import HomePage from './components/HomePage.vue'
// import BlogPage from './components/BlogPage.vue'
// import ProductDetails from './components/ProductDetails.vue'//тут задание 2 к уроку 10
// import BlogDetailsPage from './components/BlogDetailsPage.vue'
// import ProjectPage from './components/ProjectPage.vue'
import ProjectDetails from './components/ProjectDetails.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    // BlogDetailsPage
    // ProjectPage
    // ProductDetails
    // HomePage
    // BlogPage
    ProjectDetails
  }
}
</script>

<style>

</style>
