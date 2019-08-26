<template>
  <header class="header__wrap">
    <div class="header"  v-bind:class="{'header--fixed': !showNav}">
      <div class="header__logo"><span class="header__logo--colored">IPSUM</span>SHOP</div>
      <ul class="header__leftmenu">
        <li><router-link to="/" active-class="link-active">Home</router-link></li>
        <li><router-link to="/">Men</router-link></li>
        <li><router-link to="/">Women</router-link></li>
        <li><router-link to="/">Children</router-link></li>
        <li><router-link to="/">Accessories</router-link></li>
        <li><router-link to="/">Other</router-link></li>
      </ul>
        <div class="header__rightmenu">
          <router-link class="" to="/cart">
            <font-awesome-i icon="shopping-cart" class="header__cart"/>
            <div
            v-show='cartList.length !== 0'
            class="header__counter"
            >
              <p v-if='cartList.length < 9'>{{cartList.length}}</p>
              <p v-else>9+</p>
            </div>
          </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import {eventBus} from '@/main'
import { library } from '@fortawesome/fontawesome-svg-core';
import {faShoppingCart, faHeart} from '@fortawesome/free-solid-svg-icons';
import { mapGetters } from 'vuex';

library.add(faShoppingCart);

export default {
  name: 'navbar',
  data(){
    return{
      showNav: true,
      neededScroll: 0
    }
  },
  mounted(){
    window.addEventListener('scroll', this.onScroll);
    eventBus.$on('ScrlTop', (offset)=>{
      this.neededScroll = offset;  // Recieve data for header manipulation form Home.vue
    })
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.onScroll)
  },
  methods:{
    onScroll(){      // Toggle header animation
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      this.showNav = currentScroll < this.neededScroll;
      currentScroll < this.neededScroll ? this.showNav = true : this.showNav = false;
    }
  },
  computed:
    mapGetters(['cartList'])
}
</script>

<style scoped lang="scss">
  .header{
    padding: 1.5em;
    display: flex;
    justify-content: space-around;
    transition: padding, ease-in, .5s;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    &__wrap{
      background: #fff;
      position: fixed;
      top:0;
      width: 100%;
      z-index: 10;
      box-shadow: 0px 5px 15px #a6a6a6;
    }
    &__logo{
      font-size: 2em;
      text-transform: uppercase;
      &--colored{
        color: $green;
        font-weight: 800;
      }
    }
    &--fixed{
      //header animation
    }
    &__leftmenu{
      list-style: none;
      display: flex;
      text-transform: uppercase;
      width: 40%;
      font-weight: 500;
      justify-content: space-around;
      & a{
       text-decoration: none;
       color: $blackish;
     }
      & .link-active{
        color: $green;
      }
      & :hover{
        color: $green;
      }
    }
    &__cart{
      color: $blackish;
      font-size: 1.3em;
    }
    &__rightmenu{
      position: relative;
    }
    &__counter{
      position: absolute;
      top: -10px;
      right: -15px;
      background-color: $green;
      padding: 8px;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      font-size: 0.9em;
      color: #fff;
      line-height: 10px;
    }
  }

  @media screen and (max-width: 1280px){
    .header{
      &__leftmenu{
        width: 50%;
      }
    }
  }

  @media screen and (max-width: 992px){
    .header{
      &__leftmenu{
        width: 60%;
      }
    }
  }

  @media screen and (max-width: 768px){
    .header{
      &__leftmenu{
        width: 60%;
      }
    }
  }
</style>
