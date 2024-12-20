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
        }).then(response => {
            if (response.status === 200) {
                console.log(response)
                navigateTo('/my-garage')
            }
        })
    )
        //.then(() => console.log(res))
        .catch((err) => err.data);
}
</script>

<template>
    <div>
        <h1>Edit</h1>
        <form action="" class="mx-36 text-black grid grid-cols-2 gap-4 p-6 bg-white rounded-lg">
            <div>
                <span>Titolo</span>
                <input class="my-2" type="text" v-model="data.title">
            </div>

            <div>
                <span>Categoria</span>
                <input class="my-2" type="text" v-model="data.category">
            </div>

            <div>
                <label>Brand</label>
                <input class="my-2" type="text" v-model="data.brand">
            </div>

            <div>
                <label for="">Model</label>
                <input class="my-2" type="text" v-model="data.model">
            </div>

            <div>
                <label>Descrizione</label>
                <textarea class="p-2" v-model="data.description"></textarea>
            </div>

            <div>
                <label>Prezzo</label>
                <input class="my-2" type="text" v-model="data.price">
            </div>

            <div>
                <label>Stato</label>
                <select name="status" id="status" v-model.number="data.status">
                    <option value="0">TMP</option>
                    <option value="1">Available</option>
                    <option value="2">Reserved</option>
                    <option value="3">Sold</option>
                </select>
            </div>

            <div>
                <label>Pubblicato</label>
                <input class="my-2" type="text" v-model="data.published">
            </div>

            <div>
                <label>Posizione</label>
                <input class="my-2" type="text" v-model="data.position">
            </div>

            <div>
                <label>Payment</label>
                <input class="my-2" type="text" v-model="data.payment">
            </div>

            <div>
                <label>Note</label>
                <textarea v-model="data.note" class="p-2"></textarea>
            </div>
        </form>

        <hr>

        <div class="text-center">
            <button @click.prevent="submit(data)" class="text-white mr-4 border border-slate-200 p-2 rounded-lg bg-emerald-600 font-bold uppercase">Salva</button>
        </div>
    </div>
</template>

<style scoped>

</style>