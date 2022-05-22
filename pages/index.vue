<script setup>
const route = useRoute()
definePageMeta({
  title: 'Home'
})

useHead({
    title: route.meta.title,
    htmlAttrs: {
        lang: "en-US"
    },
    meta: [
        { name: 'og:title', content: `HACKMSUD - ${route.meta.title}` },
        { name: 'description', content: "This serves as the homepage for the team planning MSU Denver's first-ever Hackathon." },
        { name: 'og:description', content: "This serves as the homepage for the team planning MSU Denver's first-ever Hackathon." },
    ],
})
</script>

<template>
    <section>
        <article class="flex flex-col">
            <h1 class="font-display font-black lg:text-8xl border-b-blue-600 dark:border-b-red-500 border-b-4 mb-3">
                MSU Denver's First Hackathon
            </h1>
            <p class="mt-3 mb-3 text-2xl">
                This is the homepage for MSU Denver's official Hackathon, led by students for students. It's open-source
                and wholley meant to help students learn about and stay up to date on all things pertaining to MSU
                Denver, campus- and city-wide tech events.
            </p>
            <p class="mt-3 mb-3 text-2xl">
                We are going to be planning MSU Denver's very first Hackathon event and will need interested students to
                join us in doing so, information will be posted somewhere at some time. Stay up to date on the CS
                Student Discord and through your student emails!
            </p>
            <div id="BtnContainer" class="flex flex-row flex-wrap gap-4 mt-3 mb-3">
                <button class="bg-blue-600/80 dark:bg-red-500/80 p-4 rounded md:w-1/3 w-full">
                    <nuxt-link
                        class="text-white tracking-widest whitespace-nowrap font-display font-black drop-shadow-md"
                        to="/hackathon" aria-label="Read more about the hackathon">LEARN MORE</nuxt-link>
                </button>
                <button class="bg-blue-600/80 dark:bg-red-500/80 p-4 rounded md:w-1/3 w-full">
                    <a class="text-white tracking-widest whitespace-nowrap font-display text-clip font-black drop-shadow-md"
                        href="https://discord.gg/kCMAQBgv9S" aria-label="Join us on Discord">JOIN US ON DISCORD</a>
                </button>
            </div>
        </article>
    </section>
</template>