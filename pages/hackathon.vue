<script setup>
const route = useRoute()
definePageMeta({
  title: 'Planning a Hackathon'
})

useHead({
    title: route.meta.title,
    htmlAttrs: {
        lang: "en-US"
    },
    meta: [
        { name: 'og:title', content: `HACKMSUD - ${route.meta.title}` },
        { name: 'description', content: "Learn about how and what the ACM Student Chapter is trying to accomplish in planning their University's first-ever hackathon" },
        { name: 'og:description', content: "Learn about how and what the ACM Student Chapter is trying to accomplish in planning their University's first-ever hackathon" }
    ],
})
</script>

<template>
    <div class="flex flex-col gap-8">
        <section>
            <article>
                <h1 class="mb-2 border-b-4 border-b-blue-500 dark:border-b-red-500">Planning a Hackathon</h1>
                <p class="text-2xl mt-3 mb-3">A lot goes in to planning a Hackathon event. This page contains information detailing what you as a
                    student at MSU Denver could do to help. We are going to be building out a team of volunteers to help
                    us
                    make it happen.</p>
            </article>
        </section>
        <section>
            <article>
                <h2 class="font-bold">
                    Our Hackathon Wishlist
                </h2>
                <ul class="list-inside list-disc mx-4 mb-3 mt-3">
                    <li class="list-item text-xl">Host students from the Auraria Campus meaning that any student from MSU Denver, CU Denver, or CCD can be involved</li>
                    <li class="list-item text-xl">Host one large annual hackathon, and a series of mini-hackathons throughout an academic year</li>
                    <li class="list-item text-xl">Streamline processes for financing and logistics of future events</li>
                    <li class="list-item text-xl">Make connections with companies and other universities in the Denver Metro for future events</li>
                    <li class="list-item text-xl">Provide students a sense of accomplishing something with a team and give them a space to build out their ideas</li>
                </ul>
            </article>
        </section>
        <section>
            <article>
                <h2 class="font-bold">How Can I Contribute?</h2>
                <p class="mt-3 mb-3 text-2xl">If the list above provides some excitement for things to come, good! We are looking for help in managing all sorts of things: Technology, Finances, Logistics, and
                    Marketing. We will begin to open up a small set of volunteer roles to students interested in
                    applying very soon. Keep an eye out for an announcement in your student emails or on the CS Student Discord</p>
                <button class="bg-blue-600/80 dark:bg-red-500/80 p-4 rounded md:w-1/3 w-full">
                    <a class="text-white tracking-widest whitespace-nowrap font-display text-clip font-black drop-shadow-md"
                        href="https://discord.gg/kCMAQBgv9S" aria-label="Link to join CS Student Discord">JOIN THE DISCORD</a>
                </button>
            </article>
        </section>
    </div>
</template>