// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                { name: "viewport", content: "width=device-width, initial-scale=1" }
            ],
            bodyAttrs: {
                class: "bg-dark text-white"
            }
        },
    },
    typescript: {
        shim: false
    },
    css: [
        '@/assets/scss/main.scss'
    ],
    modules: [
        '@unocss/nuxt',
        '@nuxtjs/i18n-edge',
    ],
    i18n: {
        locales: [
            {
                code : 'en',
                cc : 'gb',
                file : "en-EN.json"
            },
            {
                code : 'fr',
                cc : 'fr',
                file : "fr-FR.json"
            }
        ],
        defaultLocale: "en",
        langDir: "lang",
        lazy: true,
        vueI18n: {
            fallbackLocale: "en",

        }
    },
    unocss: {
        // presets
        uno: false, // enabled "@unocss/preset-uno"
        icons: true, // enabled "@unocss/preset-icons"
        attributify: false, // enabled "@unocss/preset-attributify"
        
        // core options
        shortcuts: [],
        rules: [],
    },
})
