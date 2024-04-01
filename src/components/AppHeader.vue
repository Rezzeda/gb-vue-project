<template>
    <header class="header centered">
    <div class="header__container-left">
    <img class="logo header__logo" src="../assets/images/Logo.svg" alt="logo">
    </div>
    <nav class="header__menu">
        <ul class="header__menu-list">
        <li class="header__menu-list-item">
            <a class="header__menu-list-item-link" href="#">Home</a>
        </li>
        <li class="header__menu-list-item">
                    <a class="header__menu-list-item-link" href="#">Project</a>
                </li>
                <li class="header__menu-list-item">
                    <a class="header__menu-list-item-link" href="#">Blog</a>
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
