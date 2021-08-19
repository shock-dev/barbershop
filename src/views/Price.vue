<template>
  <div>
    <Title style="margin-top: 40px">Прайс-лист</Title>
    <Breadcrumbs :list="breadcrumbsList" />

    <h2 class="price-page__title">Истинно мужская классика</h2>

    <div class="price-page__row">
      <div class="price-page__col">
        <p class="price-page__col-title">МЫ ИСПОЛЬЗУЕМ ТОЛЬКО
          ЛУЧШИЕ СРЕДСТВА:</p>
        <ul class="product__info-list price-page__list">
          <li class="product__info-list__item price-page__item">Baxter of California</li>
          <li class="product__info-list__item price-page__item">Mr Natty</li>
          <li class="product__info-list__item price-page__item">Suavecito</li>
          <li class="product__info-list__item price-page__item">Malin+Goetz</li>
        </ul>

      </div>
      <div class="price-page__col table">
        <p class="price-page__col-title">ЦЕНЫ НА УСЛУГИ <br>
          НАШИХ МАСТЕРОВ:</p>
        <div class="price-page__table">
          <div class="price-page__table-row">
            <div class="price-page__table-col">СТРИЖКА</div>
            <div class="price-page__table-col">1500 ₽</div>
          </div>

          <div class="price-page__table-row">
            <div class="price-page__table-col">СТРИЖКА БОРОДЫ</div>
            <div class="price-page__table-col">500 ₽</div>
          </div>

          <div class="price-page__table-row">
            <div class="price-page__table-col">НАКРУТКА УСОВ</div>
            <div class="price-page__table-col">350 ₽</div>
          </div>
        </div>
      </div>
    </div>

    <div class="price-page__row about">
      <div class="price-page__col">
        <p class="price-page__col-title">НЕСКОЛЬКО СЛОВ О НАС:</p>
        <p class="price-page__col-text">Наша парикмахерская занимается исключительно мужскими стрижками. Стрижка каждого клиента для нас - это уникальная и продуманная до мелочей работа. Мы не работаем на количество, мы делаем качество.</p>
      </div>
      <div class="price-page__col without-title">
        <p class="price-page__col-text">Наша мастерская расположена в центре города, поэтому
          сделать стильную стрижку можно в любое время, даже в
          обеденный перерыв. Здесь вы можете погрузиться в удобную
          для вас атмосферу, чувствовать себя комфортно и свободно!</p>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/app/Breadcrumbs";
import { setMeta } from '@/settings/meta';
import { products } from '@/resources/products';
import Title from '@/components/app/Title';

export default {
  name: "Price",
  metaInfo: setMeta('Прайс-лист'),
  components: {
    Title,
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
}
</script>
