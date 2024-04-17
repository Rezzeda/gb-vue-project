<template>
    <div>
        <OverlayComponent :title="overlay[0].title" :text="overlay[0].text" :image="overlay[0].image" />
        <section id="post" class="post">
          <router-link class="post__link" to="./blog-details">
            <article class="post__container" aria-label="latest post">
                <figure class="post__img-container">
                    <img class="post__card-img" :src="latestPost.image" :alt="latestPost.title">
                </figure>
                <div class="post__cont">
                    <h3 class="post__card-title">{{ latestPost.title }}</h3>
                    <p class="post__card-text">{{ latestPost.text }}</p>
                    <div class="post__card-container">
                        <p class="post__card-date">{{ latestPost.date }}</p>
                          <button class="post__card-button" type="button">
                              <img src="../assets/images/project-arrow.svg" alt="next-arrow">
                          </button>
                    </div>
                </div>
            </article>
          </router-link>
        </section>
        <section id="blog" class="blog centered">
            <h2 class="blog__title">Articles & News</h2>
            <ul id="blog__cards" class="blog__cards">
                <li class="blog__card" v-for="(post, index) in displayedPosts" :key="index">
                    <article aria-label="post">
                        <figure class="blog__img-container">
                            <img class="blog__card-img" :src="post.image" :alt="post.title">
                            <figcaption class="blog__card-type">{{ post.category }}</figcaption>
                        </figure>
                        <div class="blog__cont">
                            <h3 class="blog__card-title">{{ post.title }}</h3>
                            <div class="blog__card-container">
                                <p class="blog__card-date">{{ post.date }}</p>
                                  <button class="blog__card-button" type="button">
                                    <img src="../assets/images/project-arrow.svg" alt="next-arrow">
                                  </button>
                            </div>
                        </div>
                    </article>
                </li>
            </ul>
            <div class="pagination">
                <!-- <button @click="prevPage" :disabled="currentPage === 1">Prev</button> -->
                <button class="pagination__button" v-for="pageNumber in totalPages" :key="pageNumber" @click="goToPage(pageNumber)" :class="{page_active: pageNumber === currentPage}">{{ formattedPageNumber(pageNumber) }}</button>
                <button class="pagination__button" @click="nextPage" :disabled="currentPage === totalPages">
                    <img src="../assets/images/project-arrow.svg" alt="next-arrow">
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import OverlayComponent from '../components/OverlayComponent.vue'

export default {
  name: 'BlogPage',
  components: {
    OverlayComponent
  },
  data () {
    return {
      overlay: [
        {
          title: 'Articles & News',
          text: 'Home / Blog',
          image: require('@/assets/images/articles-bg.png')
        }
      ],
      posts: [
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '26 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          category: 'Living Design',
          date: '22 December, 2022',
          image: require('@/assets/images/project2.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'

        },
        {
          title: 'Best For Any Office & Business Interior Solution',
          category: 'Interior Design',
          date: '25 December, 2022',
          image: require('@/assets/images/project3.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '15 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          category: 'Living Design',
          date: '14 December, 2022',
          image: require('@/assets/images/project2.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Best For Any Office & Business Interior Solution',
          category: 'Interior Design',
          date: '13 December, 2022',
          image: require('@/assets/images/project3.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '12 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '11 December, 2022',
          image: require('@/assets/images/project2.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '10 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '26 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          category: 'Living Design',
          date: '09 December, 2022',
          image: require('@/assets/images/project2.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Best For Any Office & Business Interior Solution',
          category: 'Interior Design',
          date: '08 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '07 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          category: 'Living Design',
          date: '06 December, 2022',
          image: require('@/assets/images/project2.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Best For Any Office & Business Interior Solution',
          category: 'Interior Design',
          date: '05 December, 2022',
          image: require('@/assets/images/project3.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '04 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '03 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '02 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '01 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        }
      ],
      perPage: 6,
      currentPage: 1
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.posts.length / this.perPage)
    },
    displayedPosts () {
      const startIndex = (this.currentPage - 1) * this.perPage
      const endIndex = startIndex + this.perPage
      return this.posts.slice(startIndex, endIndex)
    },
    // latestPost() {
    // return this.posts.length > 0 ? this.posts[this.posts.length - 1] : null;
    // },
    latestPost () {
      const sortedPosts = this.posts.slice().sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
      return sortedPosts.length > 0 ? sortedPosts[0] : null
    }
  },
  methods: {
    nextPage () {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    prevPage () {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    goToPage (pageNumber) {
      this.currentPage = pageNumber
    },
    formattedPageNumber (pageNumber) {
      if (pageNumber < 10) {
        return '0' + pageNumber
      } else {
        return pageNumber
      }
    }
  }
}
</script>

<style scoped>

</style>
