<template>
  <Carousel
    class="carousel"
    :autoplay="true"
    :autoplayTimeout='5000'
    :paginationEnabled="false"
    :scrollPerPage="true"
    :perPage="1"
    :loop="true">
      <Slide v-for='item in carouselItems' :key='item.alt'>
        <a href="#" class="carousel__link">
          <img :src="item.url" :alt="item.alt" />
          <div class="carousel__text">
            <VueResponsiveText>
              <h4>{{item.headerText}}</h4>
            </VueResponsiveText>
            <p>{{item.text}}</p>
          </div>
        </a>
      </Slide>
  </Carousel>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'
import VueResponsiveText from 'vue-responsive-text'

export default {
  name: 'swiper',
  components: {
    Carousel,
    Slide,
    VueResponsiveText
  },
  data(){
    return{
      carouselItems:[
      {
        url:require('@/assets/carousel/slide1.png'),
        alt:'altone',
        headerText:'Promo Text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url:require('@/assets/carousel/slide2.png'),
        alt:'altsome',
        headerText:'Something New!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .carousel{
    // height: calc(100% - 80px);
    line-height: 0;
    &__link{
      display: block;
      position: relative;
      & img{
        width: 100%;
        max-height: 800px;
      }
    }
    &__text{
      line-height: 50px;
      position: absolute;
      top: 0;
      bottom: 0;
      transform: translate(20%, 40%);
      color:#fff;
      font-family: $PoppinsFont;
      text-align: left;
      & h4{
        color: $green;
        font-size: 4em;
        margin-bottom: 10px;
        letter-spacing: 5px;
      }
      & p{
        width: 60%;
        font-size: 1.5em;
        line-height: 25px;
        color: $blackish;
      }
    }
  }
  @media screen and (max-width: 1366px){
    .carousel{
      &__text{
        font-size: 70%;
      }
    }
  }
  @media screen and (max-width: 400px){
    .carousel{
      &__text{
        font-size: 50%;
        transform: translate(5%, 10%);
        & p{
          width: 80%;
        }
      }
    }
  }
</style>
