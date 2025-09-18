<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { useI18n } from '@/i18n';

const { t } = useI18n();

interface User {
    name?: string;
    email?: string;
    avatar?: string;
}

const props = defineProps<{ user: User | null }>();

const dropdownOpen = ref(false);
const dropdownButtonRef = ref<HTMLButtonElement | null>(null);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
}

// Custom composition function to handle click outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownButtonRef.value && !dropdownButtonRef.value.contains(event.target as Node)) {
    dropdownOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="relative inline-block">
    <button
      @click="toggleDropdown"
      ref="dropdownButtonRef"
      class="inline-flex items-center gap-2 text-gray-700 hover:text-black px-2 py-1 rounded"
    >
      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 21v-1c0-2.76-2.24-5-5-5H8c-2.76 0-5 2.24-5 5v1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  <span class="text-sm">{{ props.user?.name ?? t('nav.links.my_account') }}</span>
      <svg :class="dropdownOpen ? '-scale-y-100' : ''" class="w-4 h-4 transform duration-100" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>

    <div v-show="dropdownOpen" class="absolute right-0 top-full mt-2 w-[240px] divide-y divide-gray-100 overflow-hidden rounded-lg bg-white shadow">
      <div class="flex items-center gap-3 px-4 py-3">
        <div class="relative aspect-square w-10 rounded-full overflow-hidden bg-gray-200">
          <img v-if="props.user?.avatar" :src="props.user.avatar" alt="avatar" class="w-full h-full object-cover" />
          <div v-else class="w-full h-full flex items-center justify-center text-gray-500">{{ (props.user?.name || 'U').charAt(0) }}</div>
        </div>
        <div>
          <p class="text-sm font-semibold text-gray-900">{{ props.user?.name ?? '' }}</p>
          <p class="text-sm text-gray-500">{{ props.user?.email ?? '' }}</p>
        </div>
      </div>
      <div>
        <Link :href="route('profile.edit')" class="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">{{ t('nav.links.profile') }}</Link>
        <Link :href="route('logout')" method="post" as="button" class="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">{{ t('nav.links.logout') }}</Link>
      </div>
    </div>
  </div>
</template>
