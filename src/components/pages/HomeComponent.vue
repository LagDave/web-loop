<template>
  <div>
    <jumbotron></jumbotron>
    <introduction></introduction>
    <testimonials></testimonials>
    <team></team>
  </div>
</template>

<script>
import Jumbotron from "../subcomponents/Jumbotron.vue";
import Introduction from "../subcomponents/Introduction.vue";
import Testimonials from "../subcomponents/Testimonials.vue";
import Team from "../subcomponents/Team.vue";

export default {
  components: {
    Jumbotron,
    Introduction,
    Testimonials,
    Team
  }
};
</script>
