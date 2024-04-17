<template>
    <div>
        <OverlayComponent :title="overlay[0].title" :text="overlay[0].text" :image="overlay[0].image" />
        <section class="buttons-line centered">
            <div class="buttons-line__container centered">
                <button class="buttons-line__button" :class="{ 'buttons-line__button_active': activeButton === item.id }" @click="changeActiveButton(item.id)" v-for="item in uniqueButtons" :key="item.id">{{ item.name_button }}</button>
            </div>
        </section>
        <section class="projects centered" id="projects centered">
            <ul class="projects__container">
                  <li class="projects__card" v-for="(post, index) in displayedPosts" :key="index">
                  <router-link  class="projects__link" :to="'/project/' + post.id">
                    <article aria-label="project">
                      <div class="projects__image">
                        <img class="projects__img" :src="post.image" :alt="post.title" />
                        <img class="projects__favorite" src="../assets/images/icon-star.svg" alt="favorite star">
                      </div>
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
                  </router-link>
                </li>
            </ul>
            <div class="pagination">
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
  name: 'ProjectPage',
  components: {
    OverlayComponent
  },
  data () {
    return {
      overlay: [
        {
          title: 'Our Project',
          text: 'Home / Project',
          image: require('@/assets/images/project-page-bg.png')
        }
      ],
      posts: [
        {
          id: 'project123',
          button: 'Kitchen',
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '26 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '2',
          button: 'Living Area',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          category: 'Living Design',
          date: '22 December, 2022',
          image: require('@/assets/images/project2.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '3',
          button: 'BedRoom',
          title: 'Best For Any Office & Business Interior Solution',
          category: 'Interior Design',
          date: '25 December, 2022',
          image: require('@/assets/images/project3.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '4',
          button: 'Bathroom',
          title: 'Best For Any Office & Business Interior Solution',
          category: 'Interior Design',
          date: '25 December, 2022',
          image: require('@/assets/images/project3.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '5',
          button: 'Kitchen',
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '26 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '6',
          button: 'Living Area',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          category: 'Living Design',
          date: '22 December, 2022',
          image: require('@/assets/images/project2.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '7',
          button: 'BedRoom',
          title: 'Best For Any Office & Business Interior Solution',
          category: 'Interior Design',
          date: '25 December, 2022',
          image: require('@/assets/images/project3.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '8',
          button: 'Bathroom',
          title: 'Best For Any Office & Business Interior Solution',
          category: 'Interior Design',
          date: '25 December, 2022',
          image: require('@/assets/images/project3.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '9',
          button: 'Kitchen',
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '26 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '10',
          button: 'Kitchen',
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '26 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '11',
          button: 'Kitchen',
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '26 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '12',
          button: 'Kitchen',
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '26 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '13',
          button: 'Kitchen',
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '26 December, 2022',
          image: require('@/assets/images/project1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        },
        {
          id: '14',
          button: 'Kitchen',
          title: 'Let’s Get Solution For Building Construction Work',
          category: 'Kitchen Design',
          date: '26 December, 2022',
          image: require('@/assets/images/project-img-1.png'),
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat illum molestias blanditiis nesciunt iste eveniet explicabo et autem tempore magnam velit quidem ullam, voluptate dolores sed doloribus incidunt, expedita placeat ipsam perspiciatis consequuntur reprehenderit aut!'
        }
      ],
      perPage: 4,
      currentPage: 1,
      activeButton: 'Kitchen'
    }
  },
  computed: {
    totalPages () {
      return Math.max(Math.ceil(this.filteredPosts.length / this.perPage), 1)
    },
    filteredPosts () {
      return this.posts.filter(post => post.button === this.activeButton)
    },
    displayedPosts () {
      const startIndex = (this.currentPage - 1) * this.perPage
      const endIndex = startIndex + this.perPage
      const filteredPosts = this.posts.filter(post => post.button === this.activeButton)
      return filteredPosts.slice(startIndex, endIndex)
    },
    uniqueButtons () {
      // уникальные значения кнопок из массива постов
      return [...new Set(this.posts.map(post => post.button))].map(button => ({
        id: button,
        name_button: button
      }))
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
    },
    changeActiveButton (button) {
      console.log('Changing active button to:', button)
      this.activeButton = button
      this.currentPage = 1
    }
  }
}
</script>

<style scoped>

</style>
