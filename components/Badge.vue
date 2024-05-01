<script setup lang="ts">
const props = defineProps(['name', 'type'])

const style = computed<string>(() => {
    let color

    switch (props.type) {
        case 'warning':
        case 'reserved':
            color = 'yellow'
            break

        case 'error':
        case 'sold':
            color = 'red'
            break

        case 'success':
        case 'available':
            color = 'green'
            break

        case 'info':
            color = 'blue'
            break

        default:
            color = 'gray'
            break
    }

    return color
})

</script>

<template>
    <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
          :class="'bg-' + style + '-50 text-' + style + '-800 ring-' + style + '-600/20'">
        {{ props.name }}
    </span>
</template>

<style scoped>

</style>