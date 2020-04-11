<template>
  <div class="footer pt-5 pb-2">
    <div class="container">
      <div class="footer-header">
        <h1 class="text-center">Let's connect our lines</h1>
        <hr />
        <h4 class="text-center">we are here to support you</h4>
      </div>
      <div class="footer-buttons">
        <div class="row justify-content-center">
          <div class="col-md-3">
            <button class="btn btn-lg btn-light">consult here</button>
            <p class="mt-2">903-192-000</p>
          </div>
          <div class="col-md-3">
            <button class="btn btn-lg btn-primary">mail here</button>
            <p class="mt-2">laggy80@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="footer-soc-med-icons">
        <h2 class="text-center">
          <a class="mr-4" href="">
            <i class="fab fa-facebook"></i>
          </a>
          <a class="mr-4" href="">
            <i class="fab fa-twitter"></i>
          </a>
          <a class="mr-4" href="">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a class="mr-4" href="">
            <i class="fab fa-pinterest"></i>
          </a>
        </h2>
        <p class="text-center">4560 Perine Street, Reston, VA 22090</p>
      </div>
      <p class="text-center copyright">
        &copy; Rustine Dave. All Rights Reserved. 2020
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../public/scss/base.scss";
.footer {
  background: linear-gradient(#3d63d4e0, #3d63d4e0),
    url("../../public/images/footerbg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  p {
    color: white !important;
  }
  .copyright {
    font-size: 0.7em;
  }
  .footer-header {
    margin-bottom: 100px;
    h1 {
      color: white;
      font-family: $serif;
    }
    hr {
      max-width: 300px;
    }
    h4 {
      color: white;
    }
  }
  .footer-buttons {
    margin-bottom: 100px;
    .row {
      .col-md-3 {
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
          color: white;
          font-weight: bolder;
        }
      }
    }
  }
  .footer-soc-med-icons {
    margin-bottom: 50px;
    h2 {
      a {
        color: white !important;
      }
    }
  }
}
</style>
