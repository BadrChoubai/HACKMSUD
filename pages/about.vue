<script setup>
const route = useRoute()
definePageMeta({
  title: 'About'
})

useHead({
    title: route.meta.title, 
    htmlAttrs: {
        lang: "en-US"
    },
    meta: [
        { name: 'og:title', content: `HACKMSUD - ${route.meta.title}` },
        { name: 'description', content: "Learn about HACKMSUD and the ACM Student Chapter at Metropolitan State University of Denver." },
        { name: 'og:description', content: "Learn about HACKMSUD and the ACM Student Chapter at Metropolitan State University of Denver." }
    ],
})
</script>
<template>
    <section>
        <div class="container mx-auto">
            <h1>About</h1>
        </div>
    </section>
</template>