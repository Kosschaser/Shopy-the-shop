<template>
  <footer class="footer">
    <div>
      <div class="">
        <div class="footer__smm--border">
          <div class="footer__smm container">
            <p>We're confident provided all the best for you. Stay connect with us</p>
            <div class="footer__icons">
              <a href="#"><font-awesome-i :icon="['fab', 'facebook-f']" size="1x"/></a>
              <a href="#"><font-awesome-i :icon="['fab', 'twitter']" size="1x"/></a>
              <a href="#"><font-awesome-i :icon="['fab', 'instagram']" size="1x"/></a>
              <a href="#"><font-awesome-i :icon="['fab', 'vk']" size="1x"/></a>
              <a href="#"><font-awesome-i :icon="['fab', 'linkedin']" size="1x"/></a>
            </div>
          </div>
        </div>
        <div class="footer__information container">
          <div class="footer__section">
            <h6>Information</h6>
            <a class="footer__section__item" href="#">Delivery Information</a>
            <a class="footer__section__item" href="#">Discount</a>
            <a class="footer__section__item" href="#">Sitemap</a>
            <a class="footer__section__item" href="#">Privacy Policy</a>
            <a class="footer__section__item" href="#">My Account</a>
          </div>
          <div class="footer__section">
            <h6>My account</h6>
            <a class="footer__section__item" href="#">Sign In</a>
            <a class="footer__section__item" href="#">View Chart</a>
            <a class="footer__section__item" href="#">My Wishlist</a>
            <a class="footer__section__item" href="#">Check out</a>
            <a class="footer__section__item" href="#">Track My Order</a>
          </div>
          <div class="footer__section">
            <h6>Help</h6>
            <a class="footer__section__item" href="#">F.A.Q.</a>
            <a class="footer__section__item" href="#">Shipping</a>
            <a class="footer__section__item" href="#">Contact us</a>
            <a class="footer__section__item" href="#">Privacy Policy</a>
          </div>
          <div class="footer__section">
            <h6>Contact Info</h6>
            <div class="footer__section__item"><font-awesome-i class="contacts-icon" :icon="['fas', 'globe-europe']" size="1x"/><p>1234, Address, Country</p></div>
            <div class="footer__section__item"><font-awesome-i class="contacts-icon" :icon="['fas', 'envelope']" size="1x"/><p>+1 234 567 890</p></div>
            <a class="footer__section__item" href="mailto: Yourmail@gmail.com"><font-awesome-i class="contacts-icon" :icon="['fas', 'phone']" size="1x"/>Yourmail@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
      <div class="footer__below">
        <div class="container footer__sign">
          <p>Footer text Design by Ipsum</p>
          <div>
            <img src="@/assets/icons/cards-icons/amazon.png" alt="">
            <img src="@/assets/icons/cards-icons/card.png" alt="">
            <img src="@/assets/icons/cards-icons/maestro.png" alt="">
            <img src="@/assets/icons/cards-icons/paypal.png" alt="">
            <img src="@/assets/icons/cards-icons/visa.png" alt="">
          </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { faFacebookF, faTwitter, faInstagram, faVk, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'
import {faGlobeEurope, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


library.add(faFacebookF, faTwitter, faInstagram,
faVk, faLinkedin, faGlobeEurope, faPhone, faEnvelope)

export default {
  name: 'bottom',
  data(){
    return{

    }
  },
  methods:{

  },
  mounted(){

  }
}
</script>

<style scoped lang="scss">

  .footer{
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    font-family: $PoppinsFont;
    &__smm{
      display: flex;
      justify-content: space-between;
      align-items: center;
      & a{
        font-size: 1.5em;
        color: $blackish;
        & :visited{
        }
      }
      &--border{
        border-bottom: 2px solid #eeeeee;
        border-top: 2px solid #eeeeee;
      }
    }
    &__information{
      display: flex;
      justify-content: space-between;
    }
    &__section{
      display: flex;
      flex-direction: column;
      margin: 30px 0 50px 0;
      text-align: left;
      & h6{
        margin-bottom: 30px;
        font-weight: 800;
        font-size: 1.2em;
      }
      &__item{
        display: flex;
        font-size: .8em;
        color: $blackish;
        transition: all .5s ease;
        text-decoration: none;
        margin-bottom: 10px;
      }
      & a:hover{
        color: $green;
      }
    }
    &__below{
      background-color: black;
    }
    &__sign{
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: grey;
      padding: 15px;
      & img{
        margin-left: 15px;
      }
    }
    &__icons{
      border-left: 2px solid #eeeeee;
      border-right: 2px solid #eeeeee;
      padding: 20px 0;
      & a:first-child{
        margin-left: 30px;
      }
      & a{
        margin-right: 30px;
        color: $blackish;
        transition: all .5s ease;
        &:hover{
          color: $green;
        }
      }
    }
  }
  .contacts-icon{
    margin-right: 10px;
  }

  @media screen and (max-width: 400px){
    .footer{
      &__smm{
        flex-direction: column;
        padding-top: 20px;
      }
      &__icons{
        border: none; 
      }
      &__information{
        flex-wrap: wrap;
      }
      &__section{
        flex-basis: 50%;
      }
      &__sign{
        flex-direction: column-reverse;
        & div{
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
