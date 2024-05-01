<script setup lang="ts">
const user = useSanctumUser();
</script>

<template>
    <dl class="max-w-md text-gray-900 divide-y divide-gray-200">
        <div class="flex flex-col pb-3">
            <dt class="mb-1 text-gray-500 md:text-lg">Nome</dt>
            <dd class="text-lg font-semibold">{{ user.name }}</dd>
        </div>
        <div class="flex flex-col pb-3">
            <dt class="mb-1 text-gray-500 md:text-lg">Email address</dt>
            <dd class="text-lg font-semibold">{{ user.email }}</dd>
        </div>
    </dl>
</template>

<style scoped>

</style>