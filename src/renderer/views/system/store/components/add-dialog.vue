<template>
  <a-modal
    v-model:visible="visible"
    @before-ok="handleSubmit"
    @cancel="handleCancel"
  >
    <template #title> {{ title }} </template>
    <a-form
      ref="formRef"
      :model="form"
      layout="horizontal"
      @submit="handleSubmit"
    >
      <a-form-item
        field="name"
        :label="$t('store.form.name')"
        validate-trigger="blur"
        :rules="[{ required: true, message: $t('store.form.name.required') }]"
      >
        <a-input
          v-model="form.name"
          allow-clear
          :max-length="30"
          show-word-limit
          :placeholder="$t('store.form.name.placeholder')"
        />
      </a-form-item>
      <a-form-item field="address" :label="$t('store.form.address')">
        <a-input
          v-model="form.address"
          allow-clear
          :max-length="50"
          show-word-limit
          :placeholder="$t('store.form.address.placeholder')"
        />
      </a-form-item>
      <a-form-item field="remark" :label="$t('store.form.remark')">
        <a-input
          v-model="form.remark"
          allow-clear
          :max-length="150"
          show-word-limit
          :input-attrs="{ type: 'textarea', rows: 3 }"
          :placeholder="$t('store.form.remark.placeholder')"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const rules = [{}];

  // 定义变量
  const visible = ref(false);
  const formRef = ref(null);
  const form = ref({
    name: null,
    address: null,
    remark: null,
  });
  const type = ref('add');

  const title = computed(() => {
    return type.value === 'add'
      ? t('store.dialog.title.add')
      : t('store.dialog.title.edit');
  });

  // 定义emit
  const emit = defineEmits(['submit']);

  // 事件处理函数
  const handleSubmit = async (done) => {
    const validResult = await formRef.value.validate();

    // 遍历校验结果
    // eslint-disable-next-line no-restricted-syntax
    for (const key in validResult) {
      if (validResult[key].isRequiredError) {
        return false;
      }
    }

    console.log(form.value);

    emit('submit', form.value, done, type.value);
    return done;
  };

  const handleCancel = () => {
    formRef.value.resetFields();
    formRef.value.clearValidate();
  };

  // 暴露一些方法
  defineExpose({
    open(record, dialogType = 'add') {
      visible.value = true;
      type.value = dialogType;
      if (record) {
        form.value = record;
      }
    },
    close() {
      visible.value = false;
    },
    clear() {
      formRef.value.resetFields();
      formRef.value.clearValidate();
    },
  });
</script>

<style lang="less" scoped></style>
