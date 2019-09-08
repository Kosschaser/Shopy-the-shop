<template>
<div class="cartitem">
  <div class="cartitem__body">
    <div class="cartitem__image">
      <img :src="data.url" alt="" class="thumbnail">
      <div>{{data.name}}</div>
    </div>
    <div class="cartitem__data">{{data.quantity}}</div>
    <div class="cartitem__data">$ {{data.price}}</div>
    <div class="cartitem__data">
      <div class="total">
        <div>$ {{data.quantity * data.price}}</div>
         <font-awesome-i @click='removeItem' icon="window-close" class="cartitem__remove"/>
      </div>
    </div>
  </div>
  <div class="smallitem">
    <img :src="data.url" alt="data.name" class="thumbnail thumbnail--sm">
    <div class="smallitem__body">
      <div>{{data.name}}</div>
      <div>$ {{data.price}}</div>
      <font-awesome-i @click='removeItem' icon="window-close" class="cartitem__remove"/>
    </div>
    <div class="smallitem__quantity">{{data.quantity}}</div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

library.add( faWindowClose );

export default {
  name: 'products-cart-item',
  props: ['data'],
  data(){
    return{

    }
  },
  mounted(){

  },
  beforeDestroy(){

  },
  methods:{
    ...mapActions(['removeIteminCart']),
    removeItem(){
      this.removeIteminCart(this.data.id);
      }
    }
  }
</script>

<style scoped lang="scss">
.cartitem{
  width: 100%;
  &__body{
    display: flex;
    width: 100%;
    justify-content: space-between;
    min-height: 60px;
  }
  &__data{
      padding: 1% 0;
      justify-content: center;
      flex-basis: 16.6%;
    }
  &__image{
      display: flex;
      align-items: center;
      flex-basis: 50%;
    }
  &__data, &__image{
      border: $cart-border;
      display: flex;
      align-items: center;
    }
    &__remove{
      font-size: 1.5em;
      cursor: pointer;
    }
}
.total{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-around;
  }
.thumbnail{
  width: 100px;
  min-width: 100px;
  height: auto;
  margin: 1em 1.5em;
  }
.smallitem{
  display: none;
}

@media screen and (max-width: 400px){
  .cartitem{
    &__body{
      display: none;
    }
  }
  .smallitem{
    display: flex;
    margin-bottom: 15px;
    &__body{
      display: flex;
      flex-direction: column;
      text-align: left;
      & div{
        margin-bottom: 1em;
      }
    }
    &__quantity{
      margin-left: auto;
      font-size: 2em;
      font-weight: 900;
      align-self: center;
    }
  }
}
.thumbnail{
  &--sm{
   margin: 0;
   margin-right: 1em;
  }
}
</style>
