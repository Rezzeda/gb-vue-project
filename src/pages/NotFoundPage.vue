<template>
    <section class="not-found__container centered">
        <span class="not-found__err">404</span>
        <h1 class="not-found__text">Page Not found</h1>
        <router-link to="/home">
            <button class="intro__button" type="button">
                    <span class="intro__button-text">HomePage</span>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                    </svg>
            </button>
        </router-link>
    </section>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style scoped>

</style>
