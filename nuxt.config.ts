// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    css: [
        '@/assets/scss/main.scss'
    ],
    modules: [
        '@unocss/nuxt',
    ],
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
