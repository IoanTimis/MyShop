<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { useI18n } from '@/i18n';

const { t } = useI18n();

const sections = [
  {
    key: 'footer.section_titles.services',
    items: [
      { key: 'footer.links.opening_the_package_upon_delivery', href: '' },
      { key: 'footer.links.30_days_right_of_return', href: '' },
      { key: 'footer.links.guarantees_and_service', href: '' },
    ],
  },
  {
    key: 'footer.section_titles.orders_and_delivery',
    items: [
      { key: 'footer.links.i_want_to_sell_on_myshop', href: '' },
      { key: 'footer.links.my_myshop_account', href: '' },
    ],
  },
  {
    key: 'footer.section_titles.client_support',
    items: [
      { key: 'footer.links.product_return_form', href: '' },
      { key: 'nav.contact', href: '/contact' },
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
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(section, i) in sections" :key="section.key" class="md:flex md:justify-center">
          <!-- desktop -->
          <div class="hidden md:block">
            <h3 class="font-semibold text-white mb-3">{{ t(section.key) }}</h3>
            <ul class="space-y-2 text-gray-300">
              <li v-for="item in section.items" :key="item.key">
                <Link v-if="!item.isMail" :href="item.href" class="hover:underline">{{ t(item.key) }}</Link>
                <a v-else :href="item.href" class="hover:underline">{{ t(item.key) }}</a>
              </li>
            </ul>
          </div>

          <!-- mobile accordion -->
          <div class="md:hidden border-t border-gray-700">
            <button @click="toggle(i)" class="w-full flex justify-between items-center py-3 text-left">
              <span class="text-gray-200">{{ t(section.key) }}</span>
              <svg :class="{'transform rotate-180': openIndex === i}" class="w-5 h-5 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
            <div v-show="openIndex === i" class="py-2">
              <ul class="space-y-2 text-gray-300">
                <li v-for="item in section.items" :key="item.key">
                  <Link v-if="!item.isMail" :href="item.href" class="block py-2">{{ t(item.key) }}</Link>
                  <a v-else :href="item.href" class="block py-2">{{ t(item.key) }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mt-6 items-center justify-center">
          <p class="text-sm text-gray-300 ml-2">{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>
