<template>
  <div class="testimonials my-5">
    <div class="container">
      <h2 data-aos="zoom-in" data-aos-offset="300" class="text-center mb-5">
        What our clients say
      </h2>

      <div class="row testimonials-container">
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          class="testimonial col-md-4"
        >
          <div class="profile">
            <div class="picture">
              <img src="../../../public/images/jane-doe.jpg" alt="" />
            </div>
            <div class="name">
              <p>Jane Doe</p>
              <p class="order">Regular Customer</p>
            </div>
          </div>

          <hr />
          <div class="text">
            <p>
              <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolorem labore cum, odit ipsam vel
              sequi? Placeat eaque inventore, quaerat odit rerum iure excepturi
              a, at hic neque ad alias unde. <i class="fas fa-quote-right"></i>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          class="testimonial col-md-4"
        >
          <div class="profile">
            <div class="picture">
              <img src="../../../public/images/jacob-olsen.jpg" alt="" />
            </div>
            <div class="name">
              <p>Jacob Olsen</p>
              <p class="order">Pro User</p>
            </div>
          </div>
          <hr />
          <div class="text">
            <p>
              <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolorem labore cum, odit ipsam vel
              sequi? Placeat eaque inventore, quaerat odit rerum iure excepturi
              a, at hic neque ad alias unde. <i class="fas fa-quote-right"></i>
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-offset="200"
          class="testimonial col-md-4"
        >
          <div class="profile">
            <div class="picture">
              <img src="../../../public/images/elisa-beth.jpg" alt="" />
            </div>
            <div class="name">
              <p>Elisa Beth</p>
              <p class="order">Regular Customer</p>
            </div>
          </div>
          <hr />
          <div class="text">
            <p>
              <i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolorem labore cum, odit ipsam vel
              sequi? Placeat eaque inventore, quaerat odit rerum iure excepturi
              a, at hic neque ad alias unde. <i class="fas fa-quote-right"></i>
            </p>
          </div>
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
.testimonials {
  h2 {
    font-family: $serif !important;
    color: $grey;
  }
  .testimonials-container {
    margin-top: 80px;
    .testimonial {
      .profile {
        display: flex;
        align-items: center;
        .picture {
          img {
            height: 130px;
            width: 130px;
            border-radius: 1000px;
            border: 2px solid $primaryColor;
          }
        }
        .name {
          margin-left: 10px;
          p {
            margin: 0;
            font-weight: bolder;
            font-size: 1em;
          }
          p.order {
            color: $primaryColor;
          }
        }
      }
      .text {
        p {
          color: $lighterGrey;
        }
      }
    }
  }
}
@media (max-width: $md) {
  .testimonials-container {
    .testimonial {
      margin-bottom: 50px;
      .profile {
        flex-direction: column;
        text-align: center;
      }
      .text {
        p {
          text-align: center;
        }
      }
    }
  }
}
</style>
