<template>
    <div>
        <OverlayComponent :title="overlay[0].title" :text="overlay[0].text" :image="overlay[0].image"/>
        <section class="full-post centered">
            <div class="full-post__container">
                <div class="full-post__content" v-if="!selectedArticle">
                    <h2 class="full-post__subtitle"> 404 Article doesn't exist</h2>
                </div>
                <article class="full-post__content" aria-label="full article" v-if="selectedArticle">
                    <h1 class="full-post__title">{{ selectedArticle.title }}</h1>
                    <figure class="full-post__img-container">
                        <img class="full-post__img full-post__img-1" :src="selectedArticle.img1" alt="article photo">
                    </figure>
                    <div class="full-post__info">
                        <p class="full-post__date">{{ selectedArticle.date }}</p>
                        <nav class="navigation" aria-label="breadcrumb">
                            <ul class="navigation__list">
                                <li class="navigation__item"><a class="navigation__link" href="#">Interior</a></li>
                                <li class="navigation__item"><a class="navigation__link" href="#">Home</a></li>
                                <li class="navigation__item" aria-current="page"><a class="navigation__link" href="#">Decore</a></li>
                            </ul>
                        </nav>
                    </div>
                    <p class="full-post__text full-post__text-1">{{ selectedArticle.text1 }}</p>
                    <blockquote class="full-post__quote-container">
                        <span class="full-post__quotes">&#8221;</span>
                        <p class="full-post__quote">{{ selectedArticle.quote }}</p>
                    </blockquote>
                    <h2 class="full-post__subtitle">{{ selectedArticle.subtitle }}</h2>
                    <p class="full-post__text full-post__text-2">{{ selectedArticle.text2 }}>
                        <ol class="full-post__text-points">
                            <li class="full-post__ordered-el" v-for="(point, index) in selectedArticle.points" :key="index">
                                <p class="full-post__text full-post__point">{{ point }}</p>
                            </li>
                        </ol>
                    </p>
                    <figure class="full-post__img-container">
                        <img class="full-post__img full-post__img-2" :src="selectedArticle.img2" alt="article-photo">
                    </figure>
                    <p class="full-post__text full-post__text-3">{{ selectedArticle.text3 }}</p>
                </article>
                <div class="tags__container">
                    <h2 class="tags__title">Tags</h2>
                    <ul class="tags">
                        <li class="tags__tag" v-for="(tag, index) in tags" :key="index">
                            <button class="tags__btn"
                            :class="{ 'tags__btn-active': selectedTag === tag || (selectedArticle && selectedArticle.tags.includes(tag)) }"
                            type="button"
                            @click="filterArticles(tag)">
                                {{ tag }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import OverlayComponent from './OverlayComponent.vue'

export default {
  name: 'BlogDetailsPage',
  components: {
    OverlayComponent
  },
  data () {
    return {
      overlay: [
        {
          title: '',
          text: '',
          image: require('@/assets/images/blog-details-bg.png')
        }
      ],
      tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning'],
      articles: [
        {
          title: 'Let’s Get Solution for Building Construction Work',
          date: '26 December,2022',
          img1: require('@/assets/images/article-photo-1.png'),
          img2: require('@/assets/images/article-photo-2.png'),
          text1: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don\'t look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
          quote: 'The details are not the details. They make the design.',
          subtitle: 'Design sprints are great',
          text2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          points: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
          ],
          text3: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          tags: ['Kitchen']
        },
        {
          title: 'test article',
          date: '22 December,2022',
          img1: require('@/assets/images/article-photo-2.png'),
          img2: require('@/assets/images/article-photo-1.png'),
          text1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit doloremque id cupiditate tenetur eveniet libero sed aspernatur facere recusandae soluta, amet illum unde labore ut harum consequuntur esse illo ullam corporis quis? Necessitatibus ullam sapiente ipsa eaque natus voluptatibus veritatis, fuga facere modi sint deleniti vel voluptate vero maxime nesciunt dolore non consectetur inventore perferendis numquam eum magnam voluptates minima. Nam vitae quos quo error numquam ratione mollitia sed corrupti cupiditate illum, magnam praesentium tempore repudiandae totam accusamus, ducimus enim quibusdam iure repellat nemo soluta doloremque aspernatur saepe omnis. Fugiat, enim sapiente voluptatem ipsum nisi quae aperiam voluptatibus veniam dolore non officiis quod totam exercitationem itaque, natus animi optio soluta error. Culpa nobis labore delectus reprehenderit reiciendis deleniti ex cum iure suscipit? Non quo doloribus earum totam culpa nobis ab ad aspernatur laboriosam repellendus eveniet iusto facilis, alias, voluptas excepturi exercitationem, unde nesciunt autem consectetur? Aut quia natus architecto a consequatur quasi error consectetur neque deserunt! Modi possimus voluptate molestias et est, dolor soluta consectetur doloribus optio corrupti, recusandae sed delectus magnam magni tempora aliquam facilis veniam sit ex illo quae vero ad consequuntur? Maxime vitae cum expedita voluptate impedit exercitationem dolore aliquid laudantium perspiciatis. Quia, dignissimos! Numquam, quasi veniam?',
          quote: 'The details are not the details. They make the design.',
          subtitle: 'test article subtitle',
          text2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          points: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
          ],
          text3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit doloremque id cupiditate tenetur eveniet libero sed aspernatur facere recusandae soluta, amet illum unde labore ut harum consequuntur esse illo ullam corporis quis? Necessitatibus ullam sapiente ipsa eaque natus voluptatibus veritatis, fuga facere modi sint deleniti vel voluptate vero maxime nesciunt dolore non consectetur inventore perferendis numquam eum magnam voluptates minima. Nam vitae quos quo error numquam ratione mollitia sed corrupti cupiditate illum, magnam praesentium tempore repudiandae totam accusamus, ducimus enim quibusdam iure repellat nemo soluta doloremque aspernatur saepe omnis. Fugiat, enim sapiente voluptatem ipsum nisi quae aperiam voluptatibus veniam dolore non officiis quod totam exercitationem itaque, natus animi optio soluta error. Culpa nobis labore delectus reprehenderit reiciendis deleniti ex cum iure suscipit? Non quo doloribus earum totam culpa nobis ab ad aspernatur laboriosam repellendus eveniet iusto facilis, alias, voluptas excepturi exercitationem, unde nesciunt autem consectetur? Aut quia natus architecto a consequatur quasi error consectetur neque deserunt! Modi possimus voluptate molestias et est, dolor soluta consectetur doloribus optio corrupti, recusandae sed delectus magnam magni tempora aliquam facilis veniam sit ex illo quae vero ad consequuntur? Maxime vitae cum expedita voluptate impedit exercitationem dolore aliquid laudantium perspiciatis. Quia, dignissimos! Numquam, quasi veniam?',
          tags: ['Architecture']
        },
        {
          title: 'test article2',
          date: '20 December,2022',
          img1: require('@/assets/images/article-photo-2.png'),
          img2: require('@/assets/images/article-photo-1.png'),
          text1: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit doloremque id cupiditate tenetur eveniet libero sed aspernatur facere recusandae soluta, amet illum unde labore ut harum consequuntur esse illo ullam corporis quis? Necessitatibus ullam sapiente ipsa eaque natus voluptatibus veritatis, fuga facere modi sint deleniti vel voluptate vero maxime nesciunt dolore non consectetur inventore perferendis numquam eum magnam voluptates minima. Nam vitae quos quo error numquam ratione mollitia sed corrupti cupiditate illum, magnam praesentium tempore repudiandae totam accusamus, ducimus enim quibusdam iure repellat nemo soluta doloremque aspernatur saepe omnis. Fugiat, enim sapiente voluptatem ipsum nisi quae aperiam voluptatibus veniam dolore non officiis quod totam exercitationem itaque, natus animi optio soluta error. Culpa nobis labore delectus reprehenderit reiciendis deleniti ex cum iure suscipit? Non quo doloribus earum totam culpa nobis ab ad aspernatur laboriosam repellendus eveniet iusto facilis, alias, voluptas excepturi exercitationem, unde nesciunt autem consectetur? Aut quia natus architecto a consequatur quasi error consectetur neque deserunt! Modi possimus voluptate molestias et est, dolor soluta consectetur doloribus optio corrupti, recusandae sed delectus magnam magni tempora aliquam facilis veniam sit ex illo quae vero ad consequuntur? Maxime vitae cum expedita voluptate impedit exercitationem dolore aliquid laudantium perspiciatis. Quia, dignissimos! Numquam, quasi veniam?',
          quote: 'The details are not the details. They make the design.',
          subtitle: 'test article subtitle2',
          text2: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          points: [
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
          ],
          text3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit doloremque id cupiditate tenetur eveniet libero sed aspernatur facere recusandae soluta, amet illum unde labore ut harum consequuntur esse illo ullam corporis quis? Necessitatibus ullam sapiente ipsa eaque natus voluptatibus veritatis, fuga facere modi sint deleniti vel voluptate vero maxime nesciunt dolore non consectetur inventore perferendis numquam eum magnam voluptates minima. Nam vitae quos quo error numquam ratione mollitia sed corrupti cupiditate illum, magnam praesentium tempore repudiandae totam accusamus, ducimus enim quibusdam iure repellat nemo soluta doloremque aspernatur saepe omnis. Fugiat, enim sapiente voluptatem ipsum nisi quae aperiam voluptatibus veniam dolore non officiis quod totam exercitationem itaque, natus animi optio soluta error. Culpa nobis labore delectus reprehenderit reiciendis deleniti ex cum iure suscipit? Non quo doloribus earum totam culpa nobis ab ad aspernatur laboriosam repellendus eveniet iusto facilis, alias, voluptas excepturi exercitationem, unde nesciunt autem consectetur? Aut quia natus architecto a consequatur quasi error consectetur neque deserunt! Modi possimus voluptate molestias et est, dolor soluta consectetur doloribus optio corrupti, recusandae sed delectus magnam magni tempora aliquam facilis veniam sit ex illo quae vero ad consequuntur? Maxime vitae cum expedita voluptate impedit exercitationem dolore aliquid laudantium perspiciatis. Quia, dignissimos! Numquam, quasi veniam?',
          tags: ['Kitchen Planning']
        }
        // Другие статьи
      ],
      filteredArticles: [], // Статьи, отфильтрованные по выбранному тегу
      selectedTag: null,
      selectedArticle: null
    }
  },
  methods: {
    filterArticles (tag) {
      this.selectedTag = tag
      this.filteredArticles = this.articles.filter(article => article.tags.includes(tag))
      if (this.filteredArticles.length > 0) {
        this.selectedArticle = this.filteredArticles[0]
      } else {
        this.selectedArticle = null
      }
    }
  },
  mounted () {
    // При загрузке страницы показываем первую статью из списка
    if (this.articles.length > 0) {
      this.selectedArticle = this.articles[0]
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
