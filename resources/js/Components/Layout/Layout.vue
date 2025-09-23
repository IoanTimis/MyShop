<script setup>
import Footer from '@/Components/Layout/Footer.vue';
import NavBar from '@/Components/Layout/NavBar.vue';
</script>
<template>
    <NavBar />
    <main class="min-h-[calc(100vh-89px)]">
        <slot></slot>
    </main>
    <Footer />
</template>
