<template>
  <div>
    <div class="head">
      <Title class="title">Средства для ухода</Title>
      <button class="filter" @click="openSidebar">
        <svg>
          <use href="~@/assets/img/[icons].svg#filter"></use>
        </svg>
      </button>
    </div>
    <Breadcrumbs :list="breadcrumbsList" />
    <div class="wrapper">
      <Overlay
        :isOpen="isOpenSidebar"
        @click="closeSidebar"
      />
      <Sidebar
        :manufacturers="manufacturers"
        :types="types"
        :isOpen="isOpenSidebar"
        @close="closeSidebar"
      />
      <Catalog :list="products" />
    </div>
  </div>
</template>

<script>
import { setMeta } from '@/settings/meta';
import { allowScroll, stopScroll } from '@/utils/scroll'

//Components
import Title from '@/components/app/Title'
import Breadcrumbs from '@/components/app/Breadcrumbs'
import Sidebar from '@/components/shop/Sidebar'
import Catalog from '@/components/shop/Catalog'
import Overlay from '@/components/app/Overlay'

// Resources
import { manufacturers } from '@/resources/filters/manufacturers'
import { types } from '@/resources/filters/types'
import { products } from '@/resources/products'

export default {
  name: "Shop",
  metaInfo: setMeta('Магазин'),
  components: {
    Overlay,
    Title,
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
          title: 'Каталог'
        }
      ],
      isOpenSidebar: false,
      manufacturers,
      types,
      products
    }
  },
  methods: {
    openSidebar() {
      this.isOpenSidebar = true
      stopScroll()
    },
    closeSidebar() {
      this.isOpenSidebar = false
      allowScroll()
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.wrapper {
  display: flex;
}

.title {
  padding-top: 0;
}

.filter {
  width: 40px;
  height: 40px;
  outline: none;
  display: none;

  svg {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 750px) {
  .filter {
    display: block;
  }
}

@media (max-width: 380px) {
  .title {
    font-size: 26px;
    line-height: 32px;
  }
}
</style>
