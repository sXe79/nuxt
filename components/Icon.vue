<script setup lang="ts">
/*import { ArrowUpDownIcon, BarsArrowDownIcon, BarsArrowUpIcon, EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid';
import { ArrowUpDownIcon, BarsArrowDownIcon, BarsArrowUpIcon, EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline';*/

import * as solid from '@heroicons/vue/24/solid';
import * as outline from '@heroicons/vue/24/outline';

const props = defineProps(['name', 'style'])

/*const icons = computed(() => {
    return {solid, outline}
})*/

//const PencilSquareIcon = resolveComponent('PencilSquareIcon')

const icons = reactive({
    eye: outline.EyeIcon,
    pencil: outline.PencilSquareIcon,
    trash: outline.TrashIcon,
    sort: outline.ArrowsUpDownIcon,
    sortUp: outline.BarsArrowUpIcon,
    sortDown: outline.BarsArrowDownIcon,
})
</script>

<template>
    <component :is="icons[props.name]" class="size-6" />
</template>

<style scoped>

</style>