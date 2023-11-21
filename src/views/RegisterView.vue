<template>
  <main class="page">
    <div class="main-block__body">
      <div class="body">
        <div class="body__wrapper">
          <div class="block-body__title">
            <p>Привет!</p>
          </div>
          <div class="block-body__subtitle">
            <p>Расскажи о себе:</p>
          </div>
          <div class="block-body__form">
            <form class="form__list">
              <input
                class="form__item"
                type="text"
                name=""
                id=""
                placeholder="Имя пользователя*"
                v-model="name"
              />
              <input
                class="form__item"
                type="text"
                name=""
                id=""
                placeholder="E-mail*"
                v-model="email"
              />
              <input
                class="form__item"
                type="text"
                name=""
                id=""
                placeholder="Пароль*"
                v-model="password"
              />
              <input
                class="form__item"
                type="text"
                name=""
                id=""
                placeholder="Повторите пароль*"
                v-model="rePassword"
              />
            </form>
          </div>
        </div>
      </div>
      <div class="content"></div>
    </div>
  </main>
</template>

<script></script>

<style scoped>
.page {
  display: flex;
  flex: 1 0 auto;
  color: #313131;
  flex-direction: column;
  margin-top: 92px;
}
._container {
  max-width: 1533px;
  max-height: 4320px;
  margin: 100px auto;
}
.main-block__body {
  display: flex;
  padding: 13px 0px 0px 0px;
  flex-direction: row;
  /*display: flex;
    justify-content: center;
    flex-direction: column;*/
}
.body {
}
.body__wrapper {
  padding: 160px 200px;
}
.block-body__title {
  color: var(--neutral-900, #212134);

  /* h1 */
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.block-body__subtitle {
  margin-top: 20px;
  color: var(--neutral-700, #4a4a6a);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 110% */
}
.block-body__form {
  margin-top: 55px;
}
.form__list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.form__item {
  border-radius: 10px;
  border: 1px solid var(--light-mode-neutral-200, #dcdce4);
  background: #fff;

  display: flex;
  width: 100%;
  height: 20%;
  flex-shrink: 0;
  padding: 5%;
  color: #313131;
  font-size: 20px;
  font-family: "Helvetica";
  font-weight: 300;
}
.form__item ::placeholder {
  color: #b3b3b3;
}
.content {
  background: var(--neutral-100, #f6f6f9);
}
</style>
