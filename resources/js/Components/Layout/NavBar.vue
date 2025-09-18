<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { HeartIcon, UserIcon, MagnifyingGlassIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import NavLink from '@/Components/NavLink.vue';
import { useI18n } from '@/i18n';

const { t } = useI18n();

const sections = [
    {
        key: 'nav.links',
        items: [
            { key: 'my_account', href: '/account' },
            { key: 'favorites', href: '/favorites' },
            { key: 'cart', href: '/cart' },
            { key: 'search', href: '/search' },
            { key: 'logout', href: route('logout'), isPost: true },
        ],
    },
];

const showLang = ref(false);
const openIndex = ref(-1);
const query = ref('');
const searchInput = ref(null);
const searchInputMobile = ref(null);

function toggle(i) {
    openIndex.value = openIndex.value === i ? -1 : i;
}

function clearSearch() {
    query.value = '';
    // focus the visible input if available
    if (searchInput.value) {
        searchInput.value.focus();
        return;
    }
    if (searchInputMobile.value) {
        searchInputMobile.value.focus();
    }
}
</script>

<template>
    <header
        class="bg-white sticky top-0 flex items-center justify-between gap-4 border-b border-gray-200 px-2 py-2 sm:px-6 md:px-8 lg:px-20 z-50"
    >
        <!-- left: logo -->
        <div class="flex items-center">
            <a href="/" class="inline-flex items-center">
                <img alt="Logo" src="/images/logo2.png" class="h-10 w-auto md:h-16 md:w-20" />
            </a>
        </div>

        <!-- center: large search on desktop -->
        <div class="hidden md:flex flex-1 justify-center px-4">
            <form action="/search" method="GET" class="w-full max-w-2xl">
                <label for="q" class="sr-only">Search</label>
                <div class="relative">
                    <input
                        id="q"
                        name="q"
                        ref="searchInput"
                        v-model="query"
                        :placeholder="t('nav.search_placeholder')"
                        class="w-full rounded-full border border-gray-300 bg-white px-4 py-3 pr-14 pl-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        type="button"
                        v-if="query"
                        @click.prevent="clearSearch"
                        class="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600"
                        aria-label="Clear search"
                    >
                        <XMarkIcon class="w-5 h-5" />
                    </button>
                    <button type="submit" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600" aria-label="Search">
                        <MagnifyingGlassIcon class="w-5 h-5" aria-hidden="true" />
                    </button>
                </div>
            </form>
        </div>

        <!-- right: icons (desktop with labels, mobile icons only) -->
        <div class="flex items-center gap-3">
            <!-- Desktop: icons + labels -->
            <nav class="hidden md:flex items-center gap-6">
                <Link href="/profile" class="flex items-center gap-2 text-gray-700 hover:text-black">
                    <UserIcon class="w-5 h-5" />
                    <span class="text-sm">{{ t('nav.links.my_account') }}</span>
                </Link>

                <Link href="/favorites" class="flex items-center gap-2 text-gray-700 hover:text-black">
                    <HeartIcon class="w-5 h-5" />
                    <span class="text-sm">{{ t('nav.links.favorites') }}</span>
                </Link>

                <Link href="/cart" class="flex items-center gap-2 text-gray-700 hover:text-black">
                    <ShoppingCartIcon class="w-5 h-5" />
                    <span class="text-sm">{{ t('nav.links.cart') }}</span>
                </Link>
            </nav>

            <!-- Mobile: icons only in header -->
            <div class="flex md:hidden items-center gap-3">
                <Link href="/favorites" class="text-gray-700 hover:text-black">
                    <HeartIcon class="w-6 h-6" />
                </Link>
                <Link href="/cart" class="text-gray-700 hover:text-black">
                    <ShoppingCartIcon class="w-6 h-6" />
                </Link>
                <Link href="/account" class="text-gray-700 hover:text-black">
                    <UserIcon class="w-6 h-6" />
                </Link>
                <!-- mobile menu toggle could go here -->
            </div>
        </div>
    </header>

    <!-- mobile: search bar under header -->
    <div class="md:hidden px-4 py-2 bg-white border-b border-gray-200">
        <form action="/search" method="GET" class="w-full">
            <label for="q-mobile" class="sr-only">Search</label>
            <div class="relative">
                <input
                    id="q-mobile"
                    name="q"
                    ref="searchInputMobile"
                    v-model="query"
                    :placeholder="t('nav.search_placeholder')"
                    class="w-full rounded-full border border-gray-300 bg-white px-4 py-3 pr-14 pl-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    type="button"
                    v-if="query"
                    @click.prevent="clearSearch"
                    class="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500"
                    aria-label="Clear search"
                >
                    <XMarkIcon class="w-5 h-5" />
                </button>
                <button type="submit" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" aria-label="Search">
                    <MagnifyingGlassIcon class="w-5 h-5" aria-hidden="true" />
                </button>
            </div>
        </form>
    </div>
</template>