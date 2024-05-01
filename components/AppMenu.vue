<script setup lang="ts">
const props = defineProps(['user'])



if (process.client) {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        console.log(document.documentElement.classList)
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

const setDark = () => {
    if (process.client) {
        localStorage.theme = 'dark'
    }
}

const setLight = () => {
    if (process.client) {
        localStorage.theme = 'light'
    }
}

const removeTheme = () => {
    if (process.client) {
        localStorage.removeItem('theme')
    }
}
</script>

<template>
    <nav class="flex justify-between border-b border-gray-200">
        <ul class="flex">
            <li class="m-4"><NuxtLink to="/">LOGO</NuxtLink></li>
            <li class="m-4"><NuxtLink to="/my-garage">My Garage</NuxtLink></li>
        </ul>
        <ul class="flex">
            <li @click="setDark" class="p-2 py-4"><button>Dark</button></li>
            <li @click="setLight" class="p-2 py-4"><button>Light</button></li>
            <li @click="removeTheme" class="p-2 py-4"><button>System</button></li>
            <li v-if="user" class="m-4"><NuxtLink to="/profile">Profile</NuxtLink></li>
            <li v-if="! user" class="m-4"><NuxtLink to="/login">Login</NuxtLink></li>
            <li v-else class="m-4"><NuxtLink to="/logout">Logout</NuxtLink></li>
<!--            <li class="m-4"><NuxtLink to="/logout">Logout</NuxtLink></li>-->
        </ul>
    </nav>
</template>

<style scoped>

</style>