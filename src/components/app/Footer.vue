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
                  <use href="~@/assets/img/[icons].svg#vk"></use>
                </svg>
              </a>
            </li>
            <li class="footer__social-item">
              <a href="#">
                <svg class="facebook">
                  <use href="~@/assets/img/[icons].svg#facebook"></use>
                </svg>
              </a>
            </li>
            <li class="footer__social-item">
              <a href="#">
                <svg class="instagram">
                  <use href="~@/assets/img/[icons].svg#instagram"></use>
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
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  color: #fff;
  background-image: url('~@/assets/img/footer-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 55px 0 45px;

  &__inner {
    display: flex;
    justify-content: space-between;
  }

  &__social {
    text-align: center;

    &-title {
      margin-bottom: 20px;
    }

    &-list {
      display: flex;
    }

    &-item {
      width: 43px;
      height: 43px;
      background-color: #000;
      transition: background-color .2s;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;

        &:hover,
        &:focus {
          background-color: #fff;

          svg {
            fill: #000;
          }
        }
      }

      &:not(:last-child) {
        margin-right: 5px;
      }

      svg {
        fill: #fff;
        transition: fill .2s;
      }

      .vk {
        width: 28px;
        height: 16px;
      }

      .facebook {
        width: 11px;
        height: 23px;
      }

      .instagram {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
