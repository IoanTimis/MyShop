/www/myshop/resources/js/Components/Footer.vue
<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { useI18n } from '@/i18n';

const { t } = useI18n();

const sections = [
    {
        key: 'footer.section_titles.services',
        items: [
            { key: 'footer.links.i_want_to_sell_on_myshop', href: '/sell' },
            { key: 'footer.links.my_myshop_account', href: '/account' },
            { key: 'footer.links.product_return_form', href: '/return' },
            { key: 'footer.links.guarantees_and_service', href: '/guarantees' },
        ],
    },
    {
        key: 'footer.section_titles.orders_and_delivery',
        items: [
            { key: 'footer.links.30_days_right_of_return', href: '/return-policy' },
            { key: 'footer.links.opening_the_package_upon_delivery', href: '/delivery' },
            { key: 'footer.links.order_and_delivery', href: '/orders' },
        ],
    },
    {
        key: 'footer.section_titles.client_support',
        items: [
            { key: 'footer.links.help', href: '/help' },
            { key: 'footer.links.faq', href: '/faq' },
        ],
    },
];

const openIndex = ref(-1);
function toggle(i) {
    openIndex.value = openIndex.value === i ? -1 : i;
}
</script>

<template>
    <footer class="bg-black text-white py-8" role="contentinfo" aria-label="Site footer">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Col 1: brand / copyright -->
                <div class="space-y-3">
                    <a href="/" class="inline-block">
                        <img src="/images/logo.png" alt="MyShop logo" class="h-10 w-auto" />
                    </a>
                    <p class="text-sm text-gray-300">{{ t('footer.copyright') }}</p>
                </div>

                <!-- Col 2: Services / links -->
                <div class="hidden md:block">
                    <h3 class="text-sm font-semibold text-white mb-3">{{ t('footer.section_titles.services') }}</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li><Link href="/sell" class="hover:underline">{{ t('footer.links.i_want_to_sell_on_myshop') }}</Link></li>
                        <li><Link href="/account" class="hover:underline">{{ t('footer.links.my_myshop_account') }}</Link></li>
                        <li><Link href="/return" class="hover:underline">{{ t('footer.links.product_return_form') }}</Link></li>
                        <li><Link href="/guarantees" class="hover:underline">{{ t('footer.links.guarantees_and_service') }}</Link></li>
                    </ul>
                </div>

                <!-- Col 3: Orders and delivery -->
                <div class="hidden md:block">
                    <h3 class="text-sm font-semibold text-white mb-3">{{ t('footer.section_titles.orders_and_delivery') }}</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li><Link href="/return-policy" class="hover:underline">{{ t('footer.links.30_days_right_of_return') }}</Link></li>
                        <li><Link href="/delivery" class="hover:underline">{{ t('footer.links.opening_the_package_upon_delivery') }}</Link></li>
                        <li><Link href="/orders" class="hover:underline">{{ t('footer.links.order_and_delivery') }}</Link></li>
                    </ul>
                </div>

                <!-- Col 4: Client support -->
                <div class="hidden md:block">
                    <h3 class="text-sm font-semibold text-white mb-3">{{ t('footer.section_titles.client_support') }}</h3>
                    <ul class="space-y-2 text-gray-300">
                        <li><Link href="/help" class="hover:underline">{{ t('footer.links.help') }}</Link></li>
                        <li><Link href="/faq" class="hover:underline">{{ t('footer.links.faq') }}</Link></li>
                    </ul>
                </div>

                <!-- Mobile accordion -->
                <div class="md:hidden">
                    <div v-for="(section, i) in sections" :key="i" class="mb-4">
                        <button
                            @click="toggle(i)"
                            class="flex items-center justify-between w-full text-left text-white font-semibold py-2 px-3 bg-gray-800 rounded"
                        >
                            {{ t(section.key) }}
                            <span class="ml-2">{{ openIndex === i ? '-' : '+' }}</span>
                        </button>
                        <div v-if="openIndex === i" class="mt-2 pl-4">
                            <ul class="space-y-1">
                                <li v-for="item in section.items" :key="item.key">
                                    <Link :href="item.href" class="block text-gray-300 hover:underline">{{ t(item.key) }}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>