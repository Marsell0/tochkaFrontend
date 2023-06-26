<template>
  <main class="page">
    <div class="main-block__body _container">
      <div class="block_body__progress-bar">

      </div>
      <div class="block_body__title">
        <p>Привет!</p>
      </div>
      <div class="block_body__subtitle">
        <p>Расскажи о себе:</p>
      </div>
      <div class="block-body__form">
        <form class="form__list">
          <input class="form__item" type="text" name="" id="" placeholder="Name*" v-model="name">
          <input class="form__item" type="text" name="" id="" placeholder="Surname*" v-model="surname">
          <input class="form__item" type="text" name="" id="" placeholder="Email*" v-model="email">
          <input class="form__item" type="text" name="" id="" placeholder="Password*" v-model="password">
          <input class="form__item" type="text" name="" id="" placeholder="Re-password*" v-model="rePassword">
          <white-button @click="regUser">Зарегистрироваться</white-button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import WhiteButton from '@/components/WhiteButton.vue';

export default{
  components: {
    WhiteButton
  },
  data(){
    return {
      name: ""
    }
  },
  methods:{
    
  }
}
</script>


<style scoped>
  .page {
    display: flex;
    flex: 1 0 auto;
    color: #313131;
    flex-direction: column;
    margin-top: 92px;
}
._container{
    max-width: 560px;
    max-height: 4320px;
    margin: 100px auto;

}
.main-block__body{
    display: flex;
    padding: 13px 0px 0px 0px;
    flex-direction: column;
    flex-wrap: wrap;
    /*display: flex;
    justify-content: center;
    flex-direction: column;*/

}
.block_body__progress-bar{
  border: 1px solid #313131;
  
}
.block_body__title {
  color: #313131;
  font-size: 55px;
  font-weight: 700;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  margin-top: 60px;
}
.block_body__subtitle {
  color: #313131;
  font-size: 45px;
  font-weight: 700;
  margin-top: 5px;
}
.block-body__form {
  margin-top: 55px;
}
.form__list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  
}
.form__item{
  display: flex;
  width: 100%;
  height: 20%;
  border-radius: 25px;
  border: 1px solid #B3B3B3;
  background: #FFF;
  flex-shrink: 0;
  padding: 5%;
  color: #313131;
  font-size: 20px;
  font-family: 'Helvetica';
  font-weight: 300;
}
.form__item ::placeholder{
  color: #B3B3B3;
}
</style>