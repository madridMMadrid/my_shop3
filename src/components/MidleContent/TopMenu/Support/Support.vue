<template>
  <div class="l-container support">
    <h1 class="commonpage">Клиентская поддержка</h1>
    <div class="text_klient_support">
      <p>В данном разделе Вы можете сообщить нам любую информацию, касающуюся качества обслуживания нашей компанией. Руководство компании рассмотрит Ваши замечания и предложения в самые кратчайшие сроки, и окажет необходимую помощь.</p>
      <p>Пожалуйста, укажите Ваши контактные данные, чтобы мы могли связаться с Вами по Вашему обращению.</p>
      <br />
      <p>
        <i>Поля, отмеченные ( * ), обязательны к заполнению</i>
      </p>
    </div>
    <div class="form_bloc_klient_support" id="box_klient_support_id">
      <form action>
        <div>
          <p class="box_data">Ваше имя *</p>
          <input
            class="no_style main_input_klient_support"
            type="text"
            name="name"
            placeholder="Введите ваше имя"
            required
          />
          <p class="box_data">Телефон *</p>
          <masked-input
            class="primary-form-input free-design-input no_style main_input_klient_support"
            id="input"
            mask="\+\7 (111) 1111-11"
            placeholder="Phone"
            required
          />
          <p class="box_data">Email *</p>
          <input
            class="no_style main_input_klient_support"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <p class="box_data">Тема *</p>
          <multiselect
            v-model="value"
            :options="options"
            placeholder="Отзыв о работе персонала"
            :show-labels="false"
            :clearOnSelect="true"
            @open="clearValue"
          />
        </div>

        <div class="massage_klient_support_block">
          <p class="box_data">Сообщение</p>
          <textarea
            class="no_style massage_klient_support"
            type="text"
            name="message"
            placeholder="Введите ваше сообщение"
            required
          ></textarea>
          <input type="checkbox" id="js_checkbox_support" class="no_style" v-model="form.apruved" />Я согласен на
          <a href="/soglasie-na-obrabotku-personalnyh-dannyh">Обработку своих данных</a>
          <button
            class="buttom_klient_support_1"
            id="js_confirm_politic"
            :disabled="!form.apruved"
          >Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
import MaskedInput from "vue-masked-input";

export default {
  components: {
    Multiselect,
    MaskedInput,
  },
  data() {
    return {
      form: {
        apruved: false,
      },
      value: "Отзыв о работе персонала",
      options: [
        "Отзыв о работе персонала",
        "Отзыв о качестве сервиса",
        "Отзыв о качестве товара",
        "Благодарность",
        "Претензия",
        "Другое",
      ],
    };
  },
  methods: {
    clearValue() {
      this.value = "";
    },
  },
};
</script> 
<style lang="scss">
.support {
  .primary-form-input {
    padding: 7px 10px;
  }
  .text_klient_support {
    font-size: 15px;
  }
  .message_error {
    color: red;
  }
  @media (max-width: 600px) {
    #box_klient_support_id form {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 15px;
    }
    #box_klient_support_id input,
    #box_klient_support_id select {
      width: 100%;
      margin-left: 0 !important;
    }
  }

  #box_klient_support_id.form_bloc_klient_support {
    border: 1px solid #b8ad87;
    min-height: 435px;
    width: auto;
    position: relative;
  }

  #box_klient_support_id form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  #box_klient_support_id form > div {
    width: 50%;
    margin-bottom: 2rem;
  }

  #box_klient_support_id form > div:first-child {
    width: 30%;
    margin-right: 10%;
  }

  @media (max-width: 600px) {
    #box_klient_support_id form > div {
      width: 100%;
    }
  }

  #box_klient_support_id form {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
  }

  #box_klient_support_id input,
  #box_klient_support_id select {
    width: 100%;
    margin-left: 0 !important;
    padding: 7px 10px;
  }

  #box_klient_support_id input[type="checkbox"] {
    width: auto !important;
    -webkit-appearance: checkbox;
    margin: 0 7px 0px 0;
    position: relative;
    bottom: -2px;
  }

  #box_klient_support_id .buttom_klient_support_1 {
    border-color: #00a75f;
    background-color: #00a75f;
    border: solid #00a75f;
    width: 228px;
    height: 48px;
    font-size: 16px;
    margin-top: 30px;
    color: #ffffff;
  }

  #box_klient_support_id .buttom_klient_support_1:disabled {
    border-color: #d6d3d0 !important;
    background-color: #d6d3d0 !important;
    border: solid #d6d3d0 !important;
    width: 228px;
    height: 48px;
    font-size: 16px;
    margin-top: 30px;
    color: #22221e !important;
  }

  #box_klient_support_id .massage_klient_support {
    border: 1px solid #b8ad87;
    height: 200px;
    width: 100%;
  }

  #box_klient_support_id .main_input_klient_support {
    border: 1px solid #b8ad87;
    height: 48px;
    // width: 25%;
  }

  #box_klient_support_id .Input_checkbox_klient_support {
    border: solid;
  }
  .massage_klient_support_block {
    font-size: 14px;
    & a {
      color: #ff9e23;
      text-decoration: revert;
      &:hover {
        color: #ffbf24;
      }
    }
  }

  .box_data {
    padding-left: 3%;
    padding-top: 15px;
    font-size: 18px;
    margin: 0;
  }
  .multiselect {
    &__tags {
      border-radius: 0;
      border: 1px solid #b8ad87;
      padding: 7px 10px;
      min-height: 48px;
      align-items: center;
      display: flex;
    }
    &__placeholder {
      margin: 0;
    }
    &__input {
      width: 100%;
      padding: 0 !important;
      margin: 0 !important;
    }
    &__single {
      margin: 0 !important;
    }
    &__option {
      &--selected {
        &.multiselect__option--highlight {
          background: #a3abb1;
        }
      }
    }
    .multiselect {
      &__option {
        &--highlight {
          background: #a3abb1;
        }
      }
    }
  }
}
</style>