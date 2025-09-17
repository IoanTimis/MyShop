import { reactive, computed } from 'vue';
import en from './en.json';
import ro from './ro.json';

const messages = { en, ro };

const STORAGE_KEY = 'app_locale';

const state = reactive({
    locale: localStorage.getItem(STORAGE_KEY) || 'ro',
});

export function useI18n() {
    const resolveKey = (obj, key) => {
        if (!obj) return undefined;
        if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
        return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, obj);
    };

    const t = (key) => {
        const m = messages[state.locale] || {};
        const fallback = messages['en'] || {};
        const val = resolveKey(m, key);
        if (val !== undefined) return val;
        const val2 = resolveKey(fallback, key);
        return val2 !== undefined ? val2 : key;
    };

    const locale = computed(() => state.locale);

    function setLocale(l) {
        if (messages[l]) {
        state.locale = l;
        try { localStorage.setItem(STORAGE_KEY, l) } catch (e) { /* ignore */ }
        }
    }

    return { t, locale, setLocale };
}

// Vue plugin install so it can be used globally via app.use(i18n)
export function install(app) {
    const resolveKey = (obj, key) => {
        if (!obj) return undefined;
        if (Object.prototype.hasOwnProperty.call(obj, key)) return obj[key];
        return key.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, obj);
    };

    const api = {
        t: (key) => {
            const m = messages[state.locale] || {};
            const fallback = messages['en'] || {};
            const val = resolveKey(m, key);
            if (val !== undefined) return val;
            const val2 = resolveKey(fallback, key);
            return val2 !== undefined ? val2 : key;
        },
        locale: computed(() => state.locale),
        setLocale: (l) => {
        if (messages[l]) {
            state.locale = l;
            try { localStorage.setItem(STORAGE_KEY, l) } catch (e) {}
        }
        }
    };

    app.config.globalProperties.$t = api.t;
    app.provide('i18n', api);
}

export default { install };
