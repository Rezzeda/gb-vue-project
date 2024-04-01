<template>
    <footer class="footer centered">
        <div class="footer__container">
            <div class="footer__socials">
                <div class="footer__column footer__container-left">
                    <img class="logo footer__logo" src="../assets/images/Logo.svg" alt="logo">
                    <p class="footer__text">It is a long established fact that a reader will be distracted lookings.</p>
                </div>
                <ul class="footer__social-logos">
                    <li>
                        <a href="#" class="footer__link">
                        <img src="../assets/images/icon1.svg" alt="social icon">
                    </a>
                </li>
                    <li>
                        <a href="#" class="footer__link">
                            <img src="../assets/images/icon2.svg" alt="social icon">
                        </a>
                    </li>
                </ul>
            </div>
            <nav class="footer__column footer__navigation">
                <h4 class="footer__nav-title">Pages</h4>
                <ul class="footer__navigation-list">
                    <li><a href="#" class="footer__link">Home</a></li>
                    <li><a href="#" class="footer__link">Project</a></li>
                    <li><a href="#" class="footer__link">Blog</a></li>
                </ul>
            </nav>
            <div class="footer__column footer__address">
                <h4 class="footer__nav-title">Contact</h4>
                <ul class="footer__navigation-list">
                    <li><a href="#" class="footer__link">55 East Birchwood Ave. Brooklyn, New York 11201</a></li>
                    <li><a href="#" class="footer__link">contact@interno.com</a></li>
                    <li ><a href="#" class="footer__link">(123) 456 - 7890</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>
