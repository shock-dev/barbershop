<template>
  <section class="main-section">
    <Title :type="3" class="title">Новости</Title>
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
import Title from '@/components/app/Title'

export default {
  name: 'News',
  components: { Title, NewsItem, Button },
  props: {
    list: Array
  }
}
</script>
