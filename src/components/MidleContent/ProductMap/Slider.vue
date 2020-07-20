<template>
  <div class>
    <VueSlickCarousel v-bind="settings">
      <div v-for="(image, i) in images" :key="i">
        <img :src="image.url" :alt="image.alt" />
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 500,
        infinite: true,
        autoplaySpeed: 2000
      },
      images: [
        {
          url: "https://picsum.photos/1024/480/?image=11",
          alt: "I love you nature"
        },
        {
          url: "https://picsum.photos/1024/480/?image=12",
          alt: "Now with dog - Rosé"
        },
        {
          url: "https://picsum.photos/1024/480/?image=13",
          alt: "Jeg er i Danmark"
        },
        {
          url: "https://picsum.photos/1024/480/?image=14",
          alt: "Badabimbadabum"
        },
        {
          url: "https://picsum.photos/1024/480/?image=15",
          alt: "Goodmorning el mundo"
        },
        {
          url: "https://picsum.photos/1024/480/?image=16",
          alt: "My white and rosé with paella"
        },
        { url: "https://picsum.photos/1024/480/?image=17", alt: "Hopla" },
        {
          url: "https://picsum.photos/1024/480/?image=18",
          alt: "Watering by night"
        },
        {
          url: "https://picsum.photos/1024/480/?image=19",
          alt: "Life aint so bad at all..."
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>