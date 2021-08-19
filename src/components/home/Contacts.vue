<template>
  <section class="main-section">
    <Title :type="3" class="title">Контактная информация</Title>
    <ContactsItem
      v-for="(item, index) in list"
      :key="index"
      :title="item.title"
      :address="item.address"
      :phone="item.phone"
      :style="{ marginBottom: '20px' }"
    />
    <div class="main-section__buttons contact-info__buttons">
      <Button @click="$emit('openMap')">
        Как проехать
      </Button>
      <Button>
        Обратная связь
      </Button>
    </div>
  </section>
</template>

<script>
// Components
import Button from '@/components/app/Button'
import ContactsItem from '@/components/home/ContactsItem'
import Title from '@/components/app/Title'

export default {
  name: 'Contacts',
  components: { Title, ContactsItem, Button },
  props: {
    list: Array
  }
}
</script>
