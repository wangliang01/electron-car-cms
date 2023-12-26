<template>
  <div class="container">
    <Breadcrumb
      :items="['menu.system', 'menu.system.store', 'menu.system.store.detail']"
    />
    <a-card :bordered="false">
      <a-descriptions title="基本信息" align="left">
        <a-descriptions-item label="门店名称">
          {{ detail.name }}
        </a-descriptions-item>
        <a-descriptions-item label="门店地址">
          {{ detail.address }}
        </a-descriptions-item>
        <a-descriptions-item label="备注">
          {{ detail.remark }}
        </a-descriptions-item>
        <a-descriptions-item label="创建人">
          {{ detail.createName }}
        </a-descriptions-item>
        <a-descriptions-item label="创建时间">
          {{ formatDate(detail.createTime) }}
        </a-descriptions-item>
      </a-descriptions>
    </a-card>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import dayjs from 'dayjs';
  import { getDetail } from './api';

  const props = defineProps({
    id: {
      type: Number,
    },
  });

  const detail = ref({});

  const formatDate = (date) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
  };

  onMounted(() => {
    getDetail(props.id).then((res) => {
      detail.value = res.data;
    });
  });
</script>

<style lang="scss" scoped>
  .container {
    padding: 0 20px 20px 20px;
  }
</style>
