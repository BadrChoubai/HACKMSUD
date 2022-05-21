<script setup lang="ts">
interface Question {
    question: string;
    answer: string;
    resources?: {
        name: string;
        url: string;
    }[];
    source?: string;
}

const questions: Question[] = [
    {
        question: "What is a Hackathon?",
        answer: "Hackathons are an incredible way to bring your community together to learn new skills, build amazing projects, and share ideas. A hackathon is best described as an “invention marathon”. Anyone who has an interest in technology attends a hackathon to learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don’t have to be a programmer and you certainly don’t have to be majoring in Computer Science!",
        source: "https://guide.mlh.io/overview/why-organize-a-hackathon"
    },
    {
        question: "Can someone with little to no experience participate?",
        answer: "Yes, absolutely! Hackathons are setup to make sure that no matter a participant's level of experience, they will get help if they ask for it. Some will have booths setup for mentors and almost everyone in attendance will be willing to help."
    },
    {
        question: "Where can I find Hackathon events to attend?",
        answer: `There are a few websites you can visit to find hackathons and other tech events`,
        resources: [
            { name: "Major Leaque Hacking - 2022 Events Calendar", url: "https://mlh.io/seasons/2022/events" },
            { name: "Devpost", url: "https://www.devpost.com/" },
            { name: "Meetup.com", url: "https://www.meetup.com/" },
        ],
    },
    {
        question: "How could I prepare for a hackathon?",
        answer: "Many resources are available online for learning how to code. In our experience, it is best to come to your first hackathon with working knowledge of the basics of one to two programming languages, and an understanding of git.",
        resources: [
            { name: "MSU Denver - Computer Science Resources", url: "https://badrchoubai.github.io/CS-Resources/" },
            { name: "MIT - Your Missing Semester of Computer Science", url: "https://missing.csail.mit.edu/" },
            { name: "Exercism.io - Solve programming problems using TDD (Test-Driven Development)", url: "https://exercism.org/" },
            { name: "Frontend Mentor - Front-end Projects Following a Realistic Workflow", url: "https://www.frontendmentor.io/" }
        ]
    }
]

</script>

<template>
    <div>
        <section>
            <article>
                <h1 class="border-b-4 border-b-blue-500 dark:border-b-red-500">Frequently Asked Questions</h1>
                <p class="text-2xl mt-3 mb-3">
                    This page should help to answer any questions you have about a hackathon. If not, you can head to
                    the <span class="inline-block">#questions-answers</span> channel on the Discord.
                </p>
            </article>
        </section>
        <section>
            <header>
                <h2 class="font-bold">General Questions</h2>
            </header>
            <div class="mt-4 mb-4 flex flex-col justify-start items-stretch gap-4">
                <details class="p-4 shadow-sm border-2 border-black dark:bg-slate-700"
                    v-for="({ question, answer, source, resources }, i) in questions" :key="i" :id="`accordion-${i}`">
                    <summary class="flex items-center justify-between cursor-pointer">
                        <h3 class="font-semibold tracking-wider underline underline-offset-4 md:text-2xl text-[100%]">{{
                                question
                        }}
                        </h3>
                        <span class="material-icons">expand_more</span>
                    </summary>
                    <p class="text-xl mt-3" :class="source ? `mb-3` : `mb-0`" id="AccordionAnswer">
                        {{ answer }}
                    </p>
                    <div v-if="source">
                        <nuxt-link external target="_blank" :to="source"
                            class="underline text-blue-500 dark:text-white">
                            Source: {{ source }}
                        </nuxt-link>
                    </div>
                    <div v-if="resources">
                        <ul class="list-inside list-disc">
                            <li v-for="{ name, url } in resources" class="mt-1">
                                <nuxt-link external target="_blank" :to="url"
                                    class="underline text-blue-500 dark:text-white">
                                    {{ name }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </details>
            </div>
            <button class="bg-blue-600/80 dark:bg-red-500/80 p-4 shadow-md w-full">
                <a class="text-white tracking-widest whitespace-nowrap font-display text-clip font-black drop-shadow-md"
                    href="https://discord.gg/kCMAQBgv9S" aria-label="Link to join CS Student Discord">ASK A QUESTION ON
                    DISCORD</a>
            </button>
        </section>
    </div>
</template>