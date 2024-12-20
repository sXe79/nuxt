<script setup lang="ts">
import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/solid";
import Table from "~/components/Table.vue";
import Badge from "~/components/Badge.vue";

const client = useSanctumClient();

const { data, pending, error, refresh } = await useAsyncData('items', () =>
    client('/api/1/items')
);

const columns = [
    {
        key: 'id',
        label: 'ID',
        class: 'w-1',
        sortable: true,
    }, {
        key: 'title',
        label: 'Title',
        sortable: true,
    }, {
        key: 'category',
        label: 'Category',
        sortable: true,
    }, {
        key: 'brand',
        label: 'Brand',
        sortable: true,
    }, {
        key: 'model',
        label: 'Model',
        sortable: true,
        direction: null,
        sort: null,
    }, {
        key: 'price_formatted',
        label: 'Price',
        sortable: true,
        type: Number,
    }, {
        key: 'position',
        label: 'Posizione',
        sortable: true,
        //type: Number,
    }, {
        key: 'status',
        label: 'Status',
        class: 'text-center w-1',
        sortable: true,
    }, {
        key: 'actions',
        class: 'text-center w-1',
    }
]

const actions = [
    {
        label: 'edit',
        key: 'id',
        route: 'item',
        icon: 'pencil',
        classes: 'size-6 mx-2',
    }, {
        label: 'delete',
        key: 'id',
        route: 'item',
        icon: 'trash',
        classes: 'size-6 mx-2',
    }
]
</script>

<template>
<!--    <h1>User Items</h1>-->

    <NuxtLink to="/item/create">Crea</NuxtLink>

<!--    <Table :columns="columns"
           :filterable="true"
           :selectable="true"
           class="rounded-t-lg overflow-hidden">
        <template #tbody>
            <tr v-for="item in data"
                :key="item.id">
                <td>
                    <input type="checkbox" />
                </td>
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.brand }}</td>
                <td>{{ item.model }}</td>
                <td>{{ item.price_formatted }}</td>
                <td class="text-center">
                    <Badge :name="item.state" :type="item.state" />
                </td>
                <td class="text-center whitespace-nowrap">
                    <div class="inline">
                        <NuxtLink :to="'/item/' + item.id"><PencilSquareIcon class="size-6 mx-2" /></NuxtLink>
                        <NuxtLink to="/"><TrashIcon class="size-6 mx-2" /></NuxtLink>
                    </div>
                </td>
            </tr>
        </template>

        <template #footer>
            <tr class="text-sm">
                <td :colspan="columns.length +1">Custom footer</td>
            </tr>
        </template>
    </Table>-->

    <Table :columns="columns"
           :data="data"
           :actions="actions"
           :filterable="true"
           :selectable="true"
           :options="{ primaryKey: 'id', direction: 'desc' }"
           :footer="'Props footer message'"
           class="rounded-t-lg overflow-hidden" />

    <Table :columns="columns"
           :data="[]"
           :actions="actions"
           :filterable="true"
           :selectable="true"
           :footer="'Props footer message'"
           class="rounded-t-lg overflow-hidden" />

</template>

<style scoped>

</style>