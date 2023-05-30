<template>
  <div id="app">
      <UseHeader></UseHeader>
      <router-view></router-view>
      <UseFooter v-show="$route.meta.show"></UseFooter>
  </div>
</template>

<script>
import UseHeader from "@/components/Header/UseHeader.vue";
import UseFooter from "@/components/Footer/UseFooter.vue";
export default {
  name: 'App',
  components: {
      UseHeader,
      UseFooter
  }
}
</script>

<style>
</style>
