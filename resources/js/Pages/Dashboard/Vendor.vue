<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { ref } from 'vue';
import ProductForm from '@/Components/ProductForm.vue';
import { Head } from '@inertiajs/vue3';

const showForm = ref(false);
function openForm() { showForm.value = true; }
function closeForm() { showForm.value = false; }
</script>

<template>
  <Head title="Vendor Dashboard" />
  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Vendor Dashboard</h2>
    </template>

    <div class="py-6">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold">My products</h3>
            <button @click="openForm" class="px-4 py-2 bg-indigo-600 text-white rounded">Add item</button>
          </div>

          <!-- placeholder for products list -->
          <div class="text-gray-600">You don't have products yet.</div>
        </div>
      </div>
    </div>

    <ProductForm v-if="showForm" />
  </AuthenticatedLayout>
</template>
