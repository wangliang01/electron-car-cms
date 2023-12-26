<template>
  <div class="container">
    <Breadcrumb :items="['menu.system', 'menu.system.user']" />
    <a-card class="general-card" :title="$t('menu.system.user')">
      <a-row>
        <a-col :flex="1">
          <a-form
            :model="formModel"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
            label-align="left"
          >
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item field="name" :label="$t('user.form.name')">
                  <a-input
                    v-model="formModel.name"
                    :placeholder="$t('user.form.name.placeholder')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item
                  field="createTime"
                  :label="$t('user.form.createTime')"
                >
                  <a-range-picker
                    v-model="formModel.createTime"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-divider style="height: 84px" direction="vertical" />
        <a-col :flex="'86px'" style="text-align: right">
          <a-space direction="vertical" :size="18">
            <a-button type="primary" @click="search">
              <template #icon>
                <icon-search />
              </template>
              {{ $t('user.form.search') }}
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              {{ $t('user.form.reset') }}
            </a-button>
          </a-space>
        </a-col>
      </a-row>
      <a-divider style="margin-top: 0" />
      <a-row style="margin-bottom: 16px">
        <a-col :span="12">
          <a-space>
            <a-button type="primary" @click="handleAdd">
              <template #icon>
                <icon-plus />
              </template>
              {{ $t('user.operation.create') }}
            </a-button>
            <a-upload v-show="false" action="/">
              <template #upload-button>
                <a-button>
                  {{ $t('user.operation.import') }}
                </a-button>
              </template>
            </a-upload>
          </a-space>
        </a-col>
        <a-col
          :span="12"
          style="display: flex; align-items: center; justify-content: end"
        >
          <a-button @click="handleExport">
            <template #icon>
              <icon-download />
            </template>
            {{ $t('user.operation.download') }}
          </a-button>
          <a-tooltip :content="$t('user.actions.refresh')">
            <div class="action-icon" @click="search"
              ><icon-refresh size="18"
            /></div>
          </a-tooltip>
          <a-dropdown @select="handleSelectDensity">
            <a-tooltip :content="$t('user.actions.density')">
              <div class="action-icon"><icon-line-height size="18" /></div>
            </a-tooltip>
            <template #content>
              <a-doption
                v-for="item in densityList"
                :key="item.value"
                :value="item.value"
                :class="{ active: item.value === size }"
              >
                <span>{{ item.name }}</span>
              </a-doption>
            </template>
          </a-dropdown>
          <a-tooltip :content="$t('user.actions.columnSetting')">
            <a-popover
              trigger="click"
              position="bl"
              @popup-visible-change="popupVisibleChange"
            >
              <div class="action-icon"><icon-settings size="18" /></div>
              <template #content>
                <div id="tableSetting">
                  <div
                    v-for="(item, index) in showColumns"
                    :key="item.dataIndex"
                    class="setting"
                  >
                    <div style="margin-right: 4px; cursor: move">
                      <icon-drag-arrow />
                    </div>
                    <div>
                      <a-checkbox
                        v-model="item.checked"
                        @change="
                          handleChange($event, item as TableColumnData, index)
                        "
                      >
                      </a-checkbox>
                    </div>
                    <div class="title">
                      {{ item.title === '#' ? '序列号' : item.title }}
                    </div>
                  </div>
                </div>
              </template>
            </a-popover>
          </a-tooltip>
        </a-col>
      </a-row>
      <a-table
        row-key="id"
        :loading="loading"
        :pagination="pagination"
        :columns="(cloneColumns as TableColumnData[])"
        :data="renderData"
        :bordered="false"
        :size="size"
        @page-change="onPageChange"
      >
        <template #index="{ rowIndex }">
          {{ rowIndex + 1 + (pagination.current - 1) * pagination.pageSize }}
        </template>
        <template #createTime="{ record }">
          {{ formatDate(record.createTime) }}
        </template>
        <template #operations="{ record }">
          <a-button
            v-permission="['admin']"
            type="text"
            size="small"
            @click="handleEdit(record)"
          >
            {{ $t('user.columns.operations.edit') }}
          </a-button>
          <a-button
            v-permission="['admin']"
            type="text"
            size="small"
            @click="handleDelete(record)"
          >
            {{ $t('user.columns.operations.delete') }}
          </a-button>
          <a-button
            v-permission="['admin']"
            type="text"
            size="small"
            @click="handleView(record)"
          >
            {{ $t('user.columns.operations.view') }}
          </a-button>
        </template>
      </a-table>
    </a-card>
    <AddDialog ref="addDialog" @submit="handleConfirm"></AddDialog>
  </div>
</template>

<script lang="ts" setup>
  import {
    computed,
    ref,
    reactive,
    watch,
    nextTick,
    defineAsyncComponent,
  } from 'vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@renderer/hooks/loading';
  import { Pagination } from '@renderer/types/global';
  import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface';
  import type { TableColumnData } from '@arco-design/web-vue/es/table/interface';
  import cloneDeep from 'lodash/cloneDeep';
  import Sortable from 'sortablejs';
  import dayjs from 'dayjs';
  import { useRouter } from 'vue-router';
  import { Message } from '@arco-design/web-vue';
  import { confirm } from '@renderer/components/modal';
  import { useUserStore } from '@renderer/store/modules/user';
  import {
    getList,
    addStore,
    editStore,
    deleteStore,
    exportStore,
  } from './api';
  import AddDialog from './components/add-dialog.vue';

  type SizeProps = 'mini' | 'small' | 'medium' | 'large';
  type Column = TableColumnData & { checked?: true };

  const userStore = useUserStore();

  const generateFormModel = () => {
    return {
      name: '',
      email: '',
      password: '',
      sex: '',
      birthday: '',
      phone: '',
      domicile: '',
      address: '',
      storeId: '',
      storeName: '',
      remark: '',
      role: '',
      createName: userStore.name,
    };
  };
  const { loading, setLoading } = useLoading(true);
  const { t } = useI18n();
  const renderData = ref([]);
  const formModel = ref(generateFormModel());
  const cloneColumns = ref<Column[]>([]);
  const showColumns = ref<Column[]>([]);

  const size = ref<SizeProps>('medium');

  const addDialog = ref(null);

  const basePagination: Pagination = {
    current: 1,
    pageSize: 20,
  };
  const pagination = reactive({
    ...basePagination,
  });
  const densityList = computed(() => [
    {
      name: t('user.size.mini'),
      value: 'mini',
    },
    {
      name: t('user.size.small'),
      value: 'small',
    },
    {
      name: t('user.size.medium'),
      value: 'medium',
    },
    {
      name: t('user.size.large'),
      value: 'large',
    },
  ]);
  const columns = computed<TableColumnData[]>(() => [
    {
      title: t('user.columns.index'),
      dataIndex: 'index',
      slotName: 'index',
    },
    {
      title: t('user.columns.name'),
      dataIndex: 'name',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: t('user.columns.address'),
      dataIndex: 'address',
      slotName: 'address',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: t('user.columns.remark'),
      dataIndex: 'remark',
      ellipsis: true,
      tooltip: true,
    },
    {
      title: t('user.columns.createName'),
      dataIndex: 'createName',
    },
    {
      title: t('user.columns.createTime'),
      dataIndex: 'createTime',
      slotName: 'createTime',
    },
    {
      title: t('user.columns.operations'),
      dataIndex: 'operations',
      slotName: 'operations',
    },
  ]);
  const fetchData = async (params = { current: 1, pageSize: 20 }) => {
    setLoading(true);
    try {
      const res = await getList(params);
      console.log(res);
      renderData.value = res.data.records;
      pagination.current = params.current;
      pagination.total = res.data.total;
    } catch (err) {
      // you can report use errorHandler or other
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: Date, fmt = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(date).format(fmt);
  };

  const search = () => {
    fetchData({
      ...basePagination,
      ...formModel.value,
    } as unknown);
  };
  const onPageChange = (current: number) => {
    fetchData({ ...basePagination, current });
  };

  const router = useRouter();

  const handleExport = async () => {
    console.log('export', formModel.value);
    await exportStore(formModel.value);
    Message.success(t('user.export.success'));
  };

  // 新增
  const handleAdd = () => {
    console.log('add', addDialog.value);
    addDialog.value.open();
  };

  // 编辑
  const handleEdit = (record: Record<string, any>) => {
    console.log('edit', record);
    const row = {
      id: record.id,
      name: record.name,
      address: record.address,
      remark: record.remark,
    };
    addDialog.value.open(row, 'edit');
  };

  // 删除
  const handleDelete = async (record: Record<string, any>) => {
    confirm('确定要删除当前门店吗？', '删除门店', async (done) => {
      await deleteStore(record.id);
      done();
      Message.success(t('user.delete.success'));
      fetchData();
    });
  };

  // 查看
  const handleView = (record: Record<string, any>) => {
    router.push({
      path: '/system/user/detail',
      query: { id: record.id },
    });
  };

  const reset = () => {
    formModel.value = generateFormModel();
  };

  const handleConfirm = async (form, done, type = 'add') => {
    if (type === 'add') {
      await addStore(form);
      addDialog.value.clear();
      done();
      fetchData();
      // 提示
      Message.success(t('user.add.success'));
    } else if (type === 'edit') {
      await editStore(form);
      addDialog.value.clear();
      done();
      fetchData();
      // 提示
      Message.success(t('user.edit.success'));
    }
  };

  fetchData();

  const handleSelectDensity = (
    val: string | number | Record<string, any> | undefined,
    e: Event
  ) => {
    size.value = val as SizeProps;
  };

  const handleChange = (
    checked: boolean | (string | boolean | number)[],
    column: Column,
    index: number
  ) => {
    if (!checked) {
      cloneColumns.value = showColumns.value.filter(
        (item) => item.dataIndex !== column.dataIndex
      );
    } else {
      cloneColumns.value.splice(index, 0, column);
    }
  };

  const exchangeArray = <T extends Array<any>>(
    array: T,
    beforeIdx: number,
    newIdx: number,
    isDeep = false
  ): T => {
    const newArray = isDeep ? cloneDeep(array) : array;
    if (beforeIdx > -1 && newIdx > -1) {
      // 先替换后面的，然后拿到替换的结果替换前面的
      newArray.splice(
        beforeIdx,
        1,
        newArray.splice(newIdx, 1, newArray[beforeIdx]).pop()
      );
    }
    return newArray;
  };

  const popupVisibleChange = (val: boolean) => {
    if (val) {
      nextTick(() => {
        const el = document.getElementById('tableSetting') as HTMLElement;
        const sortable = new Sortable(el, {
          onEnd(e: any) {
            const { oldIndex, newIndex } = e;
            exchangeArray(cloneColumns.value, oldIndex, newIndex);
            exchangeArray(showColumns.value, oldIndex, newIndex);
          },
        });
      });
    }
  };

  watch(
    () => columns.value,
    (val) => {
      cloneColumns.value = cloneDeep(val);
      cloneColumns.value.forEach((item, index) => {
        item.checked = true;
      });
      showColumns.value = cloneDeep(cloneColumns.value);
    },
    { deep: true, immediate: true }
  );
</script>

<script lang="ts">
  export default {
    name: 'Store',
  };
</script>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }
  :deep(.arco-table-th) {
    &:last-child {
      .arco-table-th-item-title {
        margin-left: 16px;
      }
    }
  }
  .action-icon {
    margin-left: 12px;
    cursor: pointer;
  }
  .active {
    color: #0960bd;
    background-color: #e3f4fc;
  }
  .setting {
    display: flex;
    align-items: center;
    width: 200px;
    .title {
      margin-left: 12px;
      cursor: pointer;
    }
  }
</style>
