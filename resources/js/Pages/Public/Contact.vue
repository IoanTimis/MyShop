<script setup>
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Contact — MyShop" />
    <div class="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <div class="max-w-2xl text-center">
            <h1 class="text-4xl font-extrabold text-gray-900 mb-4">Contact MyShop</h1>
            <p class="text-gray-600 mb-4">
                Ai întrebări sau ai nevoie de ajutor? Echipa MyShop este aici pentru tine.
            </p>
            <div class="text-left bg-white rounded-lg shadow p-6">
                <p class="text-gray-700 mb-2"><strong>Email:</strong> support@myshop.local</p>
                <p class="text-gray-700 mb-2"><strong>Program suport:</strong> Luni–Vineri, 09:00–17:00</p>
                <p class="text-gray-700 mb-0"><strong>Telefon:</strong> +40 123 456 789 (exemplu)</p>
            </div>
            <p class="text-gray-600 mt-6">
                Pentru probleme legate de comenzi, te rugăm să ne trimiţi numărul comenzii în mesaj. Răspundem prompt!
            </p>
        </div>
    </div>
</template>