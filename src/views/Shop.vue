<template>
  <main class="page">
    <div class="container">
      <h2 class="page__title">СРЕДСТВА ДЛЯ УХОДА</h2>
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
