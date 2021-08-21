<template>
  <div>
    <Title style="margin-top: 40px">Прайс-лист</Title>
    <Breadcrumbs :list="breadcrumbsList" />

    <h2 class="title">Истинно мужская классика</h2>

    <div class="row">
      <div class="col">
        <ProductTools
          title="Мы используем только лучшие средства"
          :list="tools"
        />
      </div>
      <div class="col">
        <p class="col-title">ЦЕНЫ НА УСЛУГИ <br> НАШИХ МАСТЕРОВ:</p>
        <Table :list="result" />
      </div>
    </div>

    <div class="row about">
      <div class="col">
        <p class="col-title">Несколько слов о нас:</p>
        <p class="col-text">Наша парикмахерская занимается исключительно мужскими стрижками. Стрижка каждого клиента для нас - это уникальная и продуманная до мелочей работа. Мы не работаем на количество, мы делаем качество.</p>
      </div>
      <div class="col without-title">
        <p class="col-text">
          Наша мастерская расположена в центре города, поэтому
          сделать стильную стрижку можно в любое время, даже в
          обеденный перерыв. Здесь вы можете погрузиться в удобную
          для вас атмосферу, чувствовать себя комфортно и свободно!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { setMeta } from '@/settings/meta'
import { products } from '@/resources/products'

// Components
import Breadcrumbs from "@/components/app/Breadcrumbs"
import Title from '@/components/app/Title'
import ProductTools from '@/components/app/ProductTools'
import Table from '@/components/price/Table';

export default {
  name: 'Price',
  metaInfo: setMeta('Прайс-лист'),
  components: {
    Table,
    ProductTools,
    Title,
    Breadcrumbs
  },
  data() {
    return {
      breadcrumbsList: [
        { url: '/shop', title: 'Главная' },
        { title: 'Прайс-лист' }
      ],
      tools: ['Baxter of California', 'Mr Natty', 'Suavecito', 'Malin+Goetz'],
      result: [
        { title: 'Стрижка', price: 1500 },
        { title: 'Стрижка бороды', price: 500 },
        { title: 'Накрутка усов', price: 350 }
      ],
      products
    }
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 48px;
  line-height: 1;
  text-align: center;
  position: relative;
  margin-bottom: 65px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 160px;
    height: 2px;
    background-color: #000;
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }
}

.row {
  display: flex;

  &:last-child {
    padding-bottom: 70px;
  }
}

.col {
  width: 50%;

  &.without-title {
    padding-top: 60px;
  }
}

.col-title {
  max-width: 300px;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 30px;
}

.col-text {
  max-width: 400px;
}

.list {
  margin-bottom: 50px;
}

.item:not(:last-child) {
  margin-bottom: 15px;
}

@media (max-width: 950px) {
  .title:after, .title:before {
    width: 110px;
  }

  .list {
    margin-bottom: 30px;
  }
}

@media (max-width: 900px) {
  .col-text {
    padding-right: 30px;
  }
}

@media (max-width: 840px) {
  .title:after, .title:before {
    display: none;
  }
}

@media (max-width: 700px) {
  .row.about {
    flex-direction: column;
    align-items: center;

    .col {
      width: 100%;
    }

    .col-text {
      padding-right: 0;
      max-width: none;
    }
  }

  .col.without-title {
    padding-top: 20px;
  }

  .list {
    margin-bottom: 0;
  }

  .title {
    font-size: 38px;
    margin-bottom: 35px;
  }
}

@media (max-width: 580px) {
  .row {
    flex-direction: column;
  }

  .col {
    width: 100%;
  }

  .col.table {
    order: -1;
  }
}
</style>
