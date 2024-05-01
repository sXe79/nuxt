<script setup lang="ts">
const client = useSanctumClient();
const route = useRoute();

// Fetch page data
const { data, pending, error, refresh } = await useAsyncData('item', () =>
    client('/api/items/' + route.params.id)
);

// Update the model
function submit(data) {
    const { res } = useAsyncData('update', () =>
        client('/api/items/' + route.params.id, {
            method: 'PATCH',
            body: data,
        })
    )
        //.then(console.log(res))
        .catch((err) => err.data);
}
</script>

<template>
    <div>
        <h1>Edit</h1>
        <form action="" class="mx-36 text-black grid grid-cols-2 gap-4">
            <div>
                <span>Titolo</span>
                <input class="my-2" type="text" v-model="data.title">
            </div>

            <div>
                <span>Categoria</span>
                <input class="my-2" type="text" v-model="data.category">
            </div>

            <input class="my-2" type="text" v-model="data.brand">
            <input class="my-2" type="text" v-model="data.model">
            <input class="my-2" type="text" v-model="data.description">
            <input class="my-2" type="text" v-model="data.price">
            <div>
                <span>State</span>
                <select name="state" id="state" v-model.number="data.state">
                    <option value="1">Available</option>
                    <option value="2">Reserved</option>
                    <option value="3">Sold</option>
                </select>
                <input class="my-2" type="text" v-model.number="data.state">
            </div>
            <input class="my-2" type="text" v-model="data.published">
            <input class="my-2" type="text" v-model="data.position">
            <input class="my-2" type="text" v-model="data.status">
            <input class="my-2" type="text" v-model="data.payment">
            <textarea v-model="data.note" class="p-2"></textarea>
        </form>

        <hr>

        <div class="text-center">
            <button @click.prevent="submit(data)" class="text-white mr-4 border border-slate-200 p-2 rounded-lg bg-emerald-600 font-bold uppercase">Salva</button>
        </div>
    </div>
</template>

<style scoped>

</style>