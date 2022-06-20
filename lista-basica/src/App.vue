<script setup>
import HeaderComp from "@/components/template/HeaderComp.vue";
import RodapéComp from "./components/template/RodapéComp.vue";
</script>
<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
  <RodapéComp />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/style.css";

#app {
  /* max-width: 1280px; */
  margin: 0 auto;
  /* padding: 2rem; */
  height: 100vh;

  font-weight: normal;
}
header,
footer {
  background: rgb(4, 40, 219);
  background: radial-gradient(
    circle,
    rgb(4, 43, 236) 0%,
    rgb(68, 2, 15) 100%
  );
  color: rgb(0, 0, 0);
  font-size: 1.3rem;
  height: 15%;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}
a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}
main {
  height: 70%;
}
</style>
