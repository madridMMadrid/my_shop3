<template>
  <div>
    <div class="free-design">
      <img class="free-design-image" src="../../assets/images/free-design.jpg" />
      <form class="primary-form free-design-form">
        <label class="primary-form-field free-design-field d-flex ai-c" tabindex="0">
          <input
            class="primary-form-input free-design-input"
            type="text"
            placeholder="Ваше имя"
            required
          />
        </label>
        <label class="primary-form-field free-design-field d-flex ai-c">
          <masked-input
            class="primary-form-input free-design-input"
            id="input"
            mask="\+\7 (111) 1111-11"
            placeholder="Phone"
            required
          />
        </label>
        <label class="primary-form-field free-design-field d-flex ai-c">
          <input
            class="primary-form-input free-design-input"
            type="email"
            placeholder="Ваш e-mail"
            required
          />
        </label>
        <button
          class="button-global button_large button-orange free-design-button"
          type="submit"
        >Получить дизайн проект</button>
      </form>
    </div>
  </div>
</template>
<script>
import MaskedInput from "vue-masked-input";
export default {
  components: {
    MaskedInput
  }
};
</script>