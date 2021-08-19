<template>
  <aside class="sidebar">
    <button class="sidebar__cancel btn-reset"></button>
    <div class="sidebar__title">ПРОИЗВОДИТЕЛИ:</div>
    <div class="sidebar__group">
      <label class="sidebar__label">
        <input class="sidebar__checkbox-real" type="checkbox" checked>
        <span class="sidebar__checkbox-fake"></span>
        <span class="sidebar__checkbox-text">Baxter of California</span>
      </label>

      <label class="sidebar__label">
        <input class="sidebar__checkbox-real" type="checkbox">
        <span class="sidebar__checkbox-fake"></span>
        <span class="sidebar__checkbox-text">Mr Natty</span>
      </label>

      <label class="sidebar__label">
        <input class="sidebar__checkbox-real" type="checkbox" checked>
        <span class="sidebar__checkbox-fake"></span>
        <span class="sidebar__checkbox-text">Suavecito</span>
      </label>

      <label class="sidebar__label">
        <input class="sidebar__checkbox-real" type="checkbox">
        <span class="sidebar__checkbox-fake"></span>
        <span class="sidebar__checkbox-text">Malin+Goetz</span>
      </label>

      <label class="sidebar__label">
        <input class="sidebar__checkbox-real" type="checkbox" checked>
        <span class="sidebar__checkbox-fake"></span>
        <span class="sidebar__checkbox-text">Murray’s</span>
      </label>

      <label class="sidebar__label disabled">
        <input class="sidebar__checkbox-real" type="checkbox">
        <span class="sidebar__checkbox-fake"></span>
        <span class="sidebar__checkbox-text">American Crew</span>
      </label>
    </div>
    <div class="sidebar__group">
      <label class="sidebar__label">
        <input class="sidebar__radio-real" name="radio" type="radio">
        <span class="sidebar__radio-fake"></span>
        <span class="sidebar__radio-text">Бритвенные принадлежности</span>
      </label>

      <label class="sidebar__label">
        <input class="sidebar__radio-real" name="radio" type="radio" checked>
        <span class="sidebar__radio-fake"></span>
        <span class="sidebar__radio-text">Средства для ухода</span>
      </label>

      <label class="sidebar__label">
        <input class="sidebar__radio-real" name="radio" type="radio">
        <span class="sidebar__radio-fake"></span>
        <span class="sidebar__radio-text">Аксессуары</span>
      </label>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
