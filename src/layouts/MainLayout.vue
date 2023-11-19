<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__container _container">
        <router-link to="/">
          <div class="header__logo">
            <img class="header__logo-img" src="../assets/logo.png" />
            <p>точка сбора</p>
          </div>
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
        <div class="header__btn">ВОЙТИ</div>
      </div>
    </header>

    <router-view />

    <footer class="footer">
      <div class="footer__container _container">
        <div class="footer__about">
          <div class="about__logo">
            <img
              src="../assets/logo.png"
              style="max-height: 60px; max-width: 60px; margin-right: 20px"
            />
            <p>точка.сбора</p>
          </div>
          <div class="about__descript">
            <p>
              Точка сбора - это сервис для поиска событий, который позволяет
              пользователям просматривать каталог событий , добавлять
              собственные мероприятия, и изучать подробную информацию о
              конкретном событии или пользователе.
            </p>
          </div>
          <div class="about__contact"></div>
        </div>
        <div class="footer__f-menu">
          <ul class="f-menu__list">
            <li class="f-menu__item">
              <p style="font-size: 20px; font-weight: 700">Главная</p>
            </li>
            <li class="f-menu__item">
              <a href="#" class="f-menu__link">Мероприятия</a>
            </li>
            <li class="f-menu__item">
              <a href="#" class="f-menu__link">Мероприятия</a>
            </li>
          </ul>
          <ul class="f-menu__list">
            <li class="f-menu__item">
              <p style="font-size: 20px; font-weight: 700">Главная</p>
            </li>
            <li class="f-menu__item">
              <a href="#" class="f-menu__link">Мероприятия</a>
            </li>
            <li class="f-menu__item">
              <a href="#" class="f-menu__link">Мероприятия</a>
            </li>
          </ul>
          <ul class="f-menu__list">
            <li class="f-menu__item">
              <p style="font-size: 20px; font-weight: 700">Главная</p>
            </li>
            <li class="f-menu__item">
              <a href="#" class="f-menu__link">Мероприятия</a>
            </li>
            <li class="f-menu__item">
              <a href="#" class="f-menu__link">Мероприятия</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script></script>

<style>
.wrapper {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

._container {
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
  font-family: "Helvetica";
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
  color: #3acbba;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header__logo-img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.header__menu {
}
.menu__list {
  display: flex;
  flex-wrap: wrap;
}
.menu__item {
}
.menu__item:not(:last-child) {
  margin: 0px 88px 0px 0px;
}
.menu__link {
  font-size: 18px;
  font-weight: 400;
  line-height: 117%;
  color: #313131;
  text-transform: uppercase;
}
.header__btn {
  border-radius: 10px;
  padding: 15px 50px;
  background-color: #dcfaf6;
  color: #3acbbc;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  transition: 0.3s ease all;
  cursor: pointer;
}
.header__btn:hover {
  transition: 0.3s ease all;
  opacity: 0.6;
}
/* --------------ФУТЕР------------------------------------------------ */
.footer {
  margin-top: 245px;
  flex: 0 0 auto;
  background-color: #38978b;
}
.footer__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 0px;
}
.footer__about {
  display: flex;
  flex-direction: column;
}
.about__logo {
  display: flex;
  flex-direction: row;
  align-items: center;

  color: #fff;
  font-size: 30.912px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.about__descript {
  margin-top: 20px;
  max-width: 560px;

  color: var(--neutral-150, #eaeaef);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 196.429% */
}
.about__contact {
}
.footer__f-menu {
  display: flex;
  flex-direction: row;
}
.f-menu__list:not(:last-child) {
  margin-right: 100px;
}
.f-menu__list {
  color: var(--neutral-200, #dcdce4);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.f-menu__item {
  color: #dcdce4;
  padding: 5px 0px;
}
.f-menu__link {
  color: #dcdce4;
}
</style>
