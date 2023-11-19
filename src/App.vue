<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "main") + "-layout";
    },
  },
  components: {
    MainLayout,
  },
};
</script>

<style>
@font-face {
  font-weight: 400;
  font-family: "Geometria";
  src: url("/src/assets/fonts/geometria_medium.otf") format("woff2");
}
@font-face {
  font-weight: 700;
  font-family: "Geometria";
  src: url("/src/assets/fonts/geometria_bold.otf") format("otf");
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
ul,
ol,
li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
  font-size: 30px;
  color: #313131;
}
html,
body {
  height: 100%;
  line-height: 1;
  font-size: 20px;
  color: #b3b3b3;
  font-family: "Helvetica";
}

/* Использование шрифта */
body {
  font-family: "Geometria", sans-serif;
}
</style>
