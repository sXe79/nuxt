<template>
    <div>
        <AppMenu :user="user" />

        <div class="mx-4">
            <AppHeader />
            <div class="rounded-lg overflow-hidden">
                <slot :user="user" />
            </div>

            <AppFooter />
        </div>

    </div>
</template>
<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
import AppMenu from "~/components/AppMenu.vue";

const user = useSanctumUser();
</script>