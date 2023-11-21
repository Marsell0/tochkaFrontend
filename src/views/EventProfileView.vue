<template>
  <div class="event-profile">
    <div class="event-profile__header">
      <div class="header__wrapper _container">
        <div class="header__title">
          <img />
          <p>Name event</p>
        </div>
        <div class="header__btns">
          <div class="btns__favorite"></div>
          <div class="btns__add">
            <p>Присоединиться</p>
          </div>
        </div>
      </div>
    </div>
    <div class="event-profile__wrapper _container">
      <div class="event-profile__time">
        <div class="time__wrapper">
          <div class="time__descript">
            <div class="descript__img"></div>
            <div class="descript__text">
              <p>14.00 - 16.00</p>
            </div>
          </div>
          <div class="time__btn">
            <p>Online</p>
          </div>
        </div>
      </div>
      <div class="event-profile__about">
        <div class="about__wrapper">
          <div class="about__content">
            <div class="about__title">Описание</div>
            <div class="about__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </div>
          <div class="about__themes">
            <div class="about__title">Похожие темы</div>
            <div class=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.event-profile {
  margin-top: 93px;
}
.event-profile__header {
  background: var(
    --account,
    linear-gradient(111deg, #4aebd8 15.64%, #cba3fe 106.3%)
  );
  color: #fff;
  font-size: 45px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.header__wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
.header__title {
  padding-top: 80px;
  padding-bottom: 40px;
}
.header__btns {
  padding-top: 80px;
  padding-bottom: 40px;
}
.btns__favorite {
}
.btns__add {
  border-radius: 15px;
  border: 1px solid var(--primary-500, #3acbbc);
  background: #fff;

  color: var(--primary-500, #3acbbc);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.btns__add p {
  padding: 5px 30px;
}
.event-profile__wrapper {
  display: flex;
  flex-direction: column;
  max-width: 900px;
}
.event-profile__time {
  margin: 50px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 20px;
  border: 1px solid #ececec;
  background: #fff;
  box-shadow: 0px 5px 15px 0px rgba(217, 217, 217, 0.25);
}
.time__wrapper {
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.time__descript {
}
.time__btn {
  border-radius: 10px;
  border: 1px solid #3acbba;
  background: #fff;
  color: #3acbba;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.time__btn p {
  padding: 10px;
}
.event-profile__about {
}
.about__wrapper {
}
.about__content {
}
.about__title {
  margin-bottom: 20px;

  color: #313131;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.about__subtitle {
  margin-bottom: 30px;

  color: #b3b3b3;
  text-align: justify;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
