<template>
  <div class="coupon-input">
    <div class="coupon-input__wrapper coupon-input__form">
      <h2>Get Out Special Discount</h2>
      <p>
        Donec eu tristique felis. Duis augue mi, auctor ut purus et,
        dignissim aliquet quam. register your email for news and special offers
      </p>
        <form class="">
          <input type="text" class="coupon-input__mail" name="email"
          placeholder="E-mail address ...">
          <input type="button" value="GET COUPON NOW" class="coupon-input__button">
        </form>
    </div>
    <div class="coupon-input__wrapper coupon-input__icons">
      <img src="@/assets/icons/form-icons/brand-logo.png" alt="Company Logo">
      <img src="@/assets/icons/form-icons/brand-logo2.png" alt="Company Logo">
      <img src="@/assets/icons/form-icons/brand-logo3.png" alt="Company Logo">
      <img src="@/assets/icons/form-icons/brand-logo4.png" alt="Company Logo">
    </div>
  </div>
</template>

<script>

export default {
  name: 'form-coupon',
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="scss">
.coupon-input{
  display: flex;
  &__wrapper{
    width: 100%;
    flex-grow: 1;
    padding: 60px 0;
  }
  &__form{
    font-family: $PoppinsFont;
    color: #fff;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    background: url(../assets/girl-bg.png);
    & h2{
      font-size: 32px;
      font-weight: 800;
    }
    & p{
      line-height: 30px;
    }
    & form{
      display: flex;
      width: 80%;
      align-self: center;
    }
  }
  &__button{
        color: #fff;
        font-family: $PoppinsFont;
        border: none;
        outline: 0;
        background-color: $green;
        cursor: pointer;
        padding: 15px 30px;
        margin-left: 10px;
  }
  &__icons{
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: $greyish;
  }
  &__mail{
    width: 100%;
    padding: 15px 20px;
  }
}

@media screen and (max-width: 992px){
  .coupon-input{
    flex-direction: column;
  }
}

@media screen and (max-width: 400px){
  .coupon-input{
    &__form{
      & form{
        width: unset;
        flex-direction: column;
        width: 80%;
      }
      p{
        padding: 15px 0;
      }
    }
    &__mail{
      width: auto;
      margin-bottom: 15px;
    }
    &__button{
      margin: 0;
      width: 60%;
      align-self: center;
    }
    &__icons{
      flex-wrap: wrap;
    }
  }
}
</style>
