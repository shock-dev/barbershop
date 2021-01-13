<template>
  <main class="page">
    <div class="container">
      <div class="shop__head">
        <h2 class="page__title shop__title">СРЕДСТВА ДЛЯ УХОДА</h2>
        <button class="shop__button-filter btn-reset">
          <svg class="">
              <use href="~@/assets/img/sprite.svg#filter"></use>
          </svg>
        </button>
      </div>
      <bs-breadcrumbs/>
      <div class="shop-wrapper">
        <bs-sidebar/>
        <bs-catalog/>
      </div>
    </div>
  </main>
</template>

<script>
import BsBreadcrumbs from "@/components/app/bsBreadcrumbs";
import BsSidebar from "@/components/shop/bsSidebar";
import BsCatalog from "@/components/shop/bsCatalog";

export default {
  name: "Shop",
  components: {
    BsCatalog,
    BsSidebar,
    BsBreadcrumbs
  }
}
</script>
