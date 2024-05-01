<script setup lang="ts">
const { login } = useSanctumAuth();

const userCredentials = {
    email: 'admin@test.com',
    password: 'secret',
};

//await login(userCredentials);
</script>

<template>
    <form action="">
        <input type="email" name="email" id="email" placeholder="email">
        <input type="password" name="password" id="password" placeholder="password">

        <p @click.prevent="login(userCredentials)">Login</p>
    </form>
</template>

<style scoped>

</style>