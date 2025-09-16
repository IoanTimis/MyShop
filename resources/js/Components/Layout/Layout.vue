<script setup>
import { Link } from "@inertiajs/vue3";
import { ref } from 'vue';
import { useI18n } from '@/i18n';

const { t, locale, setLocale } = useI18n();
const showLang = ref(false);
</script>
<template>
    <!-- TODO: Header component -->
    <header
        class="bg-black sticky top-0 flex items-center justify-between gap-4 border-b border-gray-700 px-2 py-4 sm:px-6 md:px-8 lg:px-20 z-[99999]"
    >
        <div>
            <a href="/">
                <img
                    alt="Logo"
                    src="/images/logo.png"
                    class="h-10 w-10 object-contain"
                />
            </a>
        </div>
        <div class="flex items-center justify-center gap-5">
            <!-- small language toggle -->
            <div class="relative">
                <button @click.prevent="showLang = !showLang" class="text-white px-2 py-1 border rounded">
                    {{ locale }}
                </button>
                <div v-if="showLang" class="absolute right-0 mt-2 bg-white text-black rounded shadow-lg">
                    <button class="block px-3 py-1 hover:bg-gray-100 w-full text-left" @click.prevent="setLocale('ro'); showLang = false">RO</button>
                    <button class="block px-3 py-1 hover:bg-gray-100 w-full text-left" @click.prevent="setLocale('en'); showLang = false">EN</button>
                </div>
            </div>
        </div>
        <div class="flex gap-3">
            <button
                class="border text-white whitespace-nowrap p-2 rounded bg-blue-600 text-lg font-semibold font-['Inter']"
            >
                <a :href="route('login')"> {{ t('login') }} </a>
            </button>
            <button
                class="text-white bg-[#DEAD47] whitespace-nowrap p-2 rounded hover:opacity-95 text-lg font-semibold font-['Inter']"
            >
                <a :href="route('register')"> {{ t('register') }} </a>
            </button>
        </div>
    </header>
    <main class="min-h-[calc(100vh-89px)]">
        <slot></slot>
    </main>
    <footer class="bg-black text-white py-6 mt-10">
        <div class="container mx-auto px-4">
                <!-- TODO: footer asemantor cu emag (component) -->
            <div class="flex flex-row justify-between align-items-center">
                <div class="flex flex-col space-y-2 mt-4 md:mt-0">
                    <span>Servicii</span>
                    <Link href="/" class="hover:underline">Home</Link>
                    <Link href="/about" class="hover:underline">About</Link>
                    <Link href="/contact" class="hover:underline">Contact</Link>
                </div>
                 <div class="flex flex-col space-y-2 mt-4 md:mt-0">
                    <Link href="/" class="hover:underline">Home</Link>
                    <Link href="/about" class="hover:underline">About</Link>
                    <Link href="/contact" class="hover:underline">Contact</Link>
                </div>
                 <div class="flex flex-col space-y-2 mt-4 md:mt-0">
                    <Link href="/" class="hover:underline">Home</Link>
                    <Link href="/about" class="hover:underline">About</Link>
                    <Link href="/contact" class="hover:underline">Contact</Link>
                </div>
                 <div class="flex flex-col space-y-2 mt-4 md:mt-0">
                    <Link href="/" class="hover:underline">Home</Link>
                    <Link href="/about" class="hover:underline">About</Link>
                    <Link href="/contact" class="hover:underline">Contact</Link>
                </div>
            </div>
        </div>
    </footer>
</template>
