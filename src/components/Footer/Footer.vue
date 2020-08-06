<template>
  <div>
    <footer class="footer">
      <div class="footer-container d-flex jc-sb ai-fs">
        <div class="footer-item">
          <div class="footer-title">Свяжитесь с нами</div>
          <div class="footer-group d-flex ai-c">
            <a class="footer-phone" href="tel:+74950000">+7 (495) 120-00-00</a>
          </div>
          <div class="footer-group d-flex ai-c">
            <div class="footer-text">Круглосуточно без выходных</div>
          </div>
          <a
            class="footer-group location d-flex ai-fs"
            href="https://yandex.ru/maps/-/CGGPJBN9"
            target="_blank"
          >
            <div class="footer-text">
              г. Москва
              <br />ул. Какой то адрес
            </div>
          </a>
          <div class="footer-group">
            <div class="footer-text_black">
              Свяжитесь с нами любым
              <br />удобным способом!
            </div>
          </div>
          <div class="footer-group d-flex">
            <button
              class="button-global button_small button-primary-green call-button"
              tabindex="0"
            >Заказать звонок</button>
            <button
              class="button-global button_small button-optional-green email-button"
              tabindex="0"
            >Написать нам</button>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-title">Каталог</div>
          <div class="footer-group dropdown-button" role="button">
            <div class="dropdown-button-title d-flex ai-c">
              <div class="footer-text">Мебель для персонала</div>
            </div>
            <div class="dropdown-list">
              <a class="dropdown-list-item link-orange" href tabindex="0">Все</a>
              <a class="dropdown-list-item link-orange" href tabindex="0">Эконом</a>
            </div>
          </div>
          <div class="footer-group dropdown-button" role="button" v-for="(value, i) in 6" :key="i">
            <div class="dropdown-button-title d-flex ai-c">
              <div class="footer-text">Мебель для персонала</div>
            </div>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-title">Информация</div>
          <div class="footer-group" v-for="(value, i) in 6" :key="i">
            <a class="footer-text link" href tabindex="0">О компании</a>
          </div>
          <div class="footer-title">Услуги</div>
          <div class="footer-group">
            <a class="footer-text link" href tabindex="0">Дизайн-проект</a>
          </div>
          <div class="footer-group">
            <a class="footer-text link" href tabindex="0">Доставка</a>
          </div>
          <div class="footer-group">
            <a class="footer-text link" href tabindex="0">Сборка</a>
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-group">
            <div class="footer-text">© 2013–2019 г. Москва.</div>
          </div>
          <div class="footer-group">
            <div
              class="footer-text"
            >Все права защищены, нарушения авторских прав будет преследоваться по закону</div>
          </div>
          <div class="footer-group">
            <div class="footer-text">Мы в соцсетях:</div>
          </div>
          <div class="foter-group">
            <!-- соцсети -->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>