<template>
  <div>
    <Title style="margin-top: 40px">Набор для путешествий «Baxter of California»</Title>
    <Breadcrumbs :list="breadcrumbsList" />
    <div class="wrapper">
      <div class="images">
        <div class="images-big">
          <img src="~@/assets/img/product-main-img.png" alt="">
        </div>
        <div class="images-min">
          <div class="images-min__item">
            <img src="~@/assets/img/product-1.jpg" alt="">
          </div>
          <div class="images-min__item">
            <img src="~@/assets/img/product-2.jpg" alt="">
          </div>
          <div class="images-min__item">
            <img src="~@/assets/img/product-3.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="info">
        <div class="info-head">
          <div class="info-head__available">Есть в наличии</div>
          <div class="info-head__art">Артикул: dexter-ae</div>
        </div>
        <p class="info-text">
          Travel Kit – необходимый аксессуар во время любого
          путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки
          или отдыха: средство для умывания, увлажняющий крем, крем
          для бритья, крем после бритья, шампунь. Набор также может
          стать отличным подарком.
        </p>
        <PriceLabel
          class="buy"
          :price="2900"
        />
        <ProductTools
          title="В набор входят"
          :list="tools"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { setMeta } from '@/settings/meta'

// Components
import Breadcrumbs from '@/components/app/Breadcrumbs'
import ProductTools from '@/components/app/ProductTools'
import Title from '@/components/app/Title'
import PriceLabel from '@/components/app/PriceLabel'

export default {
  name: 'Product',
  metaInfo: setMeta('Набор для путешествий «Baxter of California»'),
  components: {
    PriceLabel,
    Title,
    ProductTools,
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
          title: 'НАБОР ДЛЯ ПУТЕШЕСТВИЙ «BAXTER OF CALIFORNIA»'
        }
      ],
      tools: [
        'Средство для умывания (50 мл)',
        'Увлажняющий крем (50 мл)',
        'Крем для бритья (50 мл)',
        'Крем после бритья, шампунь (50 мл)',
        'Удобная кожаная косметичка',
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.images {
  margin-right: 90px;
  min-width: 460px;
}

.wrapper {
  display: flex;
}

.images-big {
  box-shadow: 0 0 10px #888888;
  margin-bottom: 20px;
}

.images-min {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.images-min__item {
  box-shadow: 0 0 10px #888888;
}

.info {
  width: 100%;
}

.buy {
  margin-bottom: 35px;
}

.info-head {
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  margin-bottom: 40px;

  .art {
    color: #AEAEAE;
  }
}

.info-text {
  margin-bottom: 30px;
}

@media (max-width: 930px) {
  .images {
    margin-right: 50px;
  }
}

@media (max-width: 840px) {
  .images-min,
  .images-big {
    width: 90%;
  }

  .images {
    margin-right: 0;
  }

  .images-min__item {
    width: 30%;
  }
}

@media (max-width: 750px) {
  .images-min,
  .images-big {
    width: 80%;
  }

  .images {
    min-width: auto;
    max-width: 400px;
    width: 100%;
    margin-right: 30px;
  }

  .images-min,
  .images-big {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .wrapper {
    flex-direction: column;
  }

  .images {
    margin: 0 auto 0 auto;
    max-width: 450px;
  }

  .images-min {
    margin-bottom: 15px;
  }

  .buy {
    margin-bottom: 35px;
  }
}
</style>
