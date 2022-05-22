<script setup lang="ts">
const route = useRoute()
definePageMeta({
  title: 'Events'
})

useHead({
    title: route.meta.title,
    htmlAttrs: {
        lang: "en-US"
    },
    meta: [
        { name: 'og:title', content: `HACKMSUD - ${route.meta.title}` },
        { name: 'description', content: "View the events calendar for the ACM Student Chapter. With events hosted either by us or by other organizations in the Denver Metro Area." },
        { name: 'og:description', content: "View the events calendar for the ACM Student Chapter. With events hosted either by us or by other organizations in the Denver Metro Area." }
    ],
})

const { data } = await useFetch('/api/events');
</script>

<template>
    <div class="flex flex-col gap-y-8">
        <section>
            <article>
                <h1 class="mb-2 border-b-4 border-b-blue-500 dark:border-b-red-500">Events</h1>
                <p class="text-2xl mt-3 mb-3">
                    The ACM Student Association plans to hold events for the Fall Semester, and also wants to start
                    attending tech events in the broader Denver Metro Tech community.
                    Below are all the events that we plan on hosting ourselves or attending as a group.
                </p>
            </article>
        </section>
        <section class="w-full">
            <header>
                <h2 class="font-bold">Events Calendar</h2>
            </header>
            <div class="mt-3 mb-3 flex flex-row flex-wrap justify-start gap-4">
                <article
                    class="flex flex-col justify-around w-full lg:w-[600px] items-start p-6 shadow-sm border-2 border-black dark:bg-slate-700"
                    v-for="event in data.events">
                    <header class="block">
                        <nuxt-link :to="event.url" external target="_blank"
                            :aria-label="`View event details for ${event.title}`">
                            <h3 class="text-2xl font-semibold underline underline-offset-4">{{ event.title }}</h3>
                        </nuxt-link>
                        <span v-if="event.date">{{ event.date.start }}</span>
                        <span v-else>TBA</span>
                    </header>
                    <p class="text-lg mt-2 mb-2">
                        {{ event.description }}
                    </p>
                    <div class="flex items-center flex-row flex-wrap gap-2">
                        <span class="bg-blue-400/20 dark:bg-red-400/20 px-2 whitespace-nowrap" v-for="tag in event.tags"
                            :key="tag">
                            {{ tag[0] }}
                        </span>
                    </div>
                </article>
            </div>
            <button>
                <nuxt-link class="bg-white border-2 border-black p-2 block"
                    to="https://acm-msud.notion.site/757f19532b4f4572a4d01d6c4a39d306?v=803892f5d5ec4937a41fc50040656256">
                    <icons-notion class="scale-50" />
                    <span class="sr-only">View on Notion</span>
                </nuxt-link>
            </button>
        </section>
    </div>
</template>