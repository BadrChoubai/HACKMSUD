<script setup lang="ts">
const { data } = await useFetch('/api/events');
</script>

<template>
    <div class="flex flex-col gap-8 lg:w-5/6">
        <section>
            <article>
                <h1 class="mb-2 border-b-4 border-b-blue-500 dark:border-b-red-500">Events</h1>
                <p class="text-2xl">
                    The ACM Student Association plans to hold events for the Fall Semester, and also wants to start
                    attending tech events in the broader Denver Metro Tech community.
                    Below are all the events that we plan on hosting ourselves or attending as a group.
                </p>
            </article>
        </section>
        <section>
            <header>
                <h2 class="font-bold">Events Calendar</h2>
            </header>
            <div class="mt-4 mb-4 flex flex-row flex-wrap items-stretch gap-4">
                <article class="flex flex-col justify-around items-stretch p-2 shadow-sm md:w-5/12 w-full rounded-md dark:bg-slate-700 bg-white/50" v-for="event in data.events">
                    <header class="block">
                        <nuxt-link :to="event.url" external :aria-label="`View event website for ${event.title}`">
                            <h3 class="text-xl font-semibold underline underline-offset-4">{{ event.title }}</h3>
                        </nuxt-link>
                        <span v-if="event.date">{{ event.date.start }}</span>
                        <span v-else>TBA</span>
                    </header>
                    <p class="text-lg mt-2 mb-2">
                        {{ event.description }}
                    </p>
                    <div class="flex items-center flex-row flex-wrap gap-2">
                        <span class="bg-blue-400/20 dark:bg-red-400/20 px-2 whitespace-nowrap" v-for="tag in event.tags" :key="tag">
                            {{ tag[0] }}
                        </span>
                    </div>
                </article>
            </div>
            <button class="bg-white mt-4 rounded flex items-center p-2">
                <icons-notion class="block" />
                <nuxt-link external target="_blank" to="https://acm-msud.notion.site/757f19532b4f4572a4d01d6c4a39d306?v=803892f5d5ec4937a41fc50040656256" class="text-[#37352f] font-display font-black p-2 block">
                    View on Notion
                </nuxt-link>
            </button>
        </section>
    </div>
</template>