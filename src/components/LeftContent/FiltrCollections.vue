<template>
  <div>
    <div class="free-design">
      <label class="typo__label">Параметры</label>
      <multiselect
        v-model="value"
        tag-placeholder="Выбрать тег"
        placeholder="Поиск тега"
        label="name"
        track-by="code"
        :options="options"
        :multiple="true"
        :taggable="true"
        @tag="addTag"
        deselectLabel="Удалить"
        selectLabel="Добавить"
        selectedLabel="Выбрано"
      ></multiselect>
    </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
export default {
  components: { Multiselect },
  data() {
    return {
      value: [{ name: "Javascript", code: "js" }],
      options: [
        { name: "Бизнес", code: "vu" },
        { name: "Премиум", code: "js" },
        { name: "Эконом", code: "os" }
      ]
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.value.push(tag);
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
  
</style>