<script setup lang="ts">
import Icon from '~/components/Icon.vue';
import Select from '~/components/Select.vue';
import { reactive } from '#imports';

const props = defineProps(['columns', 'data', 'footer', 'actions', 'filterable', 'selectable', 'options',])
const filter = ''

let rows = reactive([...props.data])
/*const rows = computed(() => {
    return reactive([...props.data])
})*/

// SORTING CODE
let sortColumnFocus = ref(null)
let sortColumnDirection = ref(null)
let sortColumnIcon = ref('sort')

/*watch(() => sortColumnDirection, (newValue, oldValue) => {
    if (sortColumnDirection === null) {
        rows = reactive([...props.data])
    }
})*/

const sortActions = (sortKey) => {
    if (sortKey !== sortColumnFocus) {
        sortColumnDirection = null
        sortColumnIcon = 'sort'
    }

    sortColumnFocus = sortKey
    sortColumnDirection = setDirection(sortColumnDirection)
    sortKey = sortColumnFocus

    if (! sortKey) {
        //rows = reactive([...props.data])
        sortColumnDirection = props.options?.direction ?? 'asc'
        sortData(props.options?.primaryKey ?? 'id')

        return
    }

    sortData(sortKey)
}

const sortData = (sortKey) => {
    //let sortKey = (sortColumnDirection === null) ? 'id' : sortKey2
    /*sortColumnFocus = sortKey;
    sortColumnDirection = setDirection(sortColumnDirection)

    sortKey = sortColumnFocus

    if (! sortKey) {
        //rows = reactive([...props.data])

        return
    }*/

    if (rows && sortKey) {
        rows.sort(
            (a, b) => {
                if (a[sortKey] === null) {
                    return 1;
                }

                if (b[sortKey] === null) {
                    return -1;
                }

                if (a[sortKey].toString().toLowerCase() === b[sortKey].toString().toLowerCase()) {
                    return 0;
                }

                if (sortColumnDirection === 'desc') {
                    return a[sortKey].toString().toLowerCase() < b[sortKey].toString().toLowerCase() ? 1 : -1;
                }

                return a[sortKey].toString().toLowerCase() < b[sortKey].toString().toLowerCase() ? -1 : 1;
            }
        )
    }
}

const setDirection = (sortColumnDirection) => {
    switch (sortColumnDirection) {
        case 'asc':
            sortColumnIcon = 'sortUp'
            return 'desc'

        case 'desc':
            sortColumnDirection = null
            sortColumnFocus = null
            sortColumnIcon = 'sort'
            return null

        default:
            sortColumnIcon = 'sortDown'
            return 'asc'
    }
}

</script>

<template>
    <table>
        <thead>
            <tr>
                <th :colspan="props.columns.length">
                    <Select :columns="props.columns" /> <!-- Use VueSelect? -->
                </th>
            </tr>
            <tr v-if="props.filterable">
                <th :colspan="props.columns.length">
                    <input v-model="filter"
                           class="w-full rounded-md border-gray-300 text-black shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           type="text"
                           placeholder="Filter...">
                </th>
            </tr>
            <tr v-if="props.columns">
                <th v-if="props.selectable" class="w-1">
                    <input type="checkbox">
                </th>
                <th v-for="(item, index) in props.columns"
                    :key="index"
                    :class="item.class ?? ''">
                    <div class="flex items-center">
                        {{ item.label }}
                        <div v-if="item.sortable"
                             class="ml-2"
                             :class="(sortColumnFocus === item.key) ? 'bg-blue-400 rounded-full p-1' : ''">
                            <Icon :name="(sortColumnFocus === item.key) ? sortColumnIcon : 'sort'"
                                  @mousedown="sortActions(item.key)"
                                  class="size-4 cursor-pointer" />
                        </div>

                    </div>

                </th>
            </tr>

            <slot v-else name="columns" />
        </thead>

        <tbody>
            <tr v-if="rows?.length"
                v-for="item in rows"
                :key="item.id">
                <td v-if="props.selectable">
                    <input type="checkbox">
                </td>
                <td v-for="a in props.columns"
                    :key="a">
                    {{ item[a.key] }}

                    <div v-if="a.key === 'actions' && props.actions"
                         class="text-center whitespace-nowrap">
                        <div class="inline">
                            <NuxtLink v-for="action in props.actions"
                                      :to="'/' + action.route + '/' + item[action.key]">
                                <!--<component :is="action.icon" :class="action.classes ?? ''" />-->
                                <Icon :name="action.icon" class="size-6 mx-2" />
                            </NuxtLink>
                        </div>
                    </div>
                </td>
            </tr>

            <tr v-if="rows && ! rows.length">
                <td :colspan="props.columns.length + 1"
                    class="text-center font-bold">
                    No Data
                </td>
            </tr>

            <slot v-if="! rows" name="tbody" />
        </tbody>

        <tfoot>
            <tr v-if="props.footer" class="text-sm">
                <td :colspan="columns.length + 1">{{ footer }}</td>
            </tr>

            <slot name="footer" />
        </tfoot>
    </table>
</template>

<style scoped>

</style>