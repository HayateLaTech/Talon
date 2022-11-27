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
            <NuxtLink class="navbar-brand text-danger" to="/">{{$t("navbar.brand")}}</NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            {{$t("navbar.Sheets")}}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><NuxtLink class="dropdown-item" to="/sheets/swrpCharacterSheet">{{$t("pages.swrpcharsheet.title")}}</NuxtLink></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {{$t("navbar.Change_Language")}}
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li v-for="locale in availableLocales" :key="locale.code">
                            <NuxtLink :to="switchLocalePath(locale.code)" class="dropdown-item text-center">
                                <country-flag :country="locale.cc" size="normal" />
                            </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>

</template>