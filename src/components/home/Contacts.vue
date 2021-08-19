<template>
  <section class="main-section">
    <h3 class="main-section__title">Контактная информация</h3>
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

export default {
  name: 'Contacts',
  components: { ContactsItem, Button },
  props: {
    list: Array
  }
}
</script>
