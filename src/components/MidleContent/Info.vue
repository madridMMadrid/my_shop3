<template>
  <div class="unique_modal">
    <div class="header-info d-flex jc-sb">
      <div class="header-info-element d-flex ai-c">
        <a class="header-info-phone" href="tel:+74951209759" tabindex="0">+7 (495) 120-00-00</a>
      </div>
      <div class="header-info-element d-flex ai-c">
        <div class="header-info-text">Круглосуточно, без выходных</div>
      </div>
      <div class="header-actions d-flex">
        <div class="header-info-element d-flex ai-c" role="button" tabindex="0">
          <div class="primary-icon header-actions-icon">
            <b-icon icon="heart" style="color: red;"></b-icon>
          </div>
          <div class="header-actions-count">0</div>
        </div>
        <div class="header-info-element d-flex ai-c" role="button" tabindex="0">
          <div class="header-actions-count">0</div>
        </div>
      </div>
      <div class="header-info-element d-flex ai-c">
        <div class="header-info-text">Ваш город:</div>
        <div class="header-info-country" role="button" tabindex="0">Москва</div>
      </div>
      <div class="header-actions d-flex">
        <button
          id="show-btn"
          @click="$bvModal.show(`${location}`)"
          class="button-global button_small button-primary-green call-button"
        >Заказать звонок</button>

        <b-modal :id="`${location}`" centered hide-footer>
          <template v-slot:modal-title>
            <div class="unique_modal_bv-modal-call">Заказать звонока</div>
            <div class="unique_modal_bv-modal-title">
              Укажите удобное время для звонка и номер телефона.
              Наш оператор обязательно вам перезвонит.
            </div>
          </template>
          <div class="d-block text-center">
            <b-row class="my-1">
              <b-col sm="4" class="left_content">
                <div
                  class="unique_modal_modal_img"
                  :style="{'background-image': `url(${require('../../assets/images/callback_img.png')})`}"
                ></div>
              </b-col>
              <b-col sm="8" class="right_content">
                <b-form id="call" @submit="onSubmit" v-if="show">
                  <b-form-group id="input-group-2" label label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.name"
                      required
                      placeholder="Enter name"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group id="input-group-3" label label-for="input-3">
                    <masked-input
                      id="input-3"
                      v-model="form.phone"
                      mask="\+\7 (111) 1111-11"
                      placeholder="Phone"
                      required
                    />
                  </b-form-group>
                  <b-form-group id="input-group-1" label label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Enter email"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-button class="mt-2" block type="submit" variant="primary" @click="$bvModal.hide(`${location}`)">Заказать обратный звонок</b-button>
                  </b-form-group>
                </b-form>
              </b-col>
            </b-row>
          </div>
        </b-modal>

        <button
          id="show-btn"
          @click="$bvModal.show(`${location}_1`)"
          class="button-global button_small button-primary-green call-button deep_green"
        >Написать нам</button>

        <b-modal :id="`${location}_1`" centered hide-footer>
          <template v-slot:modal-title>
            <div class="unique_modal_bv-modal-call">Написать нам сообщение</div>
          </template>
          <div class="d-block text-center">
            <b-row class="my-1">
              <b-col sm="4" class="left_content">
                <div>
                  Задайте нам любой интересующий вас вопрос ONLINE!
                </div>
                <div
                  class="unique_modal_modal_img"
                  :style="{'background-image': `url(${require('../../assets/images/send_message_img.png')})`}"
                ></div>
              </b-col>
              <b-col sm="8" class="right_content">
                <b-form id="message" @submit="onSubmit" v-if="show_1">
                  <b-form-group id="input-group-2" label label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.name"
                      required
                      placeholder="Enter name"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group id="input-group-3" label label-for="input-3">
                    <masked-input
                      id="input-3"
                      v-model="form.phone"
                      mask="\+\7 (111) 1111-11"
                      placeholder="Phone"
                      required
                    />
                  </b-form-group>
                  <b-form-group id="input-group-1" label label-for="input-1">
                    <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Enter email"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-textarea
                      id="textarea"
                      v-model="form.text"
                      placeholder="Сообщение"
                      rows="3"
                      max-rows="6"
                    ></b-form-textarea>
                  </b-form-group>
                  <b-form-group>
                    <b-button
                      class="mt-2"
                      type="submit"
                      variant="primary"
                      block
                      @click="$bvModal.hide(`${location}_1`)"
                    >Написать нам сообщение</b-button>
                  </b-form-group>
                </b-form>
              </b-col>
            </b-row>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>
<script>
import MaskedInput from "vue-masked-input";
export default {
  props: ["location"],
  components: {
    MaskedInput
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        phone: "",
        text: "",
      },
      show: true,
      show_1: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      if (evt.target.id == 'call') {
        alert(JSON.stringify(this.form));
        this.onReset()
      } else if (evt.target.id == 'message') {
        alert(JSON.stringify(this.form));
        this.onReset()
      }
    },
    onReset(evt) {
      this.form.email = "";
      this.form.name = "";
      this.form.phone = null;
      this.form.text = "";
      this.show = false;
      this.show_1 = false;

      this.$nextTick(() => {
        this.show = true;
        this.show_1 = true;
      });
    }
  }
};
</script>
<style lang="scss">
#header_bv-modal-example___BV_modal_content_,
#header_bv-modal-example_1___BV_modal_content_,
#content_bv-modal-example___BV_modal_content_,
#content_bv-modal-example_1___BV_modal_content_ {
  background: #47c08c;
  &.modal-content {
    border-radius: 0;
  }
  .modal-body {
    padding: 0 50px 30px;
    & .text-center {
      & .right_content,
      .left_content {
        padding: 0;
      }
      & .left_content {
        display: flex;
        flex-direction: column;
        color: #fff;
        & div {
          flex: auto;
          text-align: left;
          font-size: 15px;
          font-family: PT Sans, Arial, sans-serif;
        }
      }
      & .right_content {
        padding-left: 15px;
      }
    }
    & .form-group {
      margin-bottom: 8px;
      & #input-3 {
        display: block;
        width: 100%;
        height: calc(1.5em + 0.75rem + 2px);
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 0;
        border-radius: 0;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
    }
  }
  & .modal-header {
    border: none;
    padding: 50px 30px 0;
    color: #fff;
    position: relative;
    display: flex;
    justify-content: center;
    & .modal-title {
      text-align: center;
      margin-bottom: 15px;
    }
    & .close {
      position: absolute;
      top: 5px;
      right: 9px;
      padding: 0;
      margin: 0;
      color: #fff;
      opacity: 1;
    }
  }
  & input {
    border-radius: 0;
    border: 0;
  }
  & textarea {
    height: 70px !important;
    border-radius: 0;
    border: 0;
  }
  & button.btn-block {
    border-radius: 0;
    background: #ff9e24;
    border: 0;
    &:hover {
      background: #ffbf24;
    }
  }
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 555px !important;
    margin: 1.75rem auto;
  }
}

.unique_modal_modal_img {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.unique_modal_bv-modal-title {
  font-size: 15px;
  text-align: center;
  font-family: PT Sans, Arial, sans-serif;
}
.unique_modal_bv-modal-call {
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  font-family: PT Sans, Arial, sans-serif;
}
</style>