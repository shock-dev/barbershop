<template>
  <ul>
    <li>{{ title }}</li>
    <li>АДРЕС: {{ address }}</li>
    <li>ТЕЛЕФОН: {{ phone }}</li>
  </ul>
</template>

<script>
export default {
  name: 'ContactsItem',
  props: {
    title: String,
    address: String,
    phone: String
  }
}
</script>
