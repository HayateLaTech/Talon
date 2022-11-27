<script setup>
  const { $bootstrap } = useNuxtApp()
</script>

<template>
  <div>
    <Navbar/>

    <main class="mt-3">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>

