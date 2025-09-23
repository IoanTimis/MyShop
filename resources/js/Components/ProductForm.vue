<script setup>
import { useForm } from '@inertiajs/vue3';
const form = useForm({
    title: '',
    description: '',
    price: '',
    image: null,
    tags: '' // comma-separated
});

function handleFile(e) {
    form.image = e.target.files[0];
}

function submit() {
    form.post(route('products.store'));
}
</script>

<template>
    <div class="max-w-2xl mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Add product</h1>
        <div class="space-y-3">
            <input v-model="form.title" placeholder="Title" class="w-full p-2 border rounded" />
            <textarea v-model="form.description" placeholder="Description" class="w-full p-2 border rounded" />
            <input v-model="form.price" placeholder="Price" class="w-full p-2 border rounded" />
            <input type="file" @change="handleFile" />
            <input v-model="form.tags" placeholder="Tags (comma separated)" class="w-full p-2 border rounded" />
            <button @click.prevent="submit" class="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
        </div>
    </div>
</template>