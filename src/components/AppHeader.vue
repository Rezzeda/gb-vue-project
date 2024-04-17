<template>
    <header class="header centered">
    <router-link to="./home" class="header__container-left">
    <img class="logo header__logo" src="../assets/images/Logo.svg" alt="logo">
    </router-link>
    <nav class="header__menu">
        <ul class="header__menu-list">
        <li class="header__menu-list-item">
            <router-link class="header__menu-list-item-link" to="/home">Home</router-link>
        </li>
        <li class="header__menu-list-item">
                    <router-link class="header__menu-list-item-link" to="/project">Project</router-link>
                </li>
                <li class="header__menu-list-item">
                    <router-link class="header__menu-list-item-link" to="/blog">Blog</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
