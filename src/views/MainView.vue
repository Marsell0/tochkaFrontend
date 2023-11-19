<template>
  <main class="page">
    <div class="page__main-block main-block">
      <div class="main-block__container _container">
        <div class="main-block__body">
          <div class="main-block__pic">
            <div class="main-block__title">
              <form action="" class="main-block__search-string">
                <input
                  type="text"
                  class="search-string__field"
                  placeholder="Найти мероприятие"
                />
                <input type="submit" class="search-string__button" />
              </form>
              <h1>
                Будь в курсе всех событий -
                <b class="title__boldtext">и точка!</b>
              </h1>
              <p class="main-block__subtitle">
                Находи своих единомышленников по интересам, участвуй в
                мероприятиях и даже организовывай их - и все это в точке сбора!
              </p>
            </div>
            <div class="main_block__image">
              <img
                class="main_block__image"
                src="../assets/main/body-pic.jpg"
                alt="picture"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>

    <div class="page__about-project">
      <div class="about-project__container _container">
        <div class="about-project__descript">
          <p class="about-project__title">
            Что такое <b class="title__line">Точка сбора</b>?
          </p>
        </div>
        <div class="about-project__items">
          <div class="about-project__item">
            <img class="about__img" src="../assets/main/1.png" alt="pic" />
            <p class="item__title">Заводи знакомства</p>
            <p class="item__subtitle">
              Знакомься с людьми со схожими интересами вживую или онлайн
            </p>
          </div>
          <div class="about-project__item">
            <img class="about__img" src="../assets/main/2.png" />
            <p class="item__title">Посещай мероприятия</p>
            <p class="item__subtitle">
              Присоединяйся к инетересным тебе мероприятиям в твоём городе
            </p>
          </div>
          <div class="about-project__item">
            <img class="about__img" src="../assets/main/3.png" />
            <p class="item__title">Стань организатором</p>
            <p class="item__subtitle">
              Собирай своих единомышленников вокруг себя
            </p>
          </div>
        </div>
        <div class="about-project__btn"></div>
      </div>
    </div>

    <div class="page__near-vebinar">
      <div class="near-vebinar__container _container">
        <div class="near-vebinar__descript">
          <p class="near-vebinar__title">Выбирайте то, что вам по душе</p>
        </div>
        <swiper :modules="modules" :pagination="{ clickable: true }">
          <swiper-slide>
            <div class="slider__block">
              <InteresBlock v-for="item in interes">
                <template #img
                  ><img src="../assets/interes/photo.png"
                /></template>
                <template #title>{{ item.title }}</template>
                <template #subtitle>{{ item.subtitle }}</template>
              </InteresBlock>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slider__block">
              <InteresBlock v-for="item in interes">
                <template #img>{{ item.img }}</template>
                <template #title>{{ item.title }}</template>
                <template #subtitle>{{ item.subtitle }}</template>
              </InteresBlock>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="slider__block">
              <InteresBlock v-for="item in interes">
                <template #img>{{ item.img }}</template>
                <template #title>{{ item.title }}</template>
                <template #subtitle>{{ item.subtitle }}</template>
              </InteresBlock>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="near-vebinar__more">
        Узнать больше<img
          src="../assets/interes/arrow.png"
          style="margin-left: 10px"
        />
      </div>
    </div>
    <div class="page__near-events">
      <div class="near-events__wrapper _container">
        <div class="near-events__descript">
          <p class="about-project__title">Ближайшие мероприятия</p>
        </div>
      </div>
      <swiper :modules="modules" :pagination="{ clickable: true }">
        <swiper-slide>
          <div class="slider__block">
            <EventBlock v-for="item in events">
              <template #img>{{ item.img }}</template>
              <template #date>{{ item.date }}</template>
              <template #title>{{ item.title }}</template>
              <template #subtitle>{{ item.subtitle }}</template>
            </EventBlock>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider__block">
            <EventBlock v-for="item in events">
              <template #img>{{ item.img }}</template>
              <template #date>{{ item.date }}</template>
              <template #title>{{ item.title }}</template>
              <template #subtitle>{{ item.subtitle }}</template>
            </EventBlock>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider__block">
            <EventBlock v-for="item in events">
              <template #img>{{ item.img }}</template>
              <template #date>{{ item.date }}</template>
              <template #title>{{ item.title }}</template>
              <template #subtitle>{{ item.subtitle }}</template>
            </EventBlock>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="page__download">
      <div class="download__wrapper _container">
        <div class="download__descript">
          <p class="about-project__title">Скачай приложение</p>
        </div>
        <div class="download__about">
          <div class="about__img">
            <img src="../assets/logo.png" />
          </div>
          <div class="about__desc">
            <p
              style="
                font-size: 35px;
                color: #3acbba;
                font-weight: 700;
                line-height: normal;
                font-style: normal;
                margin-bottom: 20px;
              "
            >
              точка . сбора
            </p>
            <p>
              Точка сбора - это сервис для поиска событий, который позволяет
              пользователям просматривать каталог событий , добавлять
              собственные мероприятия, и изучать подробную информацию о
              конкретном событии или пользователе.
            </p>
          </div>
        </div>
        <div class="download__btns">
          <img src="../assets/download/play.png" />
          <img src="../assets/download/appstore.png" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SwiperClass, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import InteresBlock from "../components/InteresBlock.vue";
import EventBlock from "../components/EventBlock.vue";

import "swiper/css";
import "swiper/css/pagination";
export default {
  components: {
    Swiper,
    SwiperSlide,
    InteresBlock,
    EventBlock,
  },
  data() {
    return {
      interes: [
        {
          img: "../assets/interes/photo.png",
          title: "Кружок рисования",
          subtitle:
            "Если ваш ребенок любит рисовать и очень хочет научиться рисовать красиво – это к нам!",
        },
        {
          img: "../assets/interes/photo.png",
          title: "Фотосъемка",
          subtitle:
            "Любительская фотосъемка людей и животных + качественная обработка на ваш вкус!",
        },
        {
          img: "../assets/interes/photo.png",
          title: "MangaLovers",
          subtitle:
            "Коллекционируем мангу, обсуждаем новинки и фанатеем по 2д мальчикам",
        },
      ],
      events: [
        {
          img: "../assets/events/run.png",
          date: "fri 03 13:00",
          title: "Марафон 'Доброе дело'",
          subtitle:
            "Если ваш ребенок любит рисовать и очень хочет научиться рисовать красиво – это к нам!",
        },
        {
          img: "../assets/events/run.png",
          date: "fri 03 13:00",
          title: "Фотосъемка",
          subtitle:
            "Любительская фотосъемка людей и животных + качественная обработка на ваш вкус!",
        },
        {
          img: "../assets/events/run.png",
          date: "fri 03 13:00",
          title: "MangaLovers",
          subtitle:
            "Коллекционируем мангу, обсуждаем новинки и фанатеем по 2д мальчикам",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style scoped>
.page {
  flex: 1 1 auto;
  background: url("../assets/main/bg.png");
  background-repeat: no-repeat;
}
._container {
  max-width: 1533px;
  max-height: 4320px;
  margin: 0px auto;
  display: flex;
}
.page__main-block {
}
.main-block {
}
.main-block__container {
}
.main-block__body {
  padding: 13px 0px 0px 0px;
  margin-bottom: 212px;
  margin-top: 238px;
  /*display: flex;
    justify-content: center;
    flex-direction: column;*/
}

.main-block__search-string {
  display: flex;
  justify-content: center;
  min-height: 50px;
}
.search-string__field {
  flex: 1;
  border-radius: 15px;
  border: 1px solid #a6a6a6;
  background: #fff;
}
input::placeholder {
  padding-left: 5%;
  font-size: 20px;
}
.search-string__button {
  border: 1px solid;
  border-radius: 45px;
}
.main-block__pic {
  margin-left: 28px;
}
.main-block__title {
  float: left;
  max-width: 700px;
}
.main-block__subtitle {
  max-width: 644px;
  color: var(--neutral-700, #4a4a6a);
  text-align: justify;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 31px; /* 155% */
}
.main-block__title h1 {
  margin-top: 110px;
  margin-bottom: 20px;
  color: #313131;
  font-size: 55px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.title__boldtext {
  color: #3acbba;
  background-color: #b9ebe5;
}
.main-block__button {
  font-size: 30px;
  font-weight: 400;
  color: #fff;
  text-align: center;
  border-radius: 45px;
  background-color: #3acbba;
  width: 326px;
  height: 92px;
  opacity: 1;
  transition-duration: 500ms;
  font-family: Helvetica;
  margin-top: 39px;
  margin-left: 20px;
}
.main-block__button:hover {
  opacity: 0.8;
  transition-duration: 500ms;
}
.main-block__icon-button {
  max-width: 30px;
  max-height: 30px;
}
.main-block__icon {
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
.about__img {
}
.about-project__title {
  color: #313131;
  font-feature-settings: "clig" off, "liga" off;
  text-shadow: 0px 1px 5px rgba(58, 203, 186, 0.15);
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 78.571% */
  margin-bottom: 40px;
}
.about-project__container {
  flex-direction: column;
}
.title__line {
  color: #3acbba;
}
.about-project__descript {
  height: max-content;
  display: flex;
  justify-content: center;
}
.about-project__items {
  display: flex;
  flex-wrap: nowrap;
}
.about-project__item {
  color: #313131;
  max-width: 416px;
}
.about-project__item:not(:last-child) {
  margin-right: 100px;
}
.item__image {
  max-height: 250px;
  max-width: 225px;
}
.item__title {
  color: var(--neutral-700, #4a4a6a);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 91.667% */
}
.item__subtitle {
  padding: 20px 40px;
  color: var(--neutral-400, #a5a5ba);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* subtitle */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
}
.page__near-vebinar {
  padding-top: 220px;
  max-width: 1533px;
  margin: 0px auto;
}
.near-vebinar__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.near-vebinar__title {
  padding-bottom: 60px;
  color: #313131;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 78.571% */
}
.near-vebinar__descript {
  justify-content: space-between;
}
.near-vebinar__subtitle {
  line-height: calc(20 / 27 * 100%);
  font-size: 20px;
  color: #a6a6a6;
}
.near-vebinar__vebinars {
  display: flex;
  flex-wrap: nowrap;
}
.near-vebinar__vebinar :not(:last-child) {
  margin-right: 54px;
}
.slider__block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 50px;
}
.slider__item {
  display: flex;
  margin: 0px auto;
  padding-bottom: 40px;
}
.near-vebinar__more {
  color: #313131;
  font-feature-settings: "clig" off, "liga" off;

  /* subtitle */
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
}
.vebinar__image {
  width: 475px;
  height: 250px;
  background-color: #3acbba;
  border-radius: 45px;
}
.vebinar__title {
  font-size: 25px;
  line-height: calc(25 / 34 * 100%);
  color: #313131;
  margin: 13px 0 13px 0;
}
.vebinar__text {
  color: #a6a6a6;
  font-size: 20px;
  line-height: 27px;
}
/* -----------------------EVENTS-----------------------------*/
.page__near-events {
  padding-top: 250px;
  max-width: 1533px;
  margin: 0px auto;
}
.near-events__wrapper {
  display: flex;
  flex-direction: column;
}
.near-events__descript {
  display: flex;
  justify-content: center;
}
/*-----------------------DOWNLOAD----------------------*/
.page__download {
  padding-top: 250px;
  max-width: 800px;
  margin: 0px auto;
}
.download__wrapper {
  display: flex;
  flex-direction: column;
}
.download__descript {
  display: flex;
  justify-content: center;
}
.download__about {
  display: flex;
  flex-direction: row;
}
.about__img {
}
.about__desc {
  max-width: 560px;
  margin-left: 60px;

  color: var(--neutral-400, #a5a5ba);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
}
.download__btns {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
