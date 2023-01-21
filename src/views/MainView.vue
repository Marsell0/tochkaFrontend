<template>
  <main class="page">
    <div class="page__main-block main-block">
      <div class="main-block__container _container">
        <div class="main-block__body">
          <form action="" class="main-block__search-string">
            <input type="text" class="search-string__field" placeholder="Найти мероприятие">
            <input type="submit" class="search-string__button">
          </form>
          <div class="main-block__pic">
            <div class="main-block__title">
              <h1>Будь в курсе всех событий - <b class="title__boldtext">и точка!</b></h1>
            </div>   
            <div class="main_block__image">
              <img class="main_block__image" src="../assets/body-pic.jpg" alt="picture">
            </div>
          </div>
          <button class="main-block__button">Начать</button> 
          <a href="#" class="main-block__icon-button"><img class="main-block__icon" src="source/arrow.svg" alt="arrow"></a>
        </div>
      </div>
    </div>

    <div class="page__about-project">
      <div class="about-project__container _container">
        <div class="about-project__descript">
          <p class="about-project__title">Что такое <b class="title__line">Точка сбора</b>?</p>
        </div>
        <div class="about-project__items">
          <div class="about-project__item">
            <img src="../assets/1.png" alt="pic">
            <p class="item__title">Заводи знакомства</p>
            <p class="item__subtitle">Знакомься с людьми со схожими интересами вживую или онлайн</p>
          </div>
          <div class="about-project__item">
            <img src="../assets/2.png">
            <p class="item__title">Посещай мероприятия</p>
            <p class="item__subtitle">Присоединяйся к инетересным тебе мероприятиям в твоём городе</p>
          </div>
          <div class="about-project__item">
            <img src="../assets/3.png">
            <p class="item__title">Стань организатором</p>
            <p class="item__subtitle">Подай заявку на становление организатором и собирай единомышленников вокруг себя</p>
          </div>
        </div>
      </div>
    </div>

    <div class="page__near-vebinar">
      <div class="near-vebinar__container _container">
        <div class="near-vebinar__descript">
          <p class="near-vebinar__title">Ближайшие мероприятия  <a class="near-vebinar__subtitle" href="#">Узнать больше</a></p>
        </div>
        <div class="near-vebinar__vebinars">
          <div class="near-vebinar__vebinar">
            <div class="vebinar__image"></div>
            <p class="vebinar__title">Название мероприятия</p>
            <p class="vebinar__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quam iste error minus laboriosam impedit hic voluptas nam? Voluptatibus, voluptatem.</p>
          </div>
          <div class="near-vebinar__vebinar">
            <div class="vebinar__image"></div>
            <p class="vebinar__title">Название мероприятия</p>
            <p class="vebinar__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quam iste error minus laboriosam impedit hic voluptas nam? Voluptatibus, voluptatem.</p>
          </div>
          <div class="near-vebinar__vebinar">
            <div class="vebinar__image"></div>
            <p class="vebinar__title">Название мероприятия</p>
            <p class="vebinar__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat quam iste error minus laboriosam impedit hic voluptas nam? Voluptatibus, voluptatem.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .page {
    flex: 1 1 auto;
}
.page__main-block {
}
.main-block {
}
.main-block__container {
}
.main-block__body{
    padding: 13px 0px 0px 0px;
    margin-bottom: 212px;
    /*display: flex;
    justify-content: center;
    flex-direction: column;*/

}

.main-block__search-string {
    display: flex;
    justify-content: center;
    min-height: 50px;
    margin: 102px 0 87px 0;
}
.search-string__field {
    flex: 1;
    border: 1px solid;
    border-radius: 45px;
    max-width: 1144px;
    max-height: 50px;
}
input::placeholder{
    padding-left: 5%;
    font-size: 20px;
}
.search-string__button {
    border: 1px solid;
    border-radius: 45px;
}
.main-block__pic{
    margin-left: 28px;
}
.main-block__title{
    padding-top: 138px;
    float: left;
    max-width: 700px;
}
.main-block__title h1{
    font-size: 68px;
    font-weight: 700;
    color: #313131;
    line-height: calc(85.5 / 68 * 100%);
}
.title__boldtext{
    color: #3ACBBA;
    background-color: #B9EBE5;
}
.main-block__button {
    font-size: 30px;
    font-weight: 400;
    color: #fff;
    text-align: center;
    border-radius: 45px;
    background-color: #3ACBBA;
    width: 326px;
    height: 92px;
    opacity: 1;
    transition-duration: 500ms;
    font-family: Helvetica;
    margin-top: 39px;
    margin-left: 20px;
}
.main-block__button:hover{
    opacity: 0.8;
    transition-duration: 500ms;
}
.main-block__icon-button{
    max-width: 30px;
    max-height: 30px;
}
.main-block__icon{
    padding-top: 72px;
}
.main_block__image {
    float: right;
    border-radius: 45px;
    max-height: 500px;
    max-width: 700px;
    
}
.page__about-project {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.about-project__title{
  font-size: 40px;
  color: #313131;
  margin-bottom: 40px;
}
.title__line{
  color: #3ACBBA;
}
.about-project__items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
.about-project__item {
  color:#313131;
  font-family: 'Helvetica';
}
.item__image {
  max-height: 250px;
  max-width: 225px;
}
.item__title {
  font-size: 30px;
  font-weight: 500;
}
.item__subtitle {
  line-height: calc(29 / 23 * 100%);
  font-weight: 300;
  font-size: 20px;
}
.page__near-vebinar {
    margin-top: 130px;
}
.near-vebinar__container {
    display: flex;
    flex-wrap: wrap;
}
.near-vebinar__title {
    line-height: calc(30 / 37 * 100%);
    font-size: 30px;
    color: #313131;
    margin-bottom: 40px;
}
.near-vebinar__descript{
    justify-content: space-between;
}
.near-vebinar__subtitle{
    line-height: calc(20 / 27 * 100%);
    font-size: 20px;
    color: #A6A6A6;
}
.near-vebinar__vebinars{
    display: flex; 
    flex-wrap: nowrap;
}
.near-vebinar__vebinar :not(:last-child){
    margin-right: 54px;
}
.vebinar__image{
    width: 475px;
    height: 250px;
    background-color: #3ACBBA;
    border-radius: 45px;
}
.vebinar__title {
    font-size: 25px;
    line-height: calc(25 / 34 * 100%);
    color: #313131;
    margin: 13px 0 13px 0;
}
.vebinar__text {
    color: #A6A6A6;
    font-size: 20px;
    line-height: 27px;
}
</style>