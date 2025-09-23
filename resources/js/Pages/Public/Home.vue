<script setup>
import { Head } from "@inertiajs/vue3";
import ProductCard from '@/Components/ProductCard.vue';

const props = defineProps({
    user: Object,
    canLogin: Boolean,
    canRegister: Boolean,
    products: Object
});
</script>

<template>
    <Head title="MyShop" />
    <div class="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-50">
        <div class="w-full max-w-4xl mt-8">
            <section class="bg-white rounded-lg shadow p-8">
                <h1 class="text-3xl font-extrabold text-gray-900 mb-4">Bine ai venit la MyShop</h1>
                <p class="text-gray-700 mb-4">
                    MyShop este un magazin online simplu și rapid — caută produse, compară oferte și comandă cu livrare rapidă.
                </p>
                <p class="text-gray-700">
                    Aceasta este o pagină de început. Pe viitor vom adăuga categorii, filtrare avansată și conturi de utilizator pentru a îmbunătăți experiența.
                </p>
            </section>

            <section class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white p-4 rounded shadow">
                    <h2 class="font-semibold text-lg mb-2">Produse variate</h2>
                    <p class="text-sm text-gray-600">Explorează o gamă largă de produse de la comercianţi verificaţi.</p>
                </div>
                <div class="bg-white p-4 rounded shadow">
                    <h2 class="font-semibold text-lg mb-2">Livrare rapidă</h2>
                    <p class="text-sm text-gray-600">Urmărește comenzile și primește notificări despre starea livrării.</p>
                </div>
                <div class="bg-white p-4 rounded shadow">
                    <h2 class="font-semibold text-lg mb-2">Suport clienți</h2>
                    <p class="text-sm text-gray-600">Suntem aici să te ajutăm cu orice întrebare legată de comenzile tale.</p>
                </div>
            </section>

            <section class="mt-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <ProductCard v-for="p in products.data" :key="p.id" :product="p" />
                </div>

                <!-- simple pagination -->
                <div class="mt-6">
                    <nav class="flex justify-center gap-2">
                        <button v-if="products.prev_page_url" @click="$inertia.get(products.prev_page_url)" class="px-3 py-1 border rounded">Prev</button>
                        <button v-if="products.next_page_url" @click="$inertia.get(products.next_page_url)" class="px-3 py-1 border rounded">Next</button>
                    </nav>
                </div>
            </section>
        </div>
    </div>
</template>

