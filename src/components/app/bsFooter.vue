<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__about">
          <p>БАРБЕРШОП «БОРОДИНСКИЙ»</p>
          <p>АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, УЛ. Б. КОНЮШЕННАЯ, Д. 19/8</p>
          <p>КАК НАС НАЙТИ?</p>
          <p>ТЕЛЕФОН: +7 (495) 666-02-66</p>
        </div>
        <div class="footer__social">
          <div class="footer__social-title">ДАВАЙТЕ ДРУЖИТЬ!</div>
          <ul class="footer__social-list">
            <li class="footer__social-item">
              <a href="#">
                <svg class="vk">
                  <use href="~@/assets/img/sprite.svg#vk"></use>
                </svg>
              </a>
            </li>
            <li class="footer__social-item">
              <a href="#">
                <svg class="facebook">
                  <use href="~@/assets/img/sprite.svg#facebook"></use>
                </svg>
              </a>
            </li>
            <li class="footer__social-item">
              <a href="#">
                <svg class="instagram">
                  <use href="~@/assets/img/sprite.svg#instagram"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "bsFooter"
}
</script>
