<template>
  <header class="header__wrap">
    <div class="header"  v-bind:class="{'header--fixed': !showNav}">
      <router-link to='/' class="header__logo"><span class="header__logo--colored">IPSUM</span>SHOP</router-link>
      <ul class="header__leftmenu">
        <li><router-link to="/" active-class="link-active">Home</router-link></li>
        <li><router-link to="/">Men</router-link></li>
        <li><router-link to="/">Women</router-link></li>
        <li><router-link to="/">Children</router-link></li>
        <li><router-link to="/">Accessories</router-link></li>
        <li><router-link to="/">Other</router-link></li>
      </ul>
      <font-awesome-i icon="bars" class="header__dropdown" 
      v-on-clickaway='closeNav' @click='openNav'/>
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
import { eventBus } from '@/main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { mapGetters } from 'vuex';
import { mixin as clickaway} from 'vue-clickaway';

library.add(faShoppingCart, faBars);

export default {
  name: 'navbar',
  mixins: [ clickaway ],
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
  methods:{
    onScroll(){      // Toggle header animation
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      this.showNav = currentScroll < this.neededScroll;
      currentScroll < this.neededScroll ? this.showNav = true : this.showNav = false;
    },
    openNav(e){
      const menu = document.querySelector('.header__leftmenu');
      if(menu.classList.contains('header__leftmenu--show')){
        menu.classList.remove('header__leftmenu--show');
        return;
      }
      menu.style.left = `${e.pageX}px`;
      menu.classList.add('header__leftmenu--show');
      console.log(menu)
    },
    closeNav(){
      const menu = document.querySelector('.header__leftmenu');
      menu.classList.remove('header__leftmenu--show');
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
    transition: all, ease-in, .5s;
    align-items: center;
    font-family: $PoppinsFont;
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
      text-decoration: none;
      color: #111;
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
    &__dropdown{
      display: none;
      font-size: 2em;
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

  @media screen and (max-width: 1366px){
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

  @media screen and (max-width: 600px){
    .header{
      justify-content: space-between;
      &__leftmenu{
        width: auto;
        display: none;
        opacity: 0;
        flex-direction: column;
        position: absolute;
        top: 80px;
        transform: translate(-50%, -20%);
        & li{
          background: #a6a6a6;
          padding: 10px 20px;
        }
        &--show{
          opacity: 1;
          display: block;
          transform: translate(-50%, 0);
        }
      }
      &__dropdown{
        display: block;
      }
    }
  }
</style>