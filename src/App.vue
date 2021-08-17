<template>
  <div id="app" class="app">
    <Header/>
    <main :class="$route.path === '/' ? 'main' : 'page'">
      <div class="container">
        <router-view/>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
// Components
import Header from '@/components/app/Header'
import Footer from '@/components/app/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
.main {
  background-image: url('~@/assets/img/main-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

.page {
  background-image: url('~@/assets/img/page-bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &__title {
    font-size: 30px;
    line-height: 42px;
    padding-top: 40px;
  }

  .container {
    max-width: 970px;
  }
}
</style>
