<template>
  <footer class="footer">
    <div class="container">
      <div class="inner">
        <div class="about">
          <p>БАРБЕРШОП «БОРОДИНСКИЙ»</p>
          <p>АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, УЛ. Б. КОНЮШЕННАЯ, Д. 19/8</p>
          <p>КАК НАС НАЙТИ?</p>
          <p>ТЕЛЕФОН: +7 (495) 666-02-66</p>
        </div>
        <div class="social">
          <div class="social-title">ДАВАЙТЕ ДРУЖИТЬ!</div>
          <ul class="social-list">
            <li class="social-item">
              <a href="#">
                <svg class="vk">
                  <use href="~@/assets/img/[icons].svg#vk" />
                </svg>
              </a>
            </li>
            <li class="social-item">
              <a href="#">
                <svg class="facebook">
                  <use href="~@/assets/img/[icons].svg#facebook" />
                </svg>
              </a>
            </li>
            <li class="social-item">
              <a href="#">
                <svg class="instagram">
                  <use href="~@/assets/img/[icons].svg#instagram" />
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
}

.inner {
  display: flex;
  justify-content: space-between;
}

.social {
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

@media (max-width: 540px) {
  .inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about {
    margin-bottom: 30px;
  }
}
</style>
