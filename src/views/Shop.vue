<template>
  <main class="page">
    <div class="container">
      <div class="shop__head">
        <h2 class="page__title shop__title">СРЕДСТВА ДЛЯ УХОДА</h2>
        <button class="shop__button-filter btn-reset" @click="openFilterPanel">
          <svg class="">
            <use href="~@/assets/img/[icons].svg#filter"></use>
          </svg>
        </button>
      </div>
      <Breadcrumbs :list="breadcrumbsList" />
      <div class="shop-wrapper">
        <Sidebar />
        <Catalog :list="products" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'
import { setMeta } from '@/settings/meta';

//Components
import Breadcrumbs from '@/components/app/Breadcrumbs'
import Sidebar from '@/components/shop/Sidebar'
import Catalog from '@/components/shop/Catalog'

// Resources
import { products } from '@/resources/products'

export default {
  name: "Shop",
  metaInfo: setMeta('Магазин'),
  components: {
    Catalog,
    Sidebar,
    Breadcrumbs
  },
  data() {
    return {
      breadcrumbsList: [
        {
          url: '/shop',
          title: 'Главная'
        },
        {
          title: 'Прайс-лист'
        }
      ],
      products
    }
  },
  methods: {
    ...mapMutations(['toggleOverlay', 'toggleFilterPanelMobile']),
    openFilterPanel() {
      document.body.classList.add('lock')
      this.toggleOverlay()
      this.toggleFilterPanelMobile()
    }
  }
}
</script>
