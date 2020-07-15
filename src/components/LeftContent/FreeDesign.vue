<template>
  <div>
    <div class="free-design">
      <img class="free-design-image" src="../../assets/images/free-design.jpg" />
      <form class="primary-form free-design-form">
        <label class="primary-form-field free-design-field d-flex ai-c" tabindex="0">
          <svg class="primary-form-icon">
            <use xlink:href="../sprite-manual.svg#profile-icon" />
          </svg>
          <input
            class="primary-form-input free-design-input"
            type="text"
            placeholder="Ваше имя"
            required
          />
        </label>
        <label class="primary-form-field free-design-field d-flex ai-c">
          <svg class="primary-form-icon">
            <use xlink:href="../sprite-manual.svg#form-phone-icon" />
          </svg>
          <input
            class="primary-form-input free-design-input"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            required
          />
        </label>
        <label class="primary-form-field free-design-field d-flex ai-c">
          <svg class="primary-form-icon">
            <use xlink:href="../sprite-manual.svg#email-icon" />
          </svg>
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
export default {};
</script>