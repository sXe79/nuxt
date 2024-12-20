<script setup lang="ts">
const props = defineProps(['columns'])
</script>

<template>
    <select name="visible" id="visible" class="text-black">
        <option v-for="sel in props.columns" value="">{{ sel.label }}</option>
    </select>
</template>

<style scoped>

</style>