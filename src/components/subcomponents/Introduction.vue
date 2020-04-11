<template>
  <div class="introduction">
    <div class="container">
      <div class="intro-text">
        <h2 data-aos-offset="100" data-aos="fade-right" class="mb-4">
          We take challenge to serve you best
        </h2>
        <p data-aos-offset="200" data-aos="fade-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem
          ipsa, dolores soluta eaque fugit laudantium! Laborum doloremque,
          facilis similique nam iusto cum? Itaque nemo perferendis modi dolores,
          fugit esse!
        </p>
      </div>
      <div class="intro-cards my-5">
        <div class="row">
          <div class="col-md-3 mb-4">
            <div
              data-aos-offset="300"
              data-aos="fade-right"
              class="card card-body shadow-sm"
            >
              <img src="../../../public/images/evaluate.png" alt="" />
              <p class="headline my-3">Accurate Applications</p>
              <p class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                saepe tempore ex ratione. Sed omnis doloribus aut necessitatibus
                aliquam quaera
              </p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div
              data-aos-offset="300"
              data-aos="fade-up"
              class="card card-body shadow-sm"
            >
              <img src="../../../public/images/design.png" alt="" />
              <p class="headline my-3">Strategic Actions</p>
              <p class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                saepe tempore ex ratione. Sed omnis doloribus aut necessitatibus
                aliquam quaera
              </p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div
              data-aos-offset="300"
              data-aos="fade-up"
              class="card card-body shadow-sm"
            >
              <img src="../../../public/images/lab.png" alt="" />
              <p class="headline my-3">Resource Utilization</p>
              <p class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                saepe tempore ex ratione. Sed omnis doloribus aut necessitatibus
                aliquam quaera
              </p>
            </div>
          </div>
          <div class="col-md-3 mb-4">
            <div
              data-aos-offset="300"
              data-aos="fade-left"
              class="card card-body shadow-sm"
            >
              <img src="../../../public/images/report.png" alt="" />
              <p class="headline my-3">Best Optimized</p>
              <p class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                saepe tempore ex ratione. Sed omnis doloribus aut necessitatibus
                aliquam quaera
              </p>
            </div>
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
.introduction {
  margin-top: 100px !important;

  .intro-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-family: $serif;
      color: $grey !important;
      text-align: center;
    }
    p {
      text-align: center;
      max-width: 600px;
      color: $lighterGrey;
    }
  }
  .intro-cards {
    .card {
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $lighterGreyBg !important;
      img {
        height: 80px;
        width: 80px;
      }
      p {
        text-align: center;
      }
      p.subtitle {
        color: $lighterGrey;
      }
    }
  }
}
</style>
