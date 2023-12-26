<template>
  <a-modal
    v-model:visible="visible"
    @before-ok="handleOk"
    @cancel="handleCancel"
  >
    <template #title> {{ title }} </template>
    <div> <icon-exclamation-circle-fill class="warning" />{{ content }} </div>
  </a-modal>
</template>

<script setup>
  import { ref } from 'vue';

  const visible = ref(true);
  const emit = defineEmits(['confirm', 'cancel']);

  const props = defineProps({
    title: {
      type: String,
      default: '标题',
    },
    content: {
      type: String,
      default: '',
    },
    onConfirm: Function,
    onCancel: Function,
  });

  const handleOk = (done) => {
    emit('confirm', props.onConfirm);
    return done;
  };

  const handleCancel = (e) => {
    emit('cancel', props.onCancel);
  };

  defineExpose({
    confirm: handleOk,
    cancel: handleCancel,
  });
</script>

<style lang="less" scoped>
  @warning-color: #faad14;
  .warning {
    font-size: 20px;
    color: @warning-color;
  }
</style>
