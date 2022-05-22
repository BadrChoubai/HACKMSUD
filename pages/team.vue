<script setup lang="ts">
const route = useRoute()
definePageMeta({
  title: 'Team'
})

useHead({
    title: route.meta.title, 
    htmlAttrs: {
        lang: "en-US"
    },
    meta: [
        { name: 'og:title', content: `HACKMSUD - ${route.meta.title}` },
        { name: 'description', content: "Learn about the teams involved in running HACKMSUD and the ACM Student Chapter at Metropolitan State University of Denver." },
        { name: 'og:description', content: "Learn about the teams involved in running HACKMSUD and the ACM Student Chapter at Metropolitan State University of Denver." }
    ],
})

interface Team {
    title: string;
    description: string;
}

const teams: Team[] = [
    {
        title: "Finance",
        description: "This team is responsible for securing sponsorships, making sure the vendors get paid according to the agreed timelines and managing the cash flow and budget."
    },
    {
        title: "Marketing",
        description: "This team is in charge of promoting the event, deciding the marketing strategy, handling social media etc."
    },    
    {
        title: "Operations",
        description: "This team is responsible for the hacker experience at the hackathon. Every aspect of what the hackathon looks and feels like, this team is entirely responsible for that. Keep in mind, hacker experience is usually the thing that can make or break your hackathon. We might like to call this the think tank of your hackathon team."
    },
    {
        title: "Logistics",
        description: "This team is responsible for all logistics of the hackathon like booking the venue, developing and making the schedule, ordering swag, prizes, food and other essentials for the event etc.",
    },
    {
        title: "Technology",
        description: "This team is in charge of the development lifecycle of our main website and the websites created for individual events. Members of this team can also serve as mentors with the opportunity to host workshops at the event and throughout the year."
    },

]

</script>

<template>
    <div class="flex flex-col gap-y-8">
        <section>
            <article>
                <h1 class="mb-2 border-b-4 border-b-blue-500 dark:border-b-red-500">Meet the Teams</h1>
                <p class="text-2xl mt-3 mb-3">
                    Everything involved from the planning of to the day-of a hackathon is something that no one can
                    accomplish alone. We will be looking for students interested in building the school's first-ever
                    hackathon event and who can keep the spark alive in helping build each subsequent one.
                </p>
                <p class="text-2xl mt-3 mb-3">
                    We want to invite students from all majors to take part in putting this event, we need
                    students to manage technology, financing, logistics, sponsorships and marketing, and much more.
                </p>
            </article>
        </section>
        <section class="w-full">
            <header class="mb-3">
                <h2 class="font-bold">The Teams</h2>
            </header>
            <div class="mt-3 mb-3 flex flex-row flex-wrap items-stretch justify-start gap-4">
                <article
                    class="flex flex-col justify-start w-full lg:w-[600px] items-start p-6 shadow-sm border-2 border-black dark:bg-slate-700"
                    v-for="{ title, description } in teams">
                    <h3 class="text-2xl font-semibold underline underline-offset-4">{{ title }}</h3>
                    <p class="text-lg mt-2 mb-2">
                        {{ description }}
                    </p>
                </article>
            </div>
            <button class="bg-blue-600/80 dark:bg-red-500/80 mt-3 p-4 shadow-md md:w-1/3 w-full">
                <nuxt-link external target="_blank" to="https://qxir78vuisl.typeform.com/to/a8DAfcrA"
                    class="text-white tracking-widest whitespace-nowrap font-display text-clip font-black drop-shadow-md w-full"
                    aria-label="Volunteer Application">APPLY NOW</nuxt-link>
            </button>
        </section>
    </div>
</template>