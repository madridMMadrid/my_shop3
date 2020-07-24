<template>
  <div>
    <multiselect
      v-model="value"
      @tag="addTag"
      tag-placeholder="Выбрать тег"
      placeholder="Поиск тега"
      label="name"
      track-by="code"
      :options="options"
      :multiple="true"
      :taggable="true"
      :close-on-select="false"
      :clear-on-select="false"
      :show-labels="false"
    ></multiselect>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      value: '',
      options: [
        { name: "Бизнес", code: "1" },
        { name: "Премиум", code: "2" },
        { name: "Эконом", code: "3" },
        { name: "Детские", code: "4" },
        { name: "Убогие", code: "5" },
        { name: "Лакшери", code: "6" },
        { name: "qw", code: "7" },
      ],
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
.multiselect {
  margin-bottom: 3px;
  min-height: auto;
  &__element {
    padding: 3px;
    font-size: 13px;
  }
  &__option {
    min-height: auto;
    padding: 5px;
    &--selected {
      background: rgba(71, 192, 140, 0.4);
      color: #595959;
      font-weight: normal;
      border-radius: 3px;
      &:after {
        background: none;
        color: #888;
      }
    }
    &--highlight {
      background: rgba(71, 192, 140, 0.2);
      color: #595959;
      border-radius: 3px;
      &.multiselect__option--selected {
        background: rgba(71, 192, 140, 0.4);
        color: #595959;
        &:after {
          background: none;
          color: #595959;
        }
      }
      &:after {
        background: none;
        color: #595959;
        min-height: auto;
        padding: 0 5px;
        line-height: 23px;
      }
    }
  }
  &__select {
    width: 24px;
    height: 29px;
    padding: 4px 4px;
    &:before {
      top: 76%;
    }
  }
  &__tags {
    padding: 3px;
    min-height: 30px;
    line-height: 0.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-wrap {
      padding-right: 18px;
    }
  }
  &__tag {
    margin-bottom: 2px;
    margin-right: 0;
    background: none;
    color: #888;
    &-icon {
      &:hover {
        background: none;
        &:after {
          color: red;
        }
      }
      &:after {
        color: #888;
      }
    }
  }
  &__placeholder {
    margin-bottom: 0;
    margin-left: 10px;
  }
}
</style>