<template>
  <main class="page">
    <div class="main-block_body _container">
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
          <input type="text" name="" id="" placeholder="Surname*" v-model="surname">
          <input type="text" name="" id="" placeholder="Email*" v-model="email">
          <input type="text" name="" id="" placeholder="Password*" v-model="password">
          <input type="text" name="" id="" placeholder="Re-password*" v-model="rePassword">
        </form>
      </div>
    </div>
  </main>
</template>

<script>

export default{
  data(){
    return {
      name: ""
    }
  }
}
</script>


<style scoped>
  .page {
    display: flex;
    flex: 1 0 auto;
    background-color: #F5F5F5;
    color: #313131;
    flex-direction: column;
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
  font-size: 68px;
  width: 100%;
}
.block_body__subtitle {
  font-size: 50px
}
.form__item{
  border: 1px solid #313131;
}
</style>