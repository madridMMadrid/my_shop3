<template>
  <div class="l-container about">
    <h1 class="commonpage">О компании</h1>
    <div class="content">
      <p>Компания Prime Wood поставляет на российский рынок качественную и экологичную офисную мебель отечественного и импортного производства. Широкий ассортимент продукции, гарантированно высокое качество и адекватные цены – далеко не все преимущества нашей компании. Мы готовы создать неповторимую атмосферу в вашем офисе, начиная с помощи в выборе готовой мебели или разработки индивидуального дизайн-проекта по созданию новой мебели, заканчивая сборкой и установкой её на вашем рабочем месте.</p>
      <p style="text-align: center">
        <span>
          <strong>Нам доверяют:</strong>
        </span>
      </p>
    </div>
    <VueSlickCarousel v-bind="settings">
      <div class="img_slide_wrapper" v-for="(image, i) in images" :key="i">
        <img :src="image.url" :alt="image.alt" />
        <!-- <ZoomImage imageWidth="100" imageMargin="5" :alt="image.alt" :src="image.url" /> -->
        <!-- <ProductZoomer :base-images="img" :base-zoomer-options="zoomerOptions" /> -->
      </div>
    </VueSlickCarousel>
    <div class="grid" v-for="(value, i) in 4" :key="i">
      <div>
        <img src="~@/assets/images/company_logo/agc_logo.jpg" v-for="(value, i) in 4" alt :key="i" />
      </div>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import ZoomImage from "./ZoomImage";

export default {
  components: {
    VueSlickCarousel,
    ZoomImage,
  },
  data() {
    return {
      img: {
        normal_size: [
          {
            id: 1,
            url: "https://picsum.photos/1024/480/?image=11",
          },
          {
            id: 2,
            url: "https://picsum.photos/1024/480/?image=12",
          },
          {
            id: 3,
            url: "https://picsum.photos/1024/480/?image=13",
          },
          {
            id: 4,
            url: "https://picsum.photos/1024/480/?image=14",
          },
        ],
        large_size: [
          {
            id: 1,
            url: "https://picsum.photos/1024/480/?image=11",
          },
          {
            id: 2,
            url: "https://picsum.photos/1024/480/?image=12",
          },
          {
            id: 3,
            url: "https://picsum.photos/1024/480/?image=13",
          },
          {
            id: 4,
            url: "https://picsum.photos/1024/480/?image=14",
          },
        ],
      },
      zoomerOptions: {
        pane: "container-round",
        hoverDelay: 300,
        namespace: "inline-container",
        move_by_click: true,
        scroll_items: 4,
      },
      settings: {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        infinite: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      images: [
        {
          url: require("@/assets/images/sert/01.png"),
          alt: "I love you nature",
        },
        {
          url: require("@/assets/images/sert/02.jpg"),
          alt: "Now with dog - Rosé",
        },
        {
          url: require("@/assets/images/sert/03.jpg"),
          alt: "Jeg er i Danmark",
        },
        {
          url: require("@/assets/images/sert/04.jpg"),
          alt: "Badabimbadabum",
        },
        {
          url: require("@/assets/images/sert/05.jpg"),
          alt: "Goodmorning el mundo",
        },
        {
          url: require("@/assets/images/sert/06.jpg"),
          alt: "My white and rosé with paella",
        },
        {
          url: require("@/assets/images/sert/07.jpg"),
          alt: "Hopla sdsds dsds",
        },
        {
          url: require("@/assets/images/sert/08.jpg"),
          alt: "Watering by night",
        },
        {
          url: require("@/assets/images/sert/09.jpg"),
          alt: "Life aint so bad at all...",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.about {
  & .commonpage {
    margin: 0.8em 0.2em;
    font-size: 30px;
    font-weight: 400;
    color: #595959;
  }
  & .content {
    & p {
      line-height: 24px;
      margin: 0.8em 0.2em;
      font-size: 14px;
    }
  }
  & .img_slide_wrapper {
    overflow: hidden;
    // margin: 0 5px;
    padding: 3px;
    & img {
      width: 100%;
      max-height: 285px;
      pointer-events: none;
      padding: 5px;
      border: 3px double #d6d3d0;
      border-radius: 3px;
      //   margin: 0 5px;
    }
  }
  & .slick-prev,
  .slick-next {
    color: #ff9e23;
    &:before {
      color: #ff9e23;
    }
    &:after {
      color: #ff9e23;
    }
  }
  .slick-next {
    right: -18px;
  }
  .slick-prev {
    left: -18px;
  }
  & .grid {
    & > div {
      display: flex;
	  border-top: 1px solid #cecdcd;
	justify-content: space-between;
    }
  }
}
</style>