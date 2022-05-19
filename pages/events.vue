<script setup lang="ts">
interface Event {
    title: string;
    description: string;
    date?: Date ;
    url: string;
    tags: string[];
}

const events: Event[] = [
    {
        title: "Das42 Presentation",
        description: "Das42 is a startup company in Denver",
        date: new Date("2022-04-28"),
        url: "https://www.msudenver.edu/career-link",
        tags: ["on-campus", "ACM"]
    },
        {
        title: "HACKMSUD",
        description: "Planning is currently in progress for MSU Denver's first ever Hackathon.",
        url: "https://discord.gg/PpGv3naY",
        tags: ["on-campus", "ACM"]
    },
]
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
            <div class="md:mt-4 flex flex-row flex-wrap items-stretch gap-4">
                <article class="flex flex-col justify-around items-stretch p-2 shadow-sm md:w-5/12 w-full rounded-md dark:bg-slate-700 bg-white/50" v-for="event in events">
                    <header class="block">
                        <nuxt-link :to="event.url" external :aria-label="`View event website for ${event.title}`">
                            <h3 class="text-xl font-semibold underline underline-offset-4">{{ event.title }}</h3>
                        </nuxt-link>
                        <span v-if="event.date">{{ event.date.toDateString() }}</span>
                        <span v-else>TBA</span>
                    </header>
                    <p class="text-lg mt-2 mb-2">
                        {{ event.description }}
                    </p>
                    <div class="flex items-center flex-row gap-2 mt-2 mb-2">
                        <span class="bg-blue-400/20 dark:bg-red-400/20 px-2 whitespace-nowrap" v-for="tag in event.tags" :key="tag">
                            {{ tag.toUpperCase() }}
                        </span>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>