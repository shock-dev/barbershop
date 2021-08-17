<template>
  <section class="main-section">
    <h3 class="main-section__title">Новости</h3>
    <NewsItem
      v-for="(item, index) in list"
      :key="index"
      :body="item.body"
      :date="item.date"
    />
    <Button>
      Все новости
    </Button>
  </section>
</template>

<script>
// Components
import Button from '@/components/app/Button'
import NewsItem from '@/components/home/NewsItem'

export default {
  name: 'News',
  components: { NewsItem, Button },
  props: {
    list: Array
  }
}
</script>
