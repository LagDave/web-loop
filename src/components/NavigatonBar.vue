<template>
  <div>
    <b-navbar
      fixed="top"
      class="main-navigation-bar shadow-sm"
      toggleable="lg"
      type="light"
    >
      <div class="container">
        <b-navbar-brand to="/home"
          ><h3 class="logo mb-0">WebLoop</h3></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <button class="btn btn-sm btn-primary">Sign in</button>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@import "../../public/scss/base.scss";
.main-navigation-bar {
  background: white !important;
}
.logo {
  font-family: $serif;
  color: $primaryColor;
}
.active {
  font-weight: bold !important;
  color: $primaryColor !important;
}
.nav-item {
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-link:hover {
  color: $primaryColor !important;
}
@media (max-width: $lg) {
  .nav-item {
    align-items: start;
    justify-content: start;
  }
}
</style>
