<template>
  <div class="l-container">
    <h1 class="commonpage">Контакты</h1>
    <div class="wrapp_contact">
      <div class="contacts">
        <div class="contacts_block">
          <p>Вы всегда сможете связаться с нами в удобное для вас время!</p>
          <div class="col">
            <div class="gr_ttl">По телефону</div>
            <div class="gr_ttl"></div>
            <div class="gr_ttl call_phone_msk">8 (800) 500-78-75</div>
            <div class="gr_ttl"></div>
          </div>
          <div class="col">
            <div class="gr_ttl"></div>
            <div class="gr_ttl">По почте</div>
            <div class="mail green_mail">
              <a href="mailto:some-site@mail.ru"></a>
              <a href="mailto:info+626147@some-site.ru" target="_blank">info+626147@some-site.ru</a>
            </div>
          </div>
        </div>
        <div class="contacts_block">
          <div class="gr_ttl">Прием заявок</div>
          <p>
            <span class="worktime green_worktime">Круглосуточно, без выходных</span>
          </p>
          <div class="self_address">
            <div class="gr_ttl">Центральный офис в г. Москва</div>
            <p>115088, г. Москва, 1-я улица Машиностроения, 10</p>
            <p>
              <span class="worktime green_worktime">Работаем пн-пт с 9:00 до 20:00</span>
            </p>
            <div class="gr_ttl"></div>
          </div>
          <div class="gr_ttl">Склад самовывоза в г. Омск</div>
          <p>г. Омск, ул. 5-я Кордная, 1 (Бывшая ПХБО Восток, в настоящее время Акцизный Коньячный Склад). Въезд с улицы Сенной тупик.</p>
          <p>
            <span class="worktime green_worktime">Работаем пн-пт с 9:00 до 18:00</span>
          </p>
          <div class="gr_ttl"></div>
          <div class="gr_ttl"></div>
          <div></div>
          <div class="gr_ttl">
            Реквизиты&nbsp;
            <strong>ООО "ПРАЙМ ВУД КОМПАНИ"</strong>
          </div>
          <p>
            <strong>ИНН:</strong> 7725411890
          </p>
          <p>
            <strong>КПП</strong>: 772501001
          </p>
          <p>
            <strong>ОГРН:</strong> 5177746374460
          </p>
          <p>
            <strong>ОКПО:</strong> 22548388
          </p>
          <p></p>
          <p>
            <strong>Расчетный счет:</strong> 40702810102370003067
          </p>
          <p>
            <strong>Банк:</strong> АО "АЛЬФА-БАНК"
          </p>
          <p>
            <strong>БИК:</strong> 044525593
          </p>
          <p>
            <strong>Корр. счет:</strong> 30101810200000000593
          </p>
          <p></p>
          <p>
            <strong>Юридический адрес:</strong> 115280, г. Москва,ул. Ленинская Слобода, дом № 26, строение 2,
            квартира Этаж/Пом 3/4
          </p>
          <p></p>
          <p>
            <strong>Генеральный директор:</strong> Кузьменко Роман Владимирович
          </p>
        </div>
      </div>
      <div id="yandex-map"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
      coordinates: [],
    };
  },
  mounted() {
    // Установить скрипты для использования яндекс карты
    let scriptYandexMap = document.createElement("script");
    scriptYandexMap.setAttribute(
      "src",
      "https://api-maps.yandex.ru/2.1/?lang=ru_RU"
    );
    document.head.appendChild(scriptYandexMap);

    // Инициализировать яндекс карту
    scriptYandexMap.addEventListener("load", this.initializeYandexMap);
  },
  methods: {
    getCoordData() {
      return new Promise((r) =>
        setTimeout(() => {
          this.coordinates = [
            [52.44, 69.73],
            [49.81, 62.12],
          ];
          r();
        }, 1000)
      );
    },
    initializeYandexMap() {
      ymaps.ready(() => {
        this.map = new ymaps.Map("yandex-map", {
          center: [48.352571497155054, 64.04235076905002],
          zoom: 5,
          controls: ["fullscreenControl"],
          searchControlProvider: "yandex#search",
        });

        this.getCoordData().then(() => this.setMarkers());
      });
    },
    setMarkers() {
      for (let i = 0; i < this.coordinates.length; i++) {
        let placemark = new ymaps.Placemark(this.coordinates[i]);
        this.map.geoObjects.add(placemark);
      }
    },
  },
};
</script>
<style lang="scss">
.wrapp_contact {
  display: flex;
  & > div {
  }
}
#yandex-map {
  width: 650px;
  height: 400px;
  padding: 3px;
  border: 1px solid rgb(148, 144, 144);
}
.contacts {
  .contacts_block {
    border-bottom: 1px solid #ebe8e5;
    font-size: 14px;
    margin-bottom: 15px;
    overflow: hidden;
    padding-bottom: 10px;
  }

  .contacts_block .gr_ttl {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 15px;
  }

  .contacts_block .col {
    float: left;
    width: 50%;
  }
  .mail,
  .phone,
  .worktime {
    display: inline-block;
    line-height: 20px;
    padding-left: 25px;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
  }
  .location:before,
  .mail:before,
  .phone:before,
  .worktime:before {
    background-image: url(~@/assets/images/icons.png);
    background-repeat: no-repeat;
    content: "";
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
  }
  .green_mail:before {
    background-position: -40px -40px;
  }
  .green_worktime:before {
    background-position: -20px -40px;
  }
}
</style>