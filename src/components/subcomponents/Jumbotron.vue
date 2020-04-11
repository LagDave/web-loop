<template>
  <div class="my-jumbotron my-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 jumbotron-text-container">
          <h1
            data-aos-offset="200"
            data-aos-duration="500"
            data-aos="fade-right"
          >
            Let's Get You Online!
          </h1>
          <p
            data-aos-offset="200"
            data-aos-duration="800"
            data-aos="fade-right"
          >
            WebLoop is a freelance web development team comprised of three
            creative individuals. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptas exercitationem perferendis aut eligendi.
          </p>
          <button
            data-aos-offset="200"
            data-aos-duration="1100"
            data-aos="fade-right"
            class="btn btn-primary btn-lg"
          >
            Sign Up
          </button>
        </div>
        <div class="col-lg-6 jumbotron-image-container">
          <img
            data-aos="zoom-in-up"
            data-aos-duration="1100"
            class="shadow"
            src="../../../public/images/jumbotron-image.jpg"
            alt=""
          />
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
.my-jumbotron {
  .jumbotron-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    h1 {
      font-family: $serif;
    }
    p {
      color: $lighterGrey;
    }
  }
  .jumbotron-image-container {
    img {
      width: 100%;
    }
  }
}
@media (max-width: $lg) {
  .jumbotron-text-container {
    align-items: center !important;
    margin-bottom: 25px;
    h1,
    p {
      text-align: center !important;
    }
  }
}
</style>
