<script setup>

import CountryFlag from "vue-country-flag-next"

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

</script>

<template>

    <nav class="navbar shadow-sm navbar-expand-lg navbar-dark bg-dark rounded-bottom">
        <div class="container-fluid">
            <NuxtLink class="navbar-brand text-danger" to="#">Talon</NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item" v-for="locale in availableLocales" :key="locale.code">
                    <NuxtLink :to="switchLocalePath(locale.code)" class="nav-link">
                        <country-flag :country="locale.cc" size="normal" />
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>

</template>