<script setup lang="ts">
const { login } = useSanctumAuth();

const userCredentials = {
    email: 'admin@test.com',
    password: 'secret',
};

//await login(userCredentials);
</script>

<template>
    <form action="" class="w-3/12 text-center">
        <input v-model="userCredentials.email" class="mb-2" type="email" name="email" id="email" placeholder="email">
        <input v-model="userCredentials.password" class="mb-2" type="password" name="password" id="password" placeholder="password">

        <button class="bg-green-600 text-white uppercase p-3 px-5 border-2 border-green-800 rounded-xl" @click.prevent="login(userCredentials)">Login</button>
    </form>
</template>

<style scoped>

</style>