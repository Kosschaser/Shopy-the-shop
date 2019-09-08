<template>
  <div class="home">
    <Swiper id="upperBody" />
    <Description></Description>
    <prod-list></prod-list>
    <mail-coupon></mail-coupon>
  </div>
</template>

<script>

import Swiper from '@/components/Swiper.vue';
import List from './TheList.vue';
import Description from '@/components/Description.vue'
import MailCoupon from '@/components/MailCoupon.vue'
import {eventBus} from '@/main'
import { mapActions } from 'vuex';

export default {
  name: 'home',
  data(){
    return{
      upperScroll: 0,
    }
  },
  components: {
    Swiper,
    prodList: List,
    Description,
    MailCoupon
  },
  methods:{
    ...mapActions(['fetchProducts'])
  },
  created(){
    this.fetchProducts();
  },
  mounted(){
    this.upperScroll = document.getElementById('upperBody').scrollHeight;

    eventBus.$emit('ScrlTop', this.upperScroll);
  }
}
</script>

<style lang="scss">
.home{
  padding-top: 80px;
}
</style>
