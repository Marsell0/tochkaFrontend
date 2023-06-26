<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__container _container">
        <router-link to="/">
          <p class="header__logo">
          точка . сбора
          </p>
        </router-link>
        <nav class="header__menu">
          <ul class="menu__list">
            <li class="menu__item">
              <a href="#" class="menu__link">О нас</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Вебинары</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Мероприятия</a>
            </li>
          </ul>
        </nav>
        <white-button>
          Вход
        </white-button>
      </div>
    </header>

    <router-view />

    <footer class="footer">
      <div class="footer__container _container">
        <div class="footer__about">
          <h2 class="about__logo">точка.сбора</h2>
          <nav class="about__first-menu">
            <ul class="menu__a-list">
              <li class="menu__a-item">
                <a href="#" class="menu__a-link"><b>Компания</b></a>
              </li>
              <li class="menu__a-item">
                <a href="#" class="menu__a-link">О нас</a>
              </li>
              <li class="menu__a-item">
                <a href="#" class="menu__a-link">Вебинары</a>
              </li>
              <li class="menu__a-item">
                <a href="#" class="menu__a-link">Мероприятия</a>
              </li>
            </ul>
          </nav>
          <nav class="about__second-menu">
            <ul class="menu__a-list">
              <li class="menu__a-item">
                <a href="#" class="menu__a-link"><b>Аккаунт</b></a>
              </li>
              <li class="menu__a-item">
                <a href="#" class="menu__a-link">Ваш профиль</a>
              </li>
              <li class="menu__a-item">
                <a href="#" class="menu__a-link">Мои мероприятия</a>
              </li>
            </ul>
          </nav>
        </div>    
      </div>
    </footer>
  </div>
</template>

<script>
import WhiteButton from '@/components/WhiteButton.vue'
export default{
  components:{
    WhiteButton
  }
}
</script>


<style>
  *,
*::before,
*::after{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
}
ul,
ol,
li{
    list-style: none;
}
img{
    vertical-align: top;
}
 h1,
 h2,
 h3,
 h4,
 h5,
 h6{
    font-weight: 400;
    font-size: 30px;
    color: #313131;
 }
 html,
 body{
    height: 100%;
    line-height: 1;
    font-size: 20px;
    color: #B3B3B3;
    font-family: 'Helvetica';
 }

.wrapper {
    min-height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

._container{
    max-width: 1533px;
    max-height: 4320px;
    margin: 0px auto;
    display: flex;
}
/* -------------------------ШАПКА-------------------------------- */
.header {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    padding: 0px 15px;
    font-family: 'Helvetica';
    box-shadow: 0 0 7px 0px gray;
}
.header__container {
    align-items: center;
    min-height: 92px;
    justify-content: space-between;
}
.header__logo {
    font-weight: 700;
    font-size: 30px;
    color: #3ACBBA;
}
.header__menu {
}
.menu__list {
    display: flex;
    flex-wrap: wrap;
}
.menu__item {
}
.menu__item:not(:last-child){
    margin: 0px 88px 0px 0px;
}
.menu__link {
    font-size: 23px;
    font-weight: 400;
    line-height: 117%;
    color: #313131;
}
.header__button {
    background-color: #fff;
    border-color: #3ACBBA;
    border: 1px solid;
    color: #3ACBBA;
    border-radius: 45px;
    min-width: 178px;
    min-height: 45px;
    font-weight: 400;
    font-size: 20px;
}
.header__button:hover{
  background-color: #9f9f9f;
}
/* --------------ФУТЕР------------------------------------------------ */
.footer{
    margin-top: 245px;
    flex: 0 0 auto;
    background-color: #38978B;
}
.footer__container {
}
.footer__about {
    display: flex;
}
.about__logo{
    color: #fff;
}
.about__first-menu {
}
.about__second-menu {
}
.menu__a-list {
}
.menu__a-item {
}
.menu__a-link {
    color: #fff;
    font-size: 15px;
    line-height: calc(15 / 50 * 100%);
    font-family: 'Roboto';
}
</style>