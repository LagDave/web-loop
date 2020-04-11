<template>
  <div>
    <navigation-bar></navigation-bar>
    <br /><br />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigatonBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    NavigationBar,
    Footer
  }
};
</script>

<style lang="scss"></style>
