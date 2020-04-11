<template>
  <div class="team mt-5 py-5">
    <div class="container">
      <div data-aos="zoom-in" data-aos-offset="200" class="team-members-header">
        <h2 class="text-center">Meet our team</h2>
        <hr />
        <p class="text-center">
          Our employees are dedicated team players who bring energy, ideas and
          pride to their work.
        </p>
      </div>
      <div class="team-members-container mt-5">
        <img
          data-aos="fade-right"
          data-aos-offset="200"
          src="../../../public/images/team-members.png"
          alt=""
        />
      </div>
      <div class="team-members-name row">
        <div class="col-4">
          <p class="text-center name">Jason Frank</p>
          <p class="text-center role">Web Designer</p>
        </div>
        <div class="col-4">
          <p class="text-center name">April Wines</p>
          <p class="text-center role">Founder/CEO</p>
        </div>
        <div class="col-4">
          <p class="text-center name">John Cash</p>
          <p class="text-center role">HR Manager</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../../public/scss/base.scss";
.team {
  background: #f9fafc;
  .team-members-header {
    h2 {
      font-family: $serif;
    }
    hr {
      max-width: 300px;
    }
    p {
      max-width: 350px;
      margin: 0 auto;
      color: $lighterGrey;
    }
  }
  .team-members-container {
    img {
      width: 100%;
    }
  }
  .team-members-name {
    margin-top: 20px;
    p {
      margin: 0;
    }
    p.name {
      color: $primaryColor;
      font-weight: bolder;
    }
    p.role {
      color: $lighterGrey;
    }
  }
}
</style>
