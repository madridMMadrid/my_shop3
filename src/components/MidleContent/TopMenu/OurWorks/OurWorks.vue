<template>
  <div class="l-container gallery">
    <h1 class="commonpage">Наши работы</h1>
    <div class="gallery" v-for="(value, i) in 2" :key="i">
      <div class="gallery__item" v-for="(value, i) in 3" :key="i">
        <router-link class="link" to="/">
          <div class="gallery__img">
            <img
              src="https://prime-wood.ru/image/cache/catalog/company_logo/lavna-1280x905.jpg.webp"
              alt="ООО &quot;МОРСКОЙ ТОРГОВЫЙ ПОРТ ЛАВНА&quot;"
            />
          </div>
          <div class="gallery__name">ООО "МОРСКОЙ ТОРГОВЫЙ ПОРТ ЛАВНА"</div>
        </router-link>
      </div>
    </div>
    <div class="pagination_next">
      <div class="pagination_next-more">
        <button class="pagination-button">
          <span class="pagination-button-text">Показать ещё</span>
        </button>
      </div>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPageOld"
      aria-controls="my-table"
      first-number
      last-number
    ></b-pagination>
    <p style="color: #000; font-size: 12px;">моя пагинация</p> 
	<!-- подготовка к пагинации с сервака -->
    <div class="offset">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, i) in displayedPosts" :key="i">
            <td>{{p.first}}</td>
            <td>{{p.last}}</td>
            <td>{{p.suffix}}</td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <button type="button" class="page-link" v-if="page != 1" @click="page--">Previous</button>
          </li>
          <li class="page-item">
            <button
              type="button"
              class="page-link"
              v-for="(pageNumber, i) in pages.slice(page-1, page+5)"
              @click="page = pageNumber"
              :key="i"
            >{{pageNumber}}</button>
          </li>
          <li class="page-item">
            <button type="button" @click="page++" v-if="page < pages.length" class="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      perPageOld: 3,
      currentPage: 1,
      myRate: 0,
      rating: 3,
      ourWorks: [
        {
          test: 1,
        },
        {
          test: 1,
        },
        {
          test: 1,
        },
        {
          test: 1,
        },
        {
          test: 1,
        },
      ],
      posts: [""],
      page: 1,
      perPage: 9,
      pages: [],
    };
  },
  methods: {
    getPosts() {
      let data = [];
      for (let i = 0; i < 200; i++) {
        this.posts.push({ first: "John", last: "Doe", suffix: "#" + i });
      }
    },
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
  },
  computed: {
    rows() {
      return this.ourWorks.length;
    },
    displayedPosts() {
      return this.paginate(this.posts);
    },
  },
  watch: {
    posts() {
      this.setPages();
    },
  },
  created() {
    this.getPosts();
  },
  filters: {
    trimWords(value) {
      return value.split(" ").splice(0, 20).join(" ") + "...";
    },
  },
};
</script>
<style lang="scss">
.table-bordered {
	font-size: 12px;
}
button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}
.gallery {
  margin: 0 0 10px -5px;
  font-size: 0;
  & .pagination {
    &_next {
      width: 100%;
      margin-top: 20px;
      text-align: center;
      &-more {
        text-decoration: none;
      }
    }
    &-button {
      display: inline-flex;
      align-items: center;
      padding: 7px 30px;
      font-size: 18px;
      color: #fff;
      border: 0 solid;
      border-radius: 3px;
      background-color: #71c73b;
      outline: 0;
      cursor: pointer;
      &:hover {
        background-color: #74d836;
      }
      &-text {
        margin: 0;
        font-size: 16px;
      }
    }
  }
  & .pagination {
    max-width: 100%;
    justify-content: center;
    margin: 35px auto;
    font-size: 16px;
    & .page-item {
      &.disabled {
        display: none;
      }
      & .page-link {
        border: none;
        font-weight: 600;
        text-decoration: none;
        color: #b5b5b5;
        transition: all 0.2s ease;
        &:hover {
          transition: all 0.2s ease;
          background: none;
          color: #3c3c3c;
        }
        &:focus {
          box-shadow: none;
        }
      }
      &.active {
        & .page-link {
          background: #ff9e24;
          color: #fff;
        }
      }
    }
  }
}

.gallery__item {
  display: inline-block;
  font-size: 13px;
  margin: 0 0 5px 5px;
  position: relative;
  vertical-align: top;
  transition: all 0.2s ease;
  width: 295px;
}

.gallery__item_hidden {
  display: none;
}

.gallery__item:hover {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
}

.gallery__img {
  border: 1px solid #e2e0d3;
  border-bottom: none;
  height: 170px;
  line-height: 168px;
  overflow: hidden;
  text-align: center;

  img {
    max-height: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
}

.gallery__name {
  background-color: #47c08c;
  color: #fff;
  display: table-cell;
  font-size: 20px;
  font-weight: 700;
  height: 100px;
  line-height: 20px;
  padding: 0 5px;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 100%;
}

.gallery__item a {
  text-decoration: none;

  &:hover .gallery__name {
    background-color: #41e09c;
  }
}

.gallery__more {
  margin: 20px 0 30px;
  text-align: center;

  .orange_btn {
    display: inline-block;
    width: 200px;
  }
}

.gallery-info {
  overflow: hidden;
  margin-bottom: 20px;
}

.gallery-info__grateful {
  float: right;
  margin: 0 0 20px 10px;
  padding: 5px;
  border: 3px double #d6d3d0;
  border-radius: 3px;
  position: relative;

  &:before {
    // background: url(/catalog/view/javascript/skin/images/zoom.png) no-repeat 50% 50% rgba(0, 0, 0, 0.2);
    content: "";
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.2s ease;
  }

  &:hover:before {
    opacity: 1;
  }
}
</style>