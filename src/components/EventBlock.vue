<template>
  <div class="block">
    <div class="block__img">
      <slot name="img"></slot>
    </div>
    <div class="block__wrapper">
      <div class="block__content">
        <div class="content__date">
          <slot name="date">13.00</slot>
        </div>
        <div class="content__title">
          <slot name="title"></slot>
        </div>
        <div class="content__subtitle">
          <slot name="subtitle"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let isFavorite = false;
let targetId;

function changeIcon(event) {
  if (isFavorite) {
    targetId = event.target.tagName;
    console.log(event);
    isFavorite = true;
  } else {
    targetId = event.target.id;
    console.log(targetId);
    isFavorite = false;
  }
}
</script>

<style scoped>
.block {
  width: 430px;
  height: 310px;
  border-radius: 10px;
  background: #fff;
  padding-bottom: 450px;

  /* ShadowCard */
  box-shadow: 0px 10px 40px 0px rgba(217, 217, 217, 0.25);
}
.block__wrapper {
  max-width: 370px;
  margin: 0px auto;
}
.block__img {
  max-width: 430px;
}
.block__content {
  padding: 30px;
}

.content__date {
  padding: 10px 0px;
  color: var(--neutral-300, #c0c0cf);
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;

  /* h3 */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
}
.content__title {
  color: #313131;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 100% */
}
.content__subtitle {
  padding-top: 20px;
  color: #b3b3b3;
  text-align: justify;
  font-feature-settings: "clig" off, "liga" off;

  /* subtitle */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
}
.block__btns {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-bottom: 30px;

  color: var(--primary-500, #3acbbc);
  font-feature-settings: "clig" off, "liga" off;

  /* subtitle */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
}
.btns__favorite {
  margin-right: 10px;
}
.btns__add {
  transition: 0.3s ease all;
  border-radius: 10px;
  border: 1px solid var(--primary-500, #3acbbc);
  padding: 10px 30px;
}
.btns__add:hover {
  transition: 0.3s ease all;
  background: var(--primary-500, #3acbbc);
  color: #fff;
}
</style>
