<script setup>
    import { Head, Link } from "@inertiajs/vue3";

    defineProps({
        user: Object,
        canLogin: Boolean,
        canRegister: Boolean,
    });
</script>

<template>
    <Head title="Home" />

    <div class="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <div class="max-w-2xl text-center">
            <h1 class="text-4xl font-extrabold text-gray-900 mb-4">Travellist</h1>
            <p class="text-gray-600 mb-6">Plan your trips, keep memories, and explore new places.</p>

            <div class="flex items-center justify-center gap-3">
                <Link
                    v-if="canLogin"
                    :href="route('login')"
                    class="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                    Log in
                </Link>

                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="inline-block px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50"
                >
                    Register
                </Link>

                <Link
                    v-if="user"
                    :href="route('dashboard')"
                    class="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                    Dashboard
                </Link>
            </div>
        </div>
    </div>
</template>

