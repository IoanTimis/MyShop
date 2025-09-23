<script setup>
import { Link } from '@inertiajs/vue3';
const props = defineProps({
    product: Object
});
</script>

<template>
    <div class="bg-white rounded-lg shadow overflow-hidden">
        <Link :href="route('products.show', product.id)">
            <img
                v-if="product.image_path"
                :src="`/storage/${product.image_path}`"
                alt=""
                class="w-full h-48 object-cover"
            />
            <div v-else class="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                No image
            </div>
        </Link>
        <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ product.title }}</h3>
            <p class="text-sm text-gray-600 mb-2">{{ product.description }}</p>
            <div class="flex items-center justify-between">
                <div class="flex gap-2">
                    <span v-for="tag in product.tags" :key="tag.id" class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {{ tag.name }}
                    </span>
                </div>
                <div class="text-lg font-bold text-gray-900">
                    €{{ Number(product.price).toFixed(2) }}
                </div>
            </div>
        </div>
    </div>
</template>